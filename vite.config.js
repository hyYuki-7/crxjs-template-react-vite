import path from 'node:path'
import { crx, defineManifest } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import zip from 'vite-plugin-zip-pack'
import { name, version } from './package.json'
import pkg from './package.json'


const manifest = defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  icons: {
    48: 'public/logo.png',
  },
  permissions: ['sidePanel'],
  action: {
    default_icon: {
      48: 'public/logo.png',
    },
    // default_popup: 'src/popup/index.html',
  },
  side_panel: {
    default_path: 'src/sidepanel/index.html',
  },
});


export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    },
  },
  plugins: [
    react(),
    crx({manifest}),
    zip({ outDir: 'release', outFileName: `crx-${name}-${version}.zip` }),
  ],
  server: {
    cors: {
      origin: [
        /chrome-extension:\/\//,
      ],
    },
  },
})
