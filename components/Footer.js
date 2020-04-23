import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      <Link href='/'>
        <a title='Anar a la home'>
          <img src={`/logo-ara-cultura.svg`} alt='Logo Ara Cultura' />
        </a>
      </Link>
      Powered by:{' '}
      <a
        href='https://www.adhoc-cultura.com/'
        target='_blank'
        rel='noopener noreferrer'>
        Adhoc Cultura
      </a>
    </p>
  </footer>
);

export default Footer;
