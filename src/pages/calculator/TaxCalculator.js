import { jsx as _jsx } from "react/jsx-runtime";
// Code: TaxCalculator page component
import { TaxCalculator as TaxCalculatorComponent } from '../../components/calculator/TaxCalculator';
export default function TaxCalculator() {
    return (_jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx(TaxCalculatorComponent, {}) }) }));
}
