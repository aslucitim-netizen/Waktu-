import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Maps process.env.API_KEY to the VITE_API_KEY (or API_KEY) environment variable
      // Ensure you set VITE_API_KEY in your Vercel project settings
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY),
    },
  };
});