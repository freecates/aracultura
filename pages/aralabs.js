import { motion } from 'framer-motion';
import Grid from '../components/Grid';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';
import PageContent from '../components/PageContent';

const AraLab = ({ data, aralabs }) => {
    const { title, content, excerpt, acf, slug } = data;
    return (
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <HTMLHead
                title={title.rendered}
                description={excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}
                slug={slug}
            />
            <Layout>
                <PageContent
                    title={title.rendered}
                    src={acf.imatge.url}
                    alt={acf.imatge.alt}
                    content={content.rendered}
                />
                <Grid data={aralabs} />
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
    const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/pages/474`);
    const data = await res.json();
    const res2 = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/aralabs`);
    const data2 = await res2.json();
    return {
        props: {
            data: data,
            aralabs: data2,
        },
    };
};

export default AraLab;
