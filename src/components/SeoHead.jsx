import Head from "next/head";

const SITE_ORIGIN = "https://horasysueldo.com";

const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Horas y Sueldo",
  url: SITE_ORIGIN,
  parentOrganization: {
    "@type": "Organization",
    name: "Albor Digital LLC",
  },
};

function buildFaqJsonLd(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function SeoHead({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  faqItems,
  robots,
}) {
  const orgJson = JSON.stringify(ORGANIZATION_LD);
  const faqJson =
    faqItems && faqItems.length > 0
      ? JSON.stringify(buildFaqJsonLd(faqItems))
      : null;

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="description" content={description} />
      {robots ? <meta name="robots" content={robots} /> : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="es_MX" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgJson }}
        key="ldjson-organization"
      />
      {faqJson ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJson }}
          key="ldjson-faq"
        />
      ) : null}
    </Head>
  );
}
