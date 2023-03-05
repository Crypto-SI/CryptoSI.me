import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class IQDocument extends Document
{
    static async getInitialProps(ctx: DocumentContext)
    {
        return await Document.getInitialProps(ctx);
    }

    render(): JSX.Element
    {
        return (
            <Html data-theme='dark'>
                <Head>
                    <meta property='theme-color' content='#5294E2'/>
                    <meta name="robots" content="all" />

                    <meta name='language' content='en'/>
                    <meta name='Classification' content='Portfolio'/>
                    <meta name='subject' content='Crypto O.G (2012) Advisor & Project Manager'/>
                    <meta name='description' content="Crypto O.G (2012) Advisor & Project Manager. Crypto O.G (2012)"/>
                    <meta name='keywords' content='Crypto O.G (2012), Crypto O.G (2012) Portfolio, Advisor, Project Manager, London, United Kingdom'/>
                    <meta name='author' content='Crypto O.G (2012)'/>

                    <meta property='og:type' content='website'/>
                    <meta property='og:url' content='https://tubular-moxie-5d162d.netlify.app/'/>
                    <meta property='og:title' content='Crypto O.G (2012)'/>
                    <meta property='og:description' content='Crypto O.G (2012) Advisor & Project Manager'/>
                    <meta property='og:image' content='https://tubular-moxie-5d162d.netlify.app/favicon.png'/>

                    <meta property='twitter:card'/>
                    <meta property='twitter:url' content='https://tubular-moxie-5d162d.netlify.app/'/>
                    <meta property='twitter:title' content='Crypto O.G (2012)'/>
                    <meta property='twitter:description' content='Crypto O.G (2012) Advisor & Project Manager'/>
                    <meta property='twitter:image' content='https://tubular-moxie-5d162d.netlify.app/favicon.png'/>

                    <link rel='icon' href='/favicon.png' />
                    <link rel='apple-touch-icon' href='https://tubular-moxie-5d162d.netlify.app/favicon.png'/>
                    <link rel='manifest' href='https://tubular-moxie-5d162d.netlify.app/manifest.json'/>
                    <link rel='canonical' href='https://tubular-moxie-5d162d.netlify.app' />
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                    <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet' />

                    <script
                        id='schema-structured-data'
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org/',
                                '@type': 'Person',
                                name: 'Crypto O.G (2012)',
                                author:
                                        {
                                            '@type': 'Person',
                                            name: 'Crypto O.G (2012)'
                                        },
                                email: 'mailto:cryptosi@protonmail.com',
                                image: 'https://tubular-moxie-5d162d.netlify.app/images/avatar.png',
                                jobTitle: 'Project Manager',
                                url: 'https://tubular-moxie-5d162d.netlify.app'
                            })
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default IQDocument;
