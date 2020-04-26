import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Footer from './Footer';
import Nav from './Nav';

const Layout = (props) => (
  <>
    <Nav />
    <div className='container'>
      <ScrollUpButton
        style={{ backgroundColor: '#ffffff', fill: '#70a83b', right: '15px' }}
      />
      <main>{props.children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
