import BlocPost from '../../components/BlocPost';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

const Post = ({ post, paths }) => {
    const { title, acf, type, id, date, slug } = post;
    return (
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <Layout>
                <BlocPost
                    title={title.rendered}
                    description={acf.descripcio}
                    id={id}
                    type={type}
                    content={acf}
                    paths={paths}
                    date={date}
                    slug={slug}
                />
            </Layout>
            <style jsx global>{`
                .container {
                    max-width: 50rem;
                }
            `}</style>
        </motion.div>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://cms.aracultura.com/wp-json/wp/v2/serveis');
    const posts = await res.json();

    const paths = posts.map((post) => `/${post.type}/${post.slug}`);

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/serveis`);
    const dataRes = await res.json();

    const paths = dataRes.map((dataRe) => `/${dataRe.type}/${dataRe.slug}`);

    return { props: { post: dataRes.find((x) => x.slug == params.slug), paths } };
}

export default Post;
