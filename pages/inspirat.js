import fetch from 'isomorphic-unfetch';
import Grid from '../components/Grid';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Inspirat = ({ data, recursos }) => {
    const { title, content, excerpt, acf, slug } = data;
    return (
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <HTMLHead
                title={title.rendered}
                description={excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}
                slug={slug}
            />
            <Layout>
                <figure>
                    <img src={acf.imatge.url} alt={acf.imatge.alt} loading='lazy' width='100%' />
                </figure>
                <h1 className='title' dangerouslySetInnerHTML={{ __html: title.rendered }} />

                <div
                    className='description'
                    dangerouslySetInnerHTML={{ __html: content.rendered }}
                />

                <Grid data={recursos} />
                <style jsx global>{`
                    .card header {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                    }

                    .card header img {
                        max-width: 60px;
                        padding: 0.5rem;
                    }
                    .card p {
                        margin: 0;
                    }
                    @media (min-width: 1024px) {
                        .card header img {
                            max-width: 75px;
                        }
                    }
                `}</style>
            </Layout>
        </motion.div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/pages/82`);
    const data = await res.json();
    const res2 = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/recursos`);
    const data2 = await res2.json();
    return {
        props: {
            data: data,
            recursos: data2,
        },
    };
};

export default Inspirat;
