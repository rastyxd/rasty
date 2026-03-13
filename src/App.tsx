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
  Button,
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
    h3: {
      fontFamily: '"Playfair Display", serif',
    },
  },
});

// --- Components ---
// A lightweight helper to write data into a Cloudflare Worker / R2 bucket.
//
// Your worker should accept PUT requests at `${WORKER_BUCKET_URL}{key}` and
// store the request body under that key (e.g. using env.MY_BUCKET.put).
// get env from wrangler.json: "binding": "INSTCOUNT"
// Send a click event to a Cloudflare-backed endpoint.
// (This will be a no-op if the endpoint is not available, but it won't break the UI.)
const sendClickEvent = async () => {
  try {
    await fetch("https://r2-worker.rastyxdofficial.workers.dev/instaclick", {
      method: "GET",
    });
  } catch (error) {
    console.error("Error sending click event:", error);
  }
};
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl py-6 border-b border-white/20">
      <div className="max-w-full mx-auto px-6 flex justify-center items-center">
        <Icon
          sx={{
            fontSize: 50,
            color: "primary.main",
            scale: 2,
            mb: -2.5,
          }}
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
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "text.secondary",
                letterSpacing: 10,
                mb: 1,
                fontSize: "1rem",
                display: "block",
              }}
            >
              PORTFOLIO
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h3" sx={{ mb: 4, fontWeight: 400 }}>
              Design, Code <br />& Creative Work.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 6,
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              A collection of projects and digital experiences focused on
              simplicity and function. Currently updating my workspace to share
              new work.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ transformOrigin: "center" }}
          >
            <Box sx={{ pt: 4, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", letterSpacing: 1 }}
                >
                  For more updates, follow us on Instagram.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.35 }}
              >
                <Button
                  component="a"
                  className="transition-colors duration-300"
                  href="https://instagram.com/ras_ty.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="secondary"
                  variant="outlined"
                  onClick={sendClickEvent}
                  sx={{
                    mt: 2,
                    borderColor: "text.secondary",
                    color: "text.secondary",
                    textTransform: "revert",
                    scale: 1.1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      color: "primary.main",
                    },
                  }}
                >
                  Pikaboo!
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </div>
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
