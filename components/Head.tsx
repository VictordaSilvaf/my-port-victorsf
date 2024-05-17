import Head from 'next/head';

interface HeadProps {
    title: string,
    description: string,
    url: string,
    image: string,
}

export default function Header({ title, description, url, image }: HeadProps) {
  return (
    <Head>
      {/* Meta tags básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Victor da Silva Fernandes" />

      {/* Meta tags de SEO */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="VictorSF" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@eu.victordev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Outras tags de SEO */}
      <meta name="robots" content="index, follow" /> {/* Instruções para os bots de mecanismo de busca */}
      <link rel="canonical" href={url} /> {/* URL canônica da página */}

      {/* Tags de autor */}
      <meta name="author" content="Victor da Silva Fernandes" />
      <meta name="publisher" content="VictorSF" />

      {/* Tags de idioma */}
      <meta http-equiv="content-language" content="pt-BR" />

      {/* Tags de viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Tags de favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}
