## vite

`yarn create vite`

## eslint

`npx eslint --init`
`touch .eslintignore`
.eslintignore

```
node_modules
yarn.lock
public
vite.config.ts
vite-env.d.ts
```

## Prettier

`yarn add --dev prettier`
`touch .prettierrc`

```
{
  "endOfLine": "lf",
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "semi": true
}
```

`touch .prettierignore`

```
node_modules
yarn.lock
public
```

`yarn add --dev eslint-config-prettier`

`.eslintrc.cjsのextendsに'prettier'追加`
`ruleに'react/react-in-jsx-scope': 'off'を追加`

## Storybook

[エラー解決](https://zenn.dev/koojy/articles/storybook7-react-vite-typescript)
`npx storybook@latest init`
`yarn add typescript@5.0.4`

## Test

### e2e

`yarn create playwright`

### vitest

`yarn add -D vitest`
`yarn add -D @testing-library/react jsdom @testing-library/jest-dom`
src/に vitest.setup.ts を作成し以下を記入
`import '@testing-library/jest-dom'`
vite.config.ts を編集

```
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/vitest.setup.ts',
  },
});

```
