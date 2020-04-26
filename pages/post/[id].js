import fetch from 'isomorphic-unfetch';
import BlocPost from '../../components/BlocPost';
import Layout from '../../components/Layout';

const Post = ({ post, paths }) => {
  const { title, acf, type, id, date, author, content } = post;
  return (
    <>
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

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/posts`);
  const dataRes = await res.json();

  const paths = dataRes.map((dataRe) => `/${dataRe.type}/${dataRe.id}`);

  return { props: { post: dataRes.find((x) => x.id == params.id), paths } };
}

export default Post;
