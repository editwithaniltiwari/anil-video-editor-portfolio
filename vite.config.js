import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Seamlessly sync .env.local between root and src if one contains credentials
  const rootEnvPath = path.resolve(__dirname, '.env.local')
  const srcEnvPath = path.resolve(__dirname, 'src', '.env.local')
  try {
    if (fs.existsSync(srcEnvPath) && fs.statSync(srcEnvPath).size > 0) {
      if (!fs.existsSync(rootEnvPath) || fs.statSync(rootEnvPath).size === 0) {
        fs.copyFileSync(srcEnvPath, rootEnvPath)
      }
    } else if (fs.existsSync(rootEnvPath) && fs.statSync(rootEnvPath).size > 0) {
      if (!fs.existsSync(srcEnvPath) || fs.statSync(srcEnvPath).size === 0) {
        fs.copyFileSync(rootEnvPath, srcEnvPath)
      }
    }
  } catch (err) {
    // Non-blocking sync error
  }

  return {
    plugins: [react()],
    server: {
      port: 5173,
      host: true
    }
  }
})
