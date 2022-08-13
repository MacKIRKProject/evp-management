import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export function Head({ title = '', description = '' }) {
  const { site = {} } = useStaticQuery(query) || {}
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      titleTemplate={`%s `}
      defaultTitle={site.siteMetadata.title}
      link={[
        {
          href: `/favicon/favicon.svg`,
          rel: 'icon',
          type: 'image/svg+xml',
        },
        {
          href: `/favicon/favicon.ico`,
          rel: 'icon',
        },
        {
          href: `/favicon/apple-touch-icon-180x180.png`,
          rel: 'apple-touch-icon',
          sizes: '180x180',
        },
        {
          href: `/manifest.json`,
          rel: 'manifest',
        },
      ]}
    >
      <title>{title}</title>
      <meta name="description" content={metaDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Scaleway" />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="/scaleway-og.jpg" />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={site.siteMetadata.author} />
      <meta property="twitter:title" content={site.siteMetadata.title} />
      <meta property="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
