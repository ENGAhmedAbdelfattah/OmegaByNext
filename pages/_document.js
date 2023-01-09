import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
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
