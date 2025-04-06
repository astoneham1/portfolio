import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if (typeof window !== "undefined") {
  console.log(
    "%cWhat are you doing here!!",
    "color: #8B5CF6; font-size: 16px; font-weight: bold;"
  );
}

createRoot(document.getElementById("root")!).render(<App />);
