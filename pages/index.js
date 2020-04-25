import fetch from 'isomorphic-unfetch';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Layout from '../components/Layout';

const Home = ({ data }) => {
  const { title, content } = data;
  return (
    <>
      <Layout page={'home'}>
        <ScrollUpButton
            style={{ backgroundColor: '#ffffff', fill: '#70a83b', right: '15px' }}
        />
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
