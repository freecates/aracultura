import fetch from 'isomorphic-unfetch';
import Grid from '../components/Grid';
import Layout from '../components/Layout';

const Serveis = ({ data, serveis }) => {
  const { title, content } = data;
  return (
    <>
      <Layout>
        <h1 className='title'>{title.rendered}</h1>

        <div
          className='description'
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        />
        <Grid data={serveis} />
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

export const getStaticProps = async () => {
  const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/pages/78`);
  const data = await res.json();
  const res2 = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/serveis`);
  const data2 = await res2.json();
  return {
    props: {
      data: data,
      serveis: data2,
    },
  };
};

export default Serveis;