import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends NextDocument {
  render() {
    const ga = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
`;

    const datadogBrowserLogs = `
(function(h,o,u,n,d) {
  h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
  d=o.createElement(u);d.async=1;d.src=n
  n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
})(window,document,'script','https://www.datadoghq-browser-agent.com/datadog-logs.js','DD_LOGS')
DD_LOGS.onReady(function() {
    DD_LOGS.init({
      clientToken: '${process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN}',
      site: 'datadoghq.com',
      forwardErrorsToLogs: true,
      sampleRate: 100,
    })
  })
`;

    const datadogBrowserRun = `
(function(h,o,u,n,d) {
  h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
  d=o.createElement(u);d.async=1;d.src=n
  n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
})(window,document,'script','https://www.datadoghq-browser-agent.com/datadog-rum-v3.js','DD_RUM')
  DD_RUM.onReady(function() {
    DD_RUM.init({
      clientToken: '${process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN}',
      applicationId: '${process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID}',
      site: 'datadoghq.com',
      service:'syonet.work',
      sampleRate: 100,
      trackInteractions: true,
    })
  })
`;

    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
            <>
              <script dangerouslySetInnerHTML={{ __html: ga }}></script>
            </>
          )}

          {process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN && (
            <script dangerouslySetInnerHTML={{ __html: datadogBrowserLogs }}></script>
          )}

          {process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN &&
            process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID && (
              <script dangerouslySetInnerHTML={{ __html: datadogBrowserRun }}></script>
            )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
