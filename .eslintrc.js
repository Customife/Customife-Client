module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:prettier/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'import'],
    rules: {
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        camelcase: 'error',
        'no-console': 'warn',
        'prefer-const': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', ['parent', 'sibling'], 'internal', 'index'],
                'newlines-between': 'always',
                alphabetize: { order: 'asc' },
            },
        ],
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['node_modules/**'],
};
