import Document, { Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor/server'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html || page.errorHtml)
    return { ...page, ...styles }
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body>
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
          <NextScript />
        </body>
      </html>
    )
  }
}
