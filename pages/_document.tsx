import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Shule</title>
        <meta
          key="desc"
          name="description"
          content={`Get the best Prepared Notes, Answered Past Papers, Quizzes, Books Library for All Forms and Subjects. - Download learning materials Now`}
        />
        <meta
          name="google-site-verification"
          content="oBwl1w3_NlylQ2IpnH8227Zl6J-0vatDGgFYPsvl1zs"
        />
        <meta
          name="keywords"
          content={`Get the best Prepared Notes, Past Papers, Quizzes, Books Library, Form One, Form Two, Form Three, Form Four, Form Five, Form Six, Biology, Book Keeping, Chemistry, Civics, Commerce, English, History, Information And Computer Studies, Kiswahili, Literature, Mathematics, Physics`}
        />
        <meta
          property="og:description"
          content="Get the best Prepared Notes, Past Papers, Quizzes, Books Library for All Forms and Subjects"
        />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
