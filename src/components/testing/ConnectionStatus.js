import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
import { testConnection } from '../../lib/supabase/client';
import { useNotificationStore } from '../../lib/store';
export function ConnectionStatus() {
    const [isConnected, setIsConnected] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { addNotification } = useNotificationStore();
    const checkConnection = async () => {
        setIsLoading(true);
        try {
            const connected = await testConnection();
            setIsConnected(connected);
            if (!connected) {
                addNotification('Unable to connect to database. Please check your connection.', 'error');
            }
        }
        catch (error) {
            console.error('Connection check failed:', error);
            setIsConnected(false);
            addNotification('Connection check failed. Please try again.', 'error');
        }
        finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        checkConnection();
        // Set up periodic connection checks
        const interval = setInterval(checkConnection, 5 * 60 * 1000); // Check every 5 minutes
        return () => clearInterval(interval);
    }, []);
    return (_jsx("div", { className: "fixed bottom-4 right-4 z-50", children: _jsx("div", { className: "p-4 bg-white rounded-lg shadow-lg", children: _jsxs("div", { className: "flex items-center space-x-2", children: [isConnected === null ? (_jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-blue-500" })) : isConnected ? (_jsx(CheckCircle, { className: "h-5 w-5 text-green-500" })) : (_jsx(XCircle, { className: "h-5 w-5 text-red-500" })), _jsx("span", { className: "font-medium", children: isConnected === null
                            ? 'Checking connection...'
                            : isConnected
                                ? 'Connected to Supabase'
                                : 'Connection failed' }), _jsx(Button, { variant: "outline", size: "sm", icon: RefreshCw, onClick: checkConnection, disabled: isLoading, className: "ml-2", children: isLoading ? 'Checking...' : 'Retry' })] }) }) }));
}
