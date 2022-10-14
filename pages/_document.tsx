import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Shule</title>
        <meta
          key="desc"
          name="description"
          content={`Get the best Notes, Answered Past Papers, Online Quiz and A full Books Library for O level and A level studies covering all subjects. - Download learning materials Now`}
        />
        <meta
          name="google-site-verification"
          content="oBwl1w3_NlylQ2IpnH8227Zl6J-0vatDGgFYPsvl1zs"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
