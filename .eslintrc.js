module.exports = {
    extends: [
        "airbnb",
        "plugin:react/recommended",
        "plugin:import/typescript",
        "eslint:recommended",
    ],
    env: {
        browser: true,
        es6: true,
    },
    parser: "@typescript-eslint/parser",
    rules: {
        "indent": ["error", 4],
        "max-len": ["error", 120],
        'react/jsx-props-no-spreading': 0,
        "linebreak-style": ["error", "windows"],
        "react/jsx-indent": 0,
        "arrow-parens": 0,
        'import/extensions': 0,
        'react/prop-types': 0,
        "react/no-array-index-key": 0,
        "react/button-has-type": 0,
        'react/jsx-filename-extension': 0,
        "no-use-before-define": 0,
        "react/sort-comp": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-inferrable-types": 0,
        "react/require-default-props": 0,
        "no-confusing-arrow": 0,
        "import/no-named-as-default-member": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "import/no-extraneous-dependencies": 0,
        "jsx-a11y/no-noninteractive-tabindex": 0,
        "jsx-a11y/no-autofocus": 0,
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    parserOptions: {
        ecmaFeatures: {
            impliedStrict: true,
        },
    },
};