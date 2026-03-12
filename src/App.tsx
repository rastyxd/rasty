/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import logo from "./assets/logo-dark.png";
import { motion } from "motion/react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Icon,
  Container,
  Typography,
} from "@mui/material";

// --- Theme Configuration ---

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6", // Vivid Blue
    },
    background: {
      default: "#0a0a0a",
      paper: "#141414",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a1a1aa",
    },
  },
  typography: {
    fontFamily: '"Inter", "sans-serif"',
    h1: {
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
    },
  },
});

// --- Components ---

const Navbar = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e] p-4">
      <div className="text-center">
        <h1 className="text-[#f5f5f5] text-5xl font-bold mb-4">Rasty Store</h1>
        <p className="text-[#a5a5a5] text-xl mb-8">
          Your favorite place for quality merch is coming soon!
        </p>
        <a
          href="https://www.instagram.com/ras_ty.store"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#e1306c] hover:bg-[#c72e65] text-white font-semibold py-2 px-6 rounded transition-colors"
=======
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl py-6 border-b border-white/20">
      <div className="max-w-full mx-auto px-6 flex justify-center items-center">
        <Icon
          sx={{
            fontSize: 50,
            color: "primary.main",
            scale: 2,
            mb: -2.5,
          }}
>>>>>>> e508a237f7d26f9e7654c0fa45136d8cdfd3c31d
        >
          <img src={logo} alt="" />
        </Icon>
      </div>
    </nav>
  );
};

const MainContent = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Typography
            variant="overline"
            sx={{
              color: "text.secondary",
              letterSpacing: 10,
              mb: 2,
              fontSize: "1rem",
              display: "block",
            }}
          >
            PORTFOLIO
          </Typography>
          <Typography variant="h2" sx={{ mb: 4, fontWeight: 400 }}>
            Design, Code <br />& Creative Work.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 6,
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            A collection of projects and digital experiences focused on
            simplicity and function. Currently updating my workspace to share
            new work.
          </Typography>
          <Box sx={{ pt: 4, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", letterSpacing: 1 }}
            >
              STAY TUNED
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="min-h-screen bg-[#0a0a0a] font-sans text-white selection:bg-blue-500/30 selection:text-blue-100">
        <Navbar />
        <main>
          <MainContent />
        </main>
      </div>
    </ThemeProvider>
  );
}
