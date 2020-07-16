import Grid from '../components/Grid';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Actualitat = ({ data, posts }) => {
    const { title, content, acf, excerpt, slug } = data;
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
                <h1 className='title'>{title.rendered}</h1>

                <div
                    className='description'
                    dangerouslySetInnerHTML={{ __html: content.rendered }}
                />
                <Grid data={posts} />
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
    const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/pages/161`);
    const data = await res.json();
    const res2 = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/posts`);
    const data2 = await res2.json();
    return {
        props: {
            data: data,
            posts: data2,
        },
        unstable_revalidate: 60
    };
};

export default Actualitat;
