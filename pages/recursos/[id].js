import fetch from 'isomorphic-unfetch';
import BlocPost from '../../components/BlocPost';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

const Post = ({ post, paths }) => {
  const { title, acf, type, id } = post;
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <Layout>
        <BlocPost
          title={title.rendered}
          description={acf.que}
          id={id}
          type={type}
          content={acf}
          paths={paths}
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
  const res = await fetch('https://cms.aracultura.com/wp-json/wp/v2/recursos');
  const posts = await res.json();

  const paths = posts.map((post) => `/${post.type}/${post.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/recursos`);
  const dataRes = await res.json();

  const paths = dataRes.map((dataRe) => `/${dataRe.type}/${dataRe.id}`);

  return { props: { post: dataRes.find((x) => x.id == params.id), paths } };
}

export default Post;
