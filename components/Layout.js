import { useState } from 'react';
import routerEvents from 'next-router-events';
import NProgress from 'nprogress';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Footer from './Footer';
import Nav from './Nav';

routerEvents.on('routeChangeStart', () => {
  NProgress.start();
});
routerEvents.on('routeChangeComplete', () => {
  NProgress.done();
});
routerEvents.on('routeChangeError', () => {
  NProgress.done();
});

const Layout = (props) => { 
  const [media, setMedia] = useState('print')
  return (  
  <>
    <Nav />
    <div className='container'>
      <ScrollUpButton
        style={{ backgroundColor: '#ffffff', fill: '#70a83b', right: '15px' }}
      />
      <main>{props.children}</main>
    </div>
    <Footer />
    <link rel='stylesheet' type='text/css' media={media} onLoad={() => setMedia('all')} href='/nprogress.css' />
  </>
);}

export default Layout;
