/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { MotionConfig } from 'motion/react'
import { NotFound } from '../components/NotFound'
import { site } from '../lib/site'
import '../styles.css'

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: site.name },
      { name: 'theme-color', content: '#14342b' },
      { name: 'description', content: site.description },
      { property: 'og:title', content: site.name },
      { property: 'og:description', content: site.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: site.url },
      { property: 'og:locale', content: 'bn_BD' },
      {
        property: 'og:image',
        content: `${site.url}/.netlify/images?url=/img/agro.png&w=1200&fm=jpg`,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      {
        rel: 'preload',
        href: '/fonts/Purno-Regular.ttf',
        as: 'font',
        type: 'font/ttf',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: '/fonts/Purno-Bold.ttf',
        as: 'font',
        type: 'font/ttf',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  shellComponent: RootShell,
})

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="bn">
      <head>
        <HeadContent />
      </head>
      <body>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <div className="grain" aria-hidden="true" />
        <Scripts />
      </body>
    </html>
  )
}
