# vite-plugin-package-configs

[![NPM version](https://img.shields.io/npm/v/vite-plugin-package-configs?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-package-configs)

Extend Vite config from your package.json `vite` field.

```jsonc
// package.json
{
  "vite": {
    "resolve": {
      "alias": {
        "~/": "src/"
      }
    },
    "build": {
      "output": "dist/"
    }
  }
}
```

## Install

```bash
npm i -D vite-plugin-package-configs
```

Add plugin to your `vite.config.ts`:

```ts
// vite.config.ts
import PKG from 'vite-plugin-package-configs'

export default {
  plugins: [
    PKG()
  ]
}
```

## License

[MIT](./LICENSE) License © 2023 [Elone Hoo](https://github.com/elonehoo)
