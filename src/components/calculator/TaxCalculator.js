import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Calculator, Save, Download, Info, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useNotificationStore } from '../../lib/store';
import { Button } from '../ui/Button';
import { IncomeSection } from './sections/IncomeSection';
import { FilingStatusSection } from './sections/FilingStatusSection';
import { DeductionsSection } from './sections/DeductionsSection';
import { CalculationResults } from './sections/CalculationResults';
import { ProgressBar } from './components/ProgressBar';
import { LoginPrompt } from './components/LoginPrompt';
import { calculateTaxes } from '../../utils/taxCalculations';
export function TaxCalculator() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const { addNotification } = useNotificationStore();
    const [formComplete, setFormComplete] = useState(0);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [taxData, setTaxData] = useState({
        filingStatus: 'single',
        income: {
            gross: 0,
            w2: 0,
            selfEmployment: 0,
            investment: 0
        },
        deductions: {
            type: 'standard',
            childTaxCredit: 0,
            studentLoanInterest: 0,
            mortgageInterest: 0
        }
    });
    const [results, setResults] = useState(null);
    const handleInputChange = (section, data) => {
        setTaxData(prev => ({
            ...prev,
            [section]: { ...prev[section], ...data }
        }));
        // Calculate form completion percentage
        const totalFields = 8; // Total number of required fields
        const completedFields = Object.values(taxData).flat().filter(Boolean).length;
        setFormComplete((completedFields / totalFields) * 100);
        // Recalculate taxes
        const newResults = calculateTaxes(taxData);
        setResults(newResults);
    };
    const handleSave = () => {
        if (!isAuthenticated) {
            setShowLoginPrompt(true);
            return;
        }
        // Save calculation logic here
        addNotification('Calculation saved successfully', 'success');
    };
    const handleDownload = () => {
        if (!isAuthenticated) {
            setShowLoginPrompt(true);
            return;
        }
        // Download PDF logic here
        addNotification('PDF generated successfully', 'success');
    };
    return (_jsxs("div", { className: "max-w-4xl mx-auto p-6", children: [_jsxs("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden", children: [_jsx("div", { className: "p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Button, { variant: "ghost", onClick: () => navigate('/'), icon: ArrowLeft, className: "text-white hover:text-blue-100 mr-4", children: "Back to Home" }), _jsxs("div", { className: "flex items-center", children: [_jsx(Calculator, { className: "h-8 w-8 mr-3" }), _jsx("h1", { className: "text-2xl font-bold", children: "Tax Return Calculator" })] }), _jsxs("div", { className: "flex space-x-3", children: [_jsx(Button, { variant: "outline", icon: Save, onClick: handleSave, className: "text-white border-white hover:bg-white hover:text-blue-600", children: "Save" }), _jsx(Button, { variant: "outline", icon: Download, onClick: handleDownload, className: "text-white border-white hover:bg-white hover:text-blue-600", children: "Download PDF" })] })] }) }), _jsxs("div", { className: "p-6", children: [_jsx(ProgressBar, { percentage: formComplete }), _jsxs("div", { className: "space-y-8 mt-6", children: [_jsx(FilingStatusSection, { value: taxData.filingStatus, onChange: (value) => handleInputChange('filingStatus', value) }), _jsx(IncomeSection, { values: taxData.income, onChange: (values) => handleInputChange('income', values) }), _jsx(DeductionsSection, { values: taxData.deductions, onChange: (values) => handleInputChange('deductions', values) }), results && _jsx(CalculationResults, { results: results }), _jsx("div", { className: "bg-blue-50 rounded-lg p-4 mt-6", children: _jsxs("div", { className: "flex items-start", children: [_jsx(Info, { className: "h-5 w-5 text-blue-600 mt-0.5 mr-2" }), _jsxs("div", { className: "text-sm text-blue-800", children: [_jsx("p", { className: "font-medium", children: "Disclaimer:" }), _jsx("p", { children: "This calculator provides a rough estimate only and should not be considered an official calculation. For accurate tax planning, please consult with our certified tax professionals." }), _jsx("div", { className: "mt-2", children: _jsx("a", { href: "/services", className: "text-blue-600 hover:text-blue-800 font-medium", children: "Learn about our professional tax services \u2192" }) })] })] }) })] })] })] }), showLoginPrompt && (_jsx(LoginPrompt, { onClose: () => setShowLoginPrompt(false), feature: results ? 'save your calculation' : 'access all features' }))] }));
}
