import fetch from 'isomorphic-unfetch';
import BlocPost from '../../components/BlocPost';
import Layout from '../../components/Layout';

const Post = ({ post, paths }) => {
  const { title, acf, type, id, date } = post;
  return (
    <>
      <Layout>
        <BlocPost
          title={title.rendered}
          description={acf.descripcio}
          id={id}
          type={type}
          content={acf}
          paths={paths}
          date={date}
        />
      </Layout>
      <style jsx global>{`
        .container {
          max-width: 50rem;
        }
      `}</style>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://cms.aracultura.com/wp-json/wp/v2/serveis');
  const posts = await res.json();

  const paths = posts.map((post) => `/${post.type}/${post.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/serveis`);
  const dataRes = await res.json();

  const paths = dataRes.map((dataRe) => `/${dataRe.type}/${dataRe.id}`);

  return { props: { post: dataRes.find((x) => x.id == params.id), paths } };
}

export default Post;
