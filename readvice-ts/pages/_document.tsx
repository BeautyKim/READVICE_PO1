
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

require('dotenv').config;
const KAKAOMAP_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_API

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html lang='ko'>
          <Head>
            <meta charSet="utf-8" />
            <meta name="description" content="개인 독서 비서 리드바이스" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script
                type="text/javascript"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAOMAP_KEY}&libraries=services,clusterer,autoload=false`}
            ></script>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </Html>
    )
  }
}

export default MyDocument