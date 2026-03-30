export default function SchemaOrg({ schemas = [] }) {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  );
}

export function articleSchema({ title, description, url, image, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://zeroburocrazia.it${url}`,
    image: `https://zeroburocrazia.it/${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@type': 'Organization', name: 'ZeroBurocrazia', url: 'https://zeroburocrazia.it' },
    publisher: { '@type': 'Organization', name: 'ZeroBurocrazia', url: 'https://zeroburocrazia.it' },
  };
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(i => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a.replace(/<[^>]+>/g, '') },
    })),
  };
}
