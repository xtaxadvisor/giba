import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select } from '../../ui/Select';
export function FilingStatusSection({ value, onChange }) {
    const filingStatuses = [
        { value: 'single', label: 'Single' },
        { value: 'married_joint', label: 'Married Filing Jointly' },
        { value: 'married_separate', label: 'Married Filing Separately' },
        { value: 'head_household', label: 'Head of Household' }
    ];
    return (_jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Filing Status" }), _jsx(Select, { label: "Select your filing status", options: filingStatuses, value: value, onChange: onChange })] }));
}
