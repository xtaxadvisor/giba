import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

import { createRoot } from 'react-dom/client';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';
import './index.css';
// Initialize Sentry
Sentry.init({
    dsn: "https://80cda50e3cf066a524158b31ca370667@o4508848989929472.ingest.us.sentry.io/4508848996155392",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
    environment: import.meta.env.MODE
});
const rootElement = document.getElementById('root');
if (!rootElement)
    throw new Error('Root element not found');
const root = createRoot(rootElement);
root.render(_jsx(React.StrictMode, { children: _jsx(Sentry.ErrorBoundary, { fallback: _jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Something went wrong" }), _jsx("p", { className: "text-gray-600", children: "Our team has been notified and is working on a fix." })] }) }), children: _jsx(App, {}) }) }));
