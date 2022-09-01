module.exports = {
    env: {
        browser: true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 5
    },
    plugins: ['servicenow', 'angular', '@html-eslint'],
    globals: {
        jQuery: true,
        $: true,
        angular: true,
        app: true,
        gs: true,
        $sp: true,
        c: true,
        data: true
    },
    rules: {
        // regras padrão
        // https://eslint.org/docs/latest/rules/
        quotes: [1, 'single'],
        semi: [1, 'always'],
        'no-unused-vars': 1,
        'no-console': 1,
        'block-scoped-var': 1,
        'no-undef-init': 1,
        'comma-dangle': ['error', 'never'],

        // regras exclusivas do snow
        // https://github.com/arnoudkooi/eslint-plugin-servicenow
        'servicenow/no-hardcoded-sysids': 1,
        'servicenow/dont-use-gr-as-variablename': 1,
        'servicenow/minimize-gs-log-print': 1,
        'servicenow/no-packages-calls': 1,

        // regras do AngularJS
        // https://github.com/EmmanuelDemey/eslint-plugin-angular
        'angular/angularelement': 2,
        'angular/interval-service': 2,
        'angular/window-service': 2
    },
    overrides: [
        {
            files: ['*.html'],
            parser: '@html-eslint/parser',
            extends: ['plugin:@html-eslint/recommended'],
            rules: {
                // regras do HTML
                // https://yeonjuan.github.io/html-eslint/docs/all-rules
                //'@html-eslint/indent': ['error', 'tab'],
                '@html-eslint/indent': 'off',
                '@html-eslint/require-closing-tags': 'off',
                '@html-eslint/require-doctype': 'off',
                '@html-eslint/no-extra-spacing-attrs': 'off'
            }
        },
        {
            files: ['*.js'],
            rules: {
                // regras do JS
                'no-undef': 'off',
                'no-unreachable': 'off'
            }
        },
        {
            files: ['*Link function.js'],
            rules: {
                // regras do Link function
                'no-unused-vars': 'off'
            }
        }
    ]
};
