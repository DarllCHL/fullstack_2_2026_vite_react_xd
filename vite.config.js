// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',            // simula el navegador (DOM)
    globals: true,                   // describe, it, expect sin importarlos
    setupFiles: './src/setupTests.js',
    maxWorkers: 2,   // Ajustar según recursos disponibles
    maxConcurrency: 1,   // Ejecutar tests concurrentes de a uno
        coverage: {
          provider: 'v8',
          reporter: ['text', 'html'],
          include: ['src/**/*.{js,jsx}'],
          reportsDirectory: './coverage',
        },
  },
});