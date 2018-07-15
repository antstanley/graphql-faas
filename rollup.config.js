import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    nodeResolve({
      module: true,
      jsnext: true,
      main: true
    }),

    commonjs({
      include: 'node_modules/**',
      ignoreGlobal: false,
      sourceMap: true
    })
  ]
}
