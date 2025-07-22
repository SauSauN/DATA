// project/frontend/src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
console.log("[main.tsx] Application starting. Wrapping App with AuthProvider and EntrepriseAuthProvider.");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <App />
  </StrictMode>
);
