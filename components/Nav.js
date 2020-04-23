import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a title='Anar a la home'>
          <img src={`/logo-ara-cultura.svg`} alt='Logo Ara Cultura' />
        </a>
      </Link>
      <Link href='/serveis'>
        <a>Acompanyament</a>
      </Link>
      <Link href='/projectes'>
        <a>Implanta</a>
      </Link>
      <Link href='/inspira-t'>
        <a>Inspira't</a>
      </Link>
    </nav>
  );
};

export default Nav;
