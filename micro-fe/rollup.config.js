const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const image = require('@rollup/plugin-image');
const del = require('rollup-plugin-delete');
const json = require('@rollup/plugin-json');

module.exports = {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'es',
    sourcemap: true,
    chunkFileNames: "chunk-[hash].js"
  },
  plugins: [
    del({ targets: 'lib/**/*' }),
    resolve(),
    typescript(),
    commonjs(),
    postcss({
      modules: true,
    }),
    image(),
    json(),
  ],
  external: ['react', 'react-dom', 'i18next', 'react-i18next'],
};
