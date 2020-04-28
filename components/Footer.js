import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Link href='/'>
      <a title='Anar a la home'>
        <img
          loading='lazy'
          src={`/logo-ara-cultura.svg`}
          alt='Logo Ara Cultura'
          width={'212'}
        />
      </a>
    </Link>
    <a className={styles.green} href='mailto:hola@aracultura.com'>
      hola@aracultura.com
    </a>
    Powered by:
    <a
      href='https://www.adhoc-cultura.com/'
      target='_blank'
      rel='noopener noreferrer'>
      Adhoc Cultura
    </a>
    {'&'}
    <a href='http://www.oxygen.cat' target='_blank' rel='noopener noreferrer'>
      Oxygen.cat
    </a>
  </footer>
);

export default Footer;
