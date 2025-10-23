import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

if (import.meta.env.DEV && typeof window !== "undefined") {
  console.log(
    "%cWhat are you doing here!!",
    "color: #8B5CF6; font-size: 16px; font-weight: bold;"
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
