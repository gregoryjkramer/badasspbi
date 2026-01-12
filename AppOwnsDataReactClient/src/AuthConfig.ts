// AuthConfig.ts

// === Azure IDs ===
export const TenantId = "f325857e-a2a1-4724-802a-37e74d5c60cc";
export const ClientId = "4aa94cde-231b-4501-9f86-c442dab28d9f";   // SPA frontend
export const WebApiAppId = "39f0b991-f2f1-49c3-90b9-b2091dd188c4"; // Web API backend

//// Vite sets this from vite.config.ts -> base: "/badasspbi/" for GitHub Pages
//const appBasePath = import.meta.env.BASE_URL ?? "/";

//// Build the full redirect URL safely (avoids double slashes, missing slashes, etc.)
//const redirectUrl = new URL(appBasePath, window.location.origin).toString();

export const msalConfig = {
    auth: {
        clientId: ClientId,
        authority: `https://login.microsoftonline.com/${TenantId}`,
        redirectUri: "https://gregoryjkramer.github.io/badasspbi/",
        postLogoutRedirectUri: "https://gregoryjkramer.github.io/badasspbi/",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};


//export const msalConfig = {
//    auth: {
//        clientId: ClientId,
//        authority: `https://login.microsoftonline.com/${TenantId}`,
//        redirectUri: redirectUrl,
//        postLogoutRedirectUri: redirectUrl,
//    },
//    cache: {
//        cacheLocation: "localStorage",
//        storeAuthStateInCookie: false,
//    },
//};

// === MSAL scopes ===
export const userPermissionScopes = [
    `api://${WebApiAppId}/Reports.Embed`,
];

export const PowerBiLoginRequest = {
    scopes: userPermissionScopes,
};
