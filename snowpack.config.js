/* 
See all supported options: https://www.snowpack.dev/reference/configuration 
*/

module.exports = {

  mount: {
    src: { url: '/', static: true },
  },
  buildOptions: {
    baseUrl: '/snowpack-example',
    out: './dist',
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  plugins: [
    ['snowpack-plugin-posthtml', {
      root: './src/',
      encoding: 'utf-8'
    }]
  ],
}