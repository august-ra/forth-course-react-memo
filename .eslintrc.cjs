module.exports = {
  'extends': [ 'eslint:recommended', 'prettier', 'react-app', 'react-app/jest' ],
  'plugins': [ 'prettier' ],
  'rules': {
    'camelcase': [ 'error', { 'properties': 'never' } ],
    'prettier/prettier': 'error',
    'eqeqeq': [ 'error', 'always' ],
    'no-unused-vars': [ 'error' ],
  },
}
