import Document, { Html, Head, Main, NextScript } from 'next/document';

const isLocal = process.env.ENV === 'development';

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {

    return isLocal ? (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    ) : (
      <Main />
    );
  }
}

export default MyDocument