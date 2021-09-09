import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import BlocPost from '../../components/BlocPost';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

const Post = ({ post, paths }) => {
    const router = useRouter();

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage title={'No el tenim aquest post'} />;
    }

    return (
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <Layout>
                {router.isFallback ? (
                    <p>Carregant…</p>
                ) : (
                    <BlocPost
                        title={post.title.rendered}
                        description={post.acf.destacat}
                        id={post.id}
                        type={post.type}
                        content={post.content.rendered}
                        paths={paths}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                    />
                )}
            </Layout>
            <style jsx global>{`
                .container {
                    max-width: 50rem;
                }
            `}</style>
        </motion.div>
    );
};

export async function getStaticProps({ params }) {
    const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/posts?per_page=100`);
    const dataRes = await res.json();

    const paths = dataRes.map((dataRe) => `/${dataRe.type}/${dataRe.slug}`);

    return { props: { post: dataRes.find((x) => x.slug == params.slug), paths } };
}

export async function getStaticPaths() {
    const res = await fetch('https://cms.aracultura.com/wp-json/wp/v2/posts?per_page=100');
    const posts = await res.json();

    const paths = posts.map((post) => `/${post.type}/${post.slug}`)  || [];

    return { paths, fallback: true };
}

export default Post;
