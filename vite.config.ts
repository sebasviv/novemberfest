import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Alias @core/@domain/@data/@presentation/@assets — deben coincidir con tsconfig.json
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
      '@domain': fileURLToPath(new URL('./src/domain', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@presentation': fileURLToPath(new URL('./src/presentation', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // API moderna de sass (evita el warning de legacy API y habilita loadPaths)
        api: 'modern-compiler',
        // Permite `@use "theme" as *;` en cualquier *.module.scss sin rutas relativas
        loadPaths: [fileURLToPath(new URL('./src/presentation/styles', import.meta.url))],
      },
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
