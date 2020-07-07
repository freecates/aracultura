import Link from 'next/link';
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

const Grid = ({ data }) => {
    return (
        <motion.div variants={stagger} className='grid' id={'llistat'}>
            {data
                .sort((a, b) => {
                    if (a.type == 'post') {
                        if (a.date > b.date) {
                            return -1;
                        }
                        if (a.date < b.date) {
                            return 1;
                        }
                        return 0;
                    } else {
                        if (a.date < b.date) {
                            return -1;
                        }
                        if (a.date > b.date) {
                            return 1;
                        }
                        return 0;
                    }
                })
                .map((c, id) => (
                    <motion.div variants={fadeInUp} className='card' key={c.id} id={id}>
                        <div>

                        <header>
                            {!c.acf.imatge ? null : (
                                <img loading='lazy' src={c.acf.imatge.url} alt={c.title.rendered} width={`60`} />
                            )}
                            <h3>
                                <span dangerouslySetInnerHTML={{ __html: c.title.rendered }} />
                                &rarr;
                            </h3>
                        </header>
                        {!c.acf.per_que ? null : (
                            <>
                                <h4>{c.acf.per_que && `Per què`}</h4>
                                <p>
                                    {c.acf.per_que.substring(0, 120)}...{' '}
                                    <Link href={`/${c.type}/${c.slug}`}>
                                        <a title={`Veure la fitxa de: ${c.title.rendered}`}>[+]</a>
                                    </Link>
                                </p>
                            </>
                        )}
                        {c.type == 'post' ? (
                            <>
                                <p>
                                    {c.acf.destacat.substring(0, 120)}...{' '}
                                    <Link href={`/${c.type}/${c.slug}`}>
                                        <a title={`Veure: ${c.title.rendered}`}>[+]</a>
                                    </Link>
                                </p>
                            </>
                        ) : null}
                        </div>
                    </motion.div>
                ))}
            <style jsx global>{`
                .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    max-width: 960px;
                    margin-top: 3rem;
                    background: rgba(112, 168, 59, 0.1);
                    border-radius: 10px;
                }

                .card {
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    margin: 1rem;
                    min-height: 360px;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #70a83b;
                    border-radius: 10px;
                    transition: background 1.15s ease;
                }

                .card:hover {
                    background: #ffffff;
                }

                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.25rem;
                    color: #70a83b;
                }

                .card p {
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                .card p:last-child {
                    margin: 0;
                }

                .card img {
                    max-width: 50px;
                }

                @media (max-width: 600px) {
                    .grid {
                        width: 105%;
                        flex-direction: column;
                        margin: 0 -0.5rem;
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default Grid;
