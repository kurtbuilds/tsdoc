module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "plugins": ["@kurtbuilds/eqeqeq-everywhere"],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "@kurtbuilds/eqeqeq-everywhere/eqeqeq": "error",
        "no-extra-boolean-cast": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "(^_)|(^JSX$)",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
}