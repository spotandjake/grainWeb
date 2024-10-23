import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/grainWeb.ts',
  output: [
    {
      file: './dist/grainWeb.js',
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    typescript({
      sourceMap: false,
    }),
  ],
  external: [],
};
