import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

export default defineConfig({
  plugins: [
    tanstackStart(),
    // The site ships no edge functions; skipping their local emulation avoids needing Deno in dev.
    netlify({ dev: { edgeFunctions: { enabled: false } } }),
    viteReact(),
    tailwindcss(),
  ],
})
