import { createFileRoute, notFound } from '@tanstack/react-router'
import { VentureDetail } from '../components/VentureDetail'
import { site } from '../lib/site'
import { getVenture, imageUrl } from '../lib/ventures'

export const Route = createFileRoute('/ventures/$slug')({
  loader: ({ params }) => {
    const venture = getVenture(params.slug)
    if (!venture) throw notFound()
    return { slug: venture.slug }
  },
  head: ({ loaderData }) => {
    const venture = loaderData ? getVenture(loaderData.slug) : undefined
    if (!venture) return {}
    const title = `${venture.name} · ${venture.category} | ${site.name}`
    return {
      meta: [
        { title },
        { name: 'description', content: venture.description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: venture.description },
        { property: 'og:image', content: `${site.url}${imageUrl(venture.image, 1200)}` },
      ],
    }
  },
  component: VenturePage,
})

function VenturePage() {
  const { slug } = Route.useLoaderData()
  const venture = getVenture(slug)!
  // Keyed so local state (e.g. the enquiry topic) resets when moving between ventures.
  return <VentureDetail key={slug} venture={venture} />
}
