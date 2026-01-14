import React from "react";
import ReactDOM from "react-dom/client";
import PowerBIEmbed from "./components/PowerBIEmbed";
import "./index.css";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

import { msalConfig } from "./AuthConfig";

const pca = new PublicClientApplication(msalConfig);

// Vite sets BASE_URL based on `base` in vite.config.ts.
// On GitHub Pages for repo "badasspbi", this should be "/badasspbi/".
const base = import.meta.env.BASE_URL;
// React Router prefers basename without a trailing slash (except "/" itself).
const basename = base === "/" ? "/" : base.replace(/\/$/, "");

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
    ],
    { basename }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PowerBIEmbed />
  </React.StrictMode>
);
