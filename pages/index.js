import fetch from 'isomorphic-unfetch';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';

const Home = ({ data }) => {
  const { title, content } = data;
  return (
    <>
      <HTMLHead title={title.rendered} description={title.rendered} />
      <Layout page={'home'}>
        <h1 className='title'>{title.rendered}</h1>
        <div
          className='description'
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://cms.aracultura.com/wp-json/wp/v2/pages/76`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

export default Home;
