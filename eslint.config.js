import eslint from '@eslint/js';
import parser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
    languageOptions: {
        parser,
        parserOptions: {
            tsconfigRootDir: import.meta.dirname,
        },
    },
    ignores: ['node_modules', 'dist'],
    rules: {
        // Added common rules
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
});
