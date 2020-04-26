import Head from 'next/head';

const HTMLHead = ({ title, description }) => (
  <Head>
    <title>{title} | Ara Cultura </title>
    {!description ? null : (
      <meta name='description' content={description}></meta>
    )}
    <link rel='icon' href='/favicon.ico' />
    <meta
      name='viewport'
      content='width=device-width,minimum-scale=1,initial-scale=1'
    />
    <meta charSet='utf-8' />
    <link rel='shortcut icon' href='/favicon.ico' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='theme-color' content='#000000' />
    <link rel='icon' href='/favicon.ico' />
    <link rel='manifest' href='/manifest.json' />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
    <meta name='apple-mobile-web-app-title' content='Ara Cultura' />
    <link rel='apple-touch-icon' href='/icons/android-chrome-192x192.png' />
    <meta
      name='msapplication-TileImage'
      content='/icons/android-chrome-192x192.png'
    />
    <meta name='msapplication-TileColor' content='#000000' />
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: `
          {
            "@context": "http://schema.org",
            "@type": "WebPAge",
            "name": "${title}",
            "description": "${!description ? null : description}",
            "author": {
              "@type": "Organization",
              "name": "Adhoc Cultura | Oxygen | DAUApps"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Ara Cultura",
              "url": "https://www.aracultura.com/",
              "logo": "https://www.aracultura.com/icons/android-chrome-512x512.png"
                },  
            "image": "https://www.aracultura.com/icons/og-image-aracultura-web.png"
          }`,
      }}
    />
  </Head>
);

export default HTMLHead;
