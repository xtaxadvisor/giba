import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { AuthProvider } from "./contexts/AuthProvider.js"; // ✅ Ensure the correct path
import { App } from "./App.js";
import './index.min.css'; 

/**
 * Initializes Sentry for error tracking and performance monitoring.
 */
Sentry.init({
  dsn: "https://80cda50e3cf066a524158b31ca370667@o4508848989929472.ingest.us.sentry.io/4508848996155392",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: import.meta.env.MODE,
});

/**
 * Gets the root element from the DOM.
 * @returns {HTMLElement} The root element.
 * @throws {Error} If the root element is not found.
 */
function getRootElement() {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Root element not found");
  return rootElement;
}

// Get the root element
// Get the root element
const rootElement = getRootElement();
const root = ReactDOM.createRoot(rootElement); // ✅ Create a root using ReactDOM.createRoot

/**
 * Renders the React application.
 */
root.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600">
              Our team has been notified and is working on a fix.
            </p>
          </div>
        </div>
      }
    >
      <BrowserRouter> {/* ✅ Place BrowserRouter OUTSIDE AuthProvider */}
        <AuthProvider> {/* ✅ AuthProvider is INSIDE BrowserRouter */}
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Sentry.ErrorBoundary>
  </React.StrictMode>
);