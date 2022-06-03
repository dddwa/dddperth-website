import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en-AU">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Hind:400,500,700&display=swap" rel="stylesheet" />
          <style>
            {`
svg {
  width: 1.5rem;
  height: 1.5rem;
}
img {
  max-width: 150px;
  height: auto;
}`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
