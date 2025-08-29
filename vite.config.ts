import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [react()],
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer],
        },
      },
      base: '/gem-project/',
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              components: [
                './components/Header.tsx',
                './components/Footer.tsx',
                './components/ErrorBoundary.tsx'
              ]
            }
          }
        },
        chunkSizeWarningLimit: 1000
      }
    };
});
