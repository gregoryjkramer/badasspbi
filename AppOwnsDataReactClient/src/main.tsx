import React from "react";
import ReactDOM from "react-dom/client";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import App from "./App.tsx";
import "./index.css";

import { msalConfig } from "./AuthConfig";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const pca = new PublicClientApplication(msalConfig);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MsalProvider instance={pca}>
            <RouterProvider router={router} />
        </MsalProvider>
    </React.StrictMode>
);
