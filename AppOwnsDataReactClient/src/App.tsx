// src/App.tsx
import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import LoginMenu from "./components/LoginMenu";
import PowerBIEmbed from "./components/PowerBIEmbed";

const App: React.FC = () => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Tenacious Data - App Owns Data
                    </Typography>
                    <LoginMenu />
                </Toolbar>
            </AppBar>

            <Box sx={{ bgcolor: "#f6f7fb", minHeight: "calc(100vh - 64px)" }}>
                <Container sx={{ py: 4 }}>
                    <Paper
                        variant="outlined"
                        sx={{
                            p: 3,
                            mb: 3,
                            background: "linear-gradient(135deg, #10131a 0%, #1f2a44 60%, #2e3c5f 100%)",
                            color: "white",
                        }}
                    >
                        <Typography variant="h4" sx={{ mb: 1 }}>
                            Power BI Embedded
                        </Typography>
                        <Typography variant="body1">
                            App-owns-data demo powered by a Web API token broker and a Vite
                            React client.
                        </Typography>
                    </Paper>
                    {isAuthenticated ? (
                        <PowerBIEmbed />
                    ) : (
                        <Typography>
                            Click <strong>Login</strong> in the top-right to sign in, then your
                            embedded report will appear here.
                        </Typography>
                    )}
                </Container>
            </Box>
        </>
    );
};

export default App;
