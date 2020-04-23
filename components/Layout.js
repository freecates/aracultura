import Footer from './Footer';
import Nav from './Nav';

const Layout = (props) => (
  <>
    <Nav />
    <div className='container'>
      <main>{props.children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
