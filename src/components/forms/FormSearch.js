import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search, Filter } from 'lucide-react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
export function FormSearch({ searchTerm, onSearchChange, selectedCategory, onCategoryChange, selectedYear, onYearChange }) {
    return (_jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-8", children: [_jsx("div", { className: "flex-1", children: _jsx(Input, { placeholder: "Search forms...", value: searchTerm, onChange: (e) => onSearchChange(e.target.value), icon: Search }) }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Select, { options: [
                            { value: 'all', label: 'All Categories' },
                            { value: 'individual', label: 'Individual' },
                            { value: 'business', label: 'Business' },
                            { value: 'employment', label: 'Employment' }
                        ], value: selectedCategory, onChange: onCategoryChange, icon: Filter }), _jsx(Select, { options: [
                            { value: '2023', label: '2023' },
                            { value: '2022', label: '2022' },
                            { value: '2021', label: '2021' }
                        ], value: selectedYear, onChange: onYearChange })] })] }));
}
