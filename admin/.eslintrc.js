module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [2, 4],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'no-trailing-spaces': [
            'error',
            {
                'ignoreComments': true
            }
        ],
        '@typescript-eslint/no-empty-function': [
            'off'
        ],
        'react/react-in-jsx-scope': [
            'off'
        ],
        'linebreak-style': 0,
        'global-require': 0,
        'eslint linebreak-style': [0, 'error', 'windows'],
        'no-unused-vars': [
            'error'
        ]
    }
}
