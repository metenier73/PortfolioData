import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PortfolioData/', // adapte selon ton repo
  // autres options...
});