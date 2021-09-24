import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const isLocal = process.env.ENV === 'development';

class MyDocument extends Document {
  static async getInitialProps(ctx) {

    const {renderPage: originalRenderPage, query} = ctx

		const sheet = new ServerStyleSheet();

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						// eslint-disable-next-line react/jsx-props-no-spreading
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

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
      <>
        <Main />
        <NextScript />
      </>
    );
  }
}

export default MyDocument