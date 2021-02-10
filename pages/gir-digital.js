import { motion } from 'framer-motion';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';
import PageContent from '../components/PageContent';

const GirDigtal = ({ data }) => {
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
            </Layout>
        </motion.div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/pages/392`);
    const data = await res.json();
    return {
        props: {
            data: data
        },
    };
};

export default GirDigtal;
