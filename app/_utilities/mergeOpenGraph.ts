import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Wezb',
  title: 'Wezb',
  description: 'Build your own website with Wezb.',
//   images: [
//     {
//       url: 'https://payloadcms.com/images/og-image.jpg',
//     },
//   ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
