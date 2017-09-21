const { NODE_ENV = 'development' } = process.env

module.exports = {
  comments: false,
  compact: true,
  ignore: NODE_ENV === 'test' ? undefined : ['*.spec.js'],
  plugins: ['lodash'],
  presets: [
    [
      'env',
      {
        debug: NODE_ENV === 'development',
        loose: true,
        targets: {
          node: NODE_ENV === 'production' ? '6' : 'current'
        },
        useBuiltIns: 'usage'
      }
    ],
    'flow',
    'stage-3'
  ]
}
