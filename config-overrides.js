const { alias } =  require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@core': 'src/core',
    '@features': 'src/features',
    '@pages': 'src/pages',
    '@shared': 'src/shared',
    '@styles': 'src/styles'
  })(config)

  return config; 
}
