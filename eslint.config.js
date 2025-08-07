import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignore: ['dist'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeCheckedOnly,
  {
    files: ['*.ts', '*.tsx'],
    extends: [prettier],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirName,
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: [pluginReact],
    rules: {
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
]
