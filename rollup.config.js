import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const env = process.env.NODE_ENV;

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    }
  ],
  plugins: [
    postcss({
      minimize: true,
      modules: true,
      use: {
        sass: null,
        stylus: null,
        less: { javascriptEnabled: true }
      }, 
      // extract: true,
      extensions: [".less", ".css"],
    }),
    resolve({
      extensions,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
    terser(),
  ],
  external: ['react'],
};
if (env === 'production') {
  config.plugins.push(
    terser(),
  );
}

export default config;