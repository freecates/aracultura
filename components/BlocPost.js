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

const BlocPost = ({ title, author, datePublished, description, id, type, content, paths }) => {
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
                {!imatge ? null : (
                    <picture>
                        <img src={imatge.url} width={'100%'} />
                    </picture>
                )}
                <h1 className='title'>{title}</h1>
                <h2>
                    <content>{description}</content>
                </h2>

                <div className='grid'>
                    <div className='card'>
                        <h4>Per què</h4>
                        <p>{per_que}</p>
                    </div>
                    <div className='card'>
                        <h4>Descripció</h4>
                        <p>{descripcio}</p>
                    </div>
                    <div className='card'>
                        <h4>Com</h4>
                        <p>{com}</p>
                    </div>
                    <div className='card'>
                        <h4>Per qui</h4>
                        <p>{per_qui}</p>
                    </div>
                </div>

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
                <h3>
                    {paths
                        .sort((a, b) => {
                            if (a.id > b.id) {
                                return -1;
                            }
                            if (a.id < b.id) {
                                return 1;
                            }
                            return 0;
                        })
                        .map((c, id) => (
                            <Link key={id} href={c}>
                                <a>{id}</a>
                            </Link>
                        ))}
                </h3>
                <Link href={`/${type}`}>
                    <a>
                        <h3>&larr; Tornar</h3>
                    </a>
                </Link>
                <style jsx>{`
                    .grid {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;

                        max-width: 960px;
                        margin-top: 3rem;
                    }

                    .card {
                        margin: 1rem;
                        flex-basis: 45%;
                        padding: 1.5rem;
                        text-align: left;
                        color: inherit;
                        text-decoration: none;
                        border: 1px solid #eaeaea;
                        border-radius: 10px;
                        transition: color 0.15s ease, border-color 0.15s ease;
                    }
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
