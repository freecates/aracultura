import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a className={styles.logo} title='Anar a la home'>
          <img
            loading='lazy'
            src={`/logo-ara-cultura.svg`}
            alt='Logo Ara Cultura'
            width={'212'}
          />
        </a>
      </Link>
      <div>
        <Link href='/serveis'>
          <a>Acompanyament</a>
        </Link>
        <Link href='/projectes'>
          <a>Implanta</a>
        </Link>
        <Link href='/inspirat'>
          <a>Inspira't</a>
        </Link>
        <Link href='/girs'>
          <a>Gir Digital</a>
        </Link>
        <Link href='/actualitat'>
          <a>Actualitat</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
