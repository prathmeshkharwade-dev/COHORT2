import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tallwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tallwindcss()],
})
