import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-SV4LGJQ10K"
        />
        <Script strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SV4LGJQ10K');
        `}</Script>

        <meta name="theme-color" content="#fff" />
        <meta
          name="google-site-verification"
          content="oBwl1w3_NlylQ2IpnH8227Zl6J-0vatDGgFYPsvl1zs"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
