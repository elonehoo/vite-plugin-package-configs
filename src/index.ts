import { join } from 'node:path'
import { existsSync, promises as fs } from 'node:fs'
import _debug from 'debug'
import type { Plugin } from 'vite'

const debug = _debug('vite-plugin-package-configs')

export interface Options {
  /**
   * @default 'package.json'
   */
  packageJsonPath?: string
  /**
   * Field name in package.json to merge with Vite's config
   *
   * @default 'vite'
   */
  field?: string
}

export interface VitePluginPackageConfigsPlugin extends Plugin {
  api: {
    options: {
      packageJsonPath: string
      field: string
    }
  }
}

function VitePluginPackageConfigs(options: Options = {}): VitePluginPackageConfigsPlugin {
  const {
    packageJsonPath = join(process.cwd(), 'package.json'),
    field = 'vite',
  } = options

  return {
    name: 'vite-plugin-package-configs',
    async config() {
      if (!existsSync(packageJsonPath)) {
        debug('package.json not found at %s', packageJsonPath)
        return
      }

      debug('loading package.json at %s', packageJsonPath)

      try {
        const packageJson: Record<string, any> = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'))
        const extend = packageJson[field]
        if (!extend) {
          debug('no %s field found in package.json, skip', field)
          return
        }

        debug('merging config with %o', extend)
        return extend
      }
      catch (e) {
        debug('parse error: %o', e)
        debug('error on loading package.json at %s, skip', packageJsonPath)
      }
    },
    api: {
      options: {
        packageJsonPath,
        field,
      },
    },
  }
}

export default VitePluginPackageConfigs
