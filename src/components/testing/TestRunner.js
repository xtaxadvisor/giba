import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Play, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { Button } from '../ui/Button';
import { connectionTester } from '../../services/testing/ConnectionTester';
import { useNotificationStore } from '../../lib/store';
export function TestRunner() {
    const [isRunning, setIsRunning] = useState(false);
    const [results, setResults] = useState(null);
    const { addNotification } = useNotificationStore();
    const handleRunTests = async () => {
        setIsRunning(true);
        try {
            const testResults = await connectionTester.testAll();
            setResults(testResults);
            // Check for failures and notify
            const failures = Object.entries(testResults)
                .filter(([_, result]) => !result.success)
                .map(([service]) => service);
            if (failures.length > 0) {
                addNotification(`Tests failed for: ${failures.join(', ')}. Check console for details.`, 'error');
            }
            else {
                addNotification('All tests passed successfully', 'success');
            }
        }
        catch (error) {
            console.error('Test execution failed:', error);
            addNotification('Test execution failed', 'error');
        }
        finally {
            setIsRunning(false);
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Connection Tests" }), _jsx(Button, { variant: "primary", onClick: handleRunTests, disabled: isRunning, icon: isRunning ? Loader : Play, children: isRunning ? 'Running Tests...' : 'Run Tests' })] }), results && (_jsx("div", { className: "space-y-4", children: Object.entries(results).map(([service, result]) => (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("h3", { className: "text-lg font-medium text-gray-900 capitalize", children: [service, " Test"] }), result.success ? (_jsx(CheckCircle, { className: "h-5 w-5 text-green-500" })) : (_jsx(AlertCircle, { className: "h-5 w-5 text-red-500" }))] }), !result.success && result.error && (_jsxs("div", { className: "text-sm text-red-600", children: ["Error: ", result.error] }))] }, service))) }))] }));
}
