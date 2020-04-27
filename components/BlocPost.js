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
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share';
import styles from './Bloc.module.scss';
import { motion } from 'framer-motion';

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const BlocPost = ({ title, author, date, description, id, type, content, paths }) => {
    const {
        com,
        per_que,
        per_qui,
        imatge,
        contacte,
        qui,
        que,
        on,
        descarregable,
        descripcio,
    } = content;

    if (author === 1) {
        author = 'Ara Cultura';
    }
    return (
        <>
            <Head>
                <title>
                    {title} - Ara Cultura - {type}
                </title>
                <meta name='description' content={description} />

                <meta property='fb:app_id' content='1064356173625695' />
                <meta property='og:url' content={`https://www.aracultura.com/${type}/${id}`} />
                <meta property='og:type' content='article' />
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                <meta
                    property='og:image'
                    content={`https://www.aracultura.com/icons/og-image-aracultura-web.png`}
                />
                <meta property='og:image:width' content={1024} />
                <meta property='og:image:height' content={1024} />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='mexico_baila' />
                <meta name='twitter:creator' content='mexico_baila' />
                <meta name='twitter:title' content={title} />
                <meta
                    name='twitter:image:src'
                    content={`https://www.aracultura.com/icons/og-image-aracultura-web.png`}
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
    "@id": "${`https://www.aracultura.com/` + id}"
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
     "url": "https://www.aracultura.com/icons/og-image-aracultura-web.png"
   }
  }, 
  "description": "${description}",
  "image": "https://www.aracultura.com/icons/og-image-aracultura-web.png",
  "datePublished": "${date}",
  "headline": "${title}"
}`,
                    }}
                />
            </Head>
            <motion.div variants={stagger} className={styles.bloc}>
                <IntlProvider locale={'ca'} timeZone='Europe/Madrid'>
                    {!author ? null : (
                        <p>
                            <small>
                                <strong>Per:</strong> {author}. <strong>Publicada el:</strong>{' '}
                                <FormattedDate value={date} />
                            </small>
                        </p>
                    )}
                    {!imatge ? null : (
                        <picture>
                            <img loading='lazy' src={imatge.url} width={'100%'} />
                        </picture>
                    )}
                    <motion.div variants={fadeInUp}>
                        <h1 className='title'>{title}</h1>
                        <h2 dangerouslySetInnerHTML={{ __html: description }} />
                    </motion.div>

                    {type == 'post' && (
                        <div
                            className={styles.alignLeft}
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    )}

                    {!contacte ? null : (
                        <p>
                            Contacte: <a href={`mailto:${contacte}`}>{contacte}</a>
                        </p>
                    )}

                    <motion.div variants={fadeInUp} className={styles.grid}>
                        {!per_que ? null : (
                            <div className={styles.card}>
                                <h4>Per què</h4>
                                <p>{per_que}</p>
                            </div>
                        )}
                        {!descripcio ? null : (
                            <div className={styles.card}>
                                <h4>Descripció</h4>
                                <p dangerouslySetInnerHTML={{ __html: descripcio }} />
                            </div>
                        )}
                        {!com ? null : (
                            <div className={styles.card}>
                                <h4>Com</h4>
                                <p>{com}</p>
                            </div>
                        )}
                        {!per_qui ? null : (
                            <div className={styles.card}>
                                <h4>Per qui</h4>
                                <p>{per_qui}</p>
                            </div>
                        )}
                        {!que ? null : (
                            <div className={styles.card}>
                                <h4>Què</h4>
                                <p>{que}</p>
                            </div>
                        )}
                        {!qui ? null : (
                            <div className={styles.card}>
                                <h4>Qui</h4>
                                <section dangerouslySetInnerHTML={{ __html: qui }} />
                            </div>
                        )}
                        {!on ? null : (
                            <div className={styles.card}>
                                <h4>On</h4>
                                <section
                                    className='dont-break-out'
                                    dangerouslySetInnerHTML={{ __html: on }}
                                />
                            </div>
                        )}
                    </motion.div>

                    {!contacte ? null : (
                        <p>
                            Contacte: <a href={`mailto:${contacte}`}>{contacte}</a>
                        </p>
                    )}

                    <div className={styles.socialShareIcons}>
                        <div className={styles.PostSomeNetwork}>
                            <FacebookShareButton
                                url={`https://www.aracultura.com/${type}/${id}`}
                                className='Post__some-network__share-button'
                            >
                                <FacebookIcon size={25} round />
                            </FacebookShareButton>
                        </div>

                        <div className={styles.PostSomeNetwork}>
                            <TwitterShareButton
                                url={`https://www.aracultura.com/${type}/${id}`}
                                title={title}
                                hashtags={['aracultura']}
                                via='AdhocCultura'
                                className='Post__some-network__share-button'
                            >
                                <TwitterIcon size={25} round />
                            </TwitterShareButton>
                        </div>

                        <div className={styles.PostSomeNetwork}>
                            <LinkedinShareButton
                                url={`https://www.aracultura.com/${type}/${id}`}
                                title={title}
                                className='Post__some-network__share-button'
                            >
                                <LinkedinIcon size={25} round />
                            </LinkedinShareButton>
                        </div>

                        <div className={styles.PostSomeNetwork}>
                            <WhatsappShareButton
                                url={`https://www.aracultura.com/${type}/${id}`}
                                title={title}
                                className='Post__some-network__share-button'
                            >
                                <WhatsappIcon size={25} round />
                            </WhatsappShareButton>
                        </div>

                        <div className={styles.PostSomeNetwork}>
                            <EmailShareButton
                                url={`https://www.aracultura.com/${type}/${id}`}
                                subject={title}
                                body={`Fes-li un cop d'ull a ${title} https://www.aracultura.com/${type}/${id}`}
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
                                    <a className={styles.paths}>{id}</a>
                                </Link>
                            ))}
                    </h3>
                    {type == 'recursos' || type == 'post' ? (
                        type == 'recursos' ? (
                            <Link href={`/inspirat`}>
                                <a>
                                    <h3>&larr; Tornar</h3>
                                </a>
                            </Link>
                        ) : (
                            <Link href={`/actualitat`}>
                                <a>
                                    <h3>&larr; Tornar</h3>
                                </a>
                            </Link>
                        )
                    ) : (
                        <Link href={`/${type}`}>
                            <a>
                                <h3>&larr; Tornar</h3>
                            </a>
                        </Link>
                    )}
                </IntlProvider>
            </motion.div>
        </>
    );
};

export default BlocPost;
