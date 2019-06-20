import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage();
    const styles = flush();

    return { html, head, styles };
  }

  render () {
    return (
     <html>
       <Head>
         <style>{`body { margin: 0 } /* custom! */`}</style>
         {/* title 태그를 Head 내에서 사용하지 말라고 경고가 나온다. 
         각 페이지에서 사용해야 하나 보다. */}
         <title>Next.js 연습</title>
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    );
  }
}

export default MyDocument;
