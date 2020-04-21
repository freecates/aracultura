import Head from 'next/head';
import Link from 'next/link';
import { FormattedDate, IntlProvider } from 'react-intl';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share';

const BlocPost = ({ title, author, datePublished, description, id, type, content }) => {
    console.log(content);
    const { com, per_que, per_qui, imatge, contacte, descarregable, descripcio } = content;
    return (
        <>
            <Head>
                <title>
                    {title} - Ara Cultura - {type}
                </title>
                <meta name='description' content={description} />

                <meta property='fb:app_id' content='1064356173625695' />
                <meta property='og:url' content={`https://nodevid.now.sh/${type}/${id}`} />
                <meta property='og:type' content='article' />
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                <meta
                    property='og:image'
                    content={`https://nodevid.now.sh/icons/og-image-nodevid-web.png`}
                />
                <meta property='og:image:width' content={1024} />
                <meta property='og:image:height' content={1024} />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='mexico_baila' />
                <meta name='twitter:creator' content='mexico_baila' />
                <meta name='twitter:title' content={title} />
                <meta
                    name='twitter:image:src'
                    content={`https://nodevid.now.sh/icons/og-image-nodevid-web.png`}
                />

                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: `
{
  "@context": "http://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "${`https://nodevid.now.sh` + id}"
  },
  "author": {
    "@type": "Person",
    "name": "Ramon Gil"
  },
  "publisher": {
   "@type": "Organization",
   "name": "Adhoc Cultura | Oxygen | DAUApps",
   "logo": {
     "@type": "ImageObject",
     "url": "https://nodevid.now.sh/icons/og-image-nodevid-web.png"
   }
  }, 
  "description": "${description}",
  "image": "https://nodevid.now.sh/icons/og-image-nodevid-web.png",
  "datePublished": "${datePublished}",
  "headline": "${title}"
}`,
                    }}
                />
            </Head>
            <IntlProvider locale={'ca'} timeZone='Europe/Madrid'>
                {!author ? null : (
                    <p>
                        <small>
                            <strong>Per:</strong> {author}. <strong>Publicada el:</strong>{' '}
                            <FormattedDate value={datePublished} />
                        </small>
                    </p>
                )}
                {!imatge ? null : 
                <picture>
                    <img src={imatge.url} width={'100%'} />
                </picture>
                }
                <h1 className='title'>{title}</h1>
                <h2>
                    <content>{description}</content>
                </h2>

                <h4>Per què</h4>
                <p>{per_que}</p>

                <h4>Descripciió</h4>
                <p>{descripcio}</p>

                <h4>Com</h4>
                <p>{com}</p>

                <h4>Per qui</h4>
                <p>{per_qui}</p>

                <p>
                    Contacte: <a href={`mailto:${contacte}`}>{contacte}</a>
                </p>

                <div className='social-share-icons'>
                    <div className='Post__some-network'>
                        <FacebookShareButton
                            url={`https://nodevid.now.sh/${type}/${id}`}
                            className='Post__some-network__share-button'
                        >
                            <FacebookIcon size={25} round />
                        </FacebookShareButton>
                    </div>

                    <div className='Post__some-network'>
                        <TwitterShareButton
                            url={`https://nodevid.now.sh/${type}/${id}`}
                            title={title}
                            hashtags={['coronavirus']}
                            via='AdhocCultura'
                            className='Post__some-network__share-button'
                        >
                            <TwitterIcon size={25} round />
                        </TwitterShareButton>
                    </div>

                    <div className='Post__some-network'>
                        <LinkedinShareButton
                            url={`https://nodevid.now.sh/${type}/${id}`}
                            title={title}
                            className='Post__some-network__share-button'
                        >
                            <LinkedinIcon size={25} round />
                        </LinkedinShareButton>
                    </div>

                    <div className='Post__some-network'>
                        <EmailShareButton
                            url={`https://nodevid.now.sh/${type}/${id}`}
                            subject={title}
                            body={`Fes-li un cop d'ull a ${title} https://nodevid.now.sh/${type}/${id}`}
                            className='Post__some-network__share-button'
                        >
                            <EmailIcon size={25} round />
                        </EmailShareButton>
                    </div>
                </div>
                <Link href={`/serveis`}>
                    <a>
                        <h3>&larr; Tornar</h3>
                    </a>
                </Link>
                <style jsx>{`
                    h4,
                    p {
                        width: 100%;
                    }
                    img {
                      max-width: 160px;
                    }
                    .Post__some-network {
                        vertical-align: top;
                        display: inline-block;
                        margin-right: 20px;
                        text-align: center;
                    }
                    .social-share-icons {
                        margin-bottom: 1.5rem;
                    }
                `}</style>
            </IntlProvider>
        </>
    );
};

export default BlocPost;
