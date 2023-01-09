import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="images/logo.png" />
        <link rel="manifest" href="images/manifest.json" />
        {/* <!-- fonts --> */}
        {/* <!-- Mulish font --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Tajawal font --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;700;800&display=swap"
          rel="stylesheet"
        />
        <link itemprop="image" href="images/logo.png" />
        <title>Omega Stream</title>
        <meta name="description" content="Streaming made easy" />
        <meta property="og:title" content="Omega Stream" />
        <meta property="og:description" content="Streaming made easy" />
        <meta property="og:image" content="images/logo.png" />
        <meta name="twitter:title" content="Omega Stream" />
        <meta name="twitter:description" content="Streaming made easy" />
        <meta name="twitter:image" content="images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// export async function getInitialProps(ctx) {
//   const initialProps = await Document.getInitialProps(ctx);
//   // locale is in ctx.locale
//   return { ...initialProps, locale: ctx?.locale || "es", direction };
// }
