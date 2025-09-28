import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          50: "#e6f0fa",
          100: "#b3cde3",
          200: "#80a9cc",
          300: "#4d87b5",
          400: "#1a65a0",
          500: "#0A3D62", // main blue
          600: "#083357",
          700: "#062848",
          800: "#041a36",
          900: "#020f1f",
        },
        secondary: {
          50: "#ffe6d6",
          100: "#ffc299",
          200: "#ff9d66",
          300: "#ff751a",
          400: "#ff6600", // main CTA orange
          500: "#e65c00",
        },

        border: "#333333",
      },
      fonts: {
        heading: "Roboto, sans-serif",
        body: "Open Sans, sans-serif",
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
