import fetch from 'isomorphic-unfetch';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Banners from '../components/Banners';

const Home = ({ data, banners }) => {
    const { title, content, excerpt } = data;
    return (
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <HTMLHead
                title={title.rendered}
                description={excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}
                page={'home'}
            />
            <Layout page={'home'}>
                {!banners ? null : <Banners banners={banners} />}
                <h1 className='title'>{title.rendered}</h1>
                <div
                    className='description'
                    dangerouslySetInnerHTML={{ __html: content.rendered }}
                />
            </Layout>
        </motion.div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/pages/76`);
    const data = await res.json();
    const res2 = await fetch(`https://cms.aracultura.com/wp-json/acf/v3/banners`);
    const data2 = await res2.json();
    return {
        props: {
            data: data,
            banners: data2,
        },
    };
};

export default Home;
