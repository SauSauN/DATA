// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      host: env.VITE_DEV_HOST || 'localhost',
      port: parseInt(env.VITE_DEV_PORT) || 5173,

      allowedHosts: [
        '8af8-2001-861-3241-82b0-80d3-8b2-d7ec-7e3d.ngrok-free.app'
      ],

      proxy: {
        '/api': {
          target: env.VITE_REACT_APP_SOCKET_SERVER || 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
        }
      }
    }
  };
});
