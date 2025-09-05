import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

const isProduction = process.env.NODE_ENV === 'production';

// Common external dependencies
const external = ['react', 'react-dom', 'react/jsx-runtime'];

// Common plugins
const plugins = [
  resolve({
    browser: true,
    preferBuiltins: false
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: false, // We'll generate declarations separately
    declarationMap: false
  })
];

if (isProduction) {
  plugins.push(terser({
    compress: {
      drop_console: true,
      drop_debugger: true
    },
    format: {
      comments: false
    }
  }));
}

export default defineConfig([
  // Main NH Canvas library
  {
    input: 'nh-canvas.ts',
    output: [
      {
        file: 'dist/nh-canvas.esm.js',
        format: 'es',
        sourcemap: !isProduction
      },
      {
        file: 'dist/nh-canvas.umd.js',
        format: 'umd',
        name: 'NHCanvas',
        sourcemap: !isProduction
      }
    ],
    plugins,
    external: [] // NH Canvas has no external dependencies
  },

  // React bindings
  {
    input: 'react-bindings.tsx',
    output: [
      {
        file: 'dist/react-bindings.esm.js',
        format: 'es',
        sourcemap: !isProduction
      },
      {
        file: 'dist/react-bindings.umd.js',
        format: 'umd',
        name: 'NHCanvasReact',
        sourcemap: !isProduction,
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'React'
        }
      }
    ],
    plugins,
    external
  },

  // TypeScript declarations for main library
  {
    input: 'nh-canvas.ts',
    output: {
      file: 'dist/nh-canvas.d.ts',
      format: 'es'
    },
    plugins: [
      dts({
        respectExternal: true
      })
    ],
    external
  },

  // TypeScript declarations for React bindings
  {
    input: 'react-bindings.tsx',
    output: {
      file: 'dist/react-bindings.d.ts',
      format: 'es'
    },
    plugins: [
      dts({
        respectExternal: true
      })
    ],
    external
  }
]);