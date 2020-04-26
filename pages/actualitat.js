import fetch from 'isomorphic-unfetch';
import Grid from '../components/Grid';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';

const Actualitat = ({ data, posts }) => {
  const { title, content, acf, excerpt } = data;
  return (
    <>
      <HTMLHead
        title={title.rendered}
        description={excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}
      />
      <Layout>
        <figure>
          <img src={acf.imatge.url} loading='lazy' />
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
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/pages/161`);
  const data = await res.json();
  const res2 = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/posts`);
  const data2 = await res2.json();
  return {
    props: {
      data: data,
      posts: data2,
    },
  };
};

export default Actualitat;
