import { useRouter } from 'next/router';
import BlocPost from '../../components/BlocPost';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

const Post = ({ post, paths }) => {
  const { title, acf, type, id, date, author, content, slug } = post;
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <Layout>
        <BlocPost
          title={title.rendered}
          description={acf.destacat}
          id={id}
          type={type}
          content={content.rendered}
          paths={paths}
          date={date}
          author={author}
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
  const res = await fetch('https://cms.aracultura.com/wp-json/wp/v2/posts');
  const posts = await res.json();

  const paths = posts.map((post) => `/${post.type}/${post.slug}`);

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/posts`);
  const dataRes = await res.json();

  const paths = dataRes.map((dataRe) => `/${dataRe.type}/${dataRe.slug}`);

  return { props: { post: dataRes.find((x) => x.slug == params.slug), paths } };
}

export default Post;