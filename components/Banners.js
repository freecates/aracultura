import styles from './Banners.module.scss';
import { useMediaQuery } from 'react-responsive';

const Banners = ({ banners }) => {
    let date = new Date().toLocaleDateString();
    const bannersActius = banners.filter(
        (x) =>
            new Date(x.acf.data_inici_campanya).toLocaleDateString() == date || 
            new Date(x.acf.data_finalitzacio_campanya).toLocaleDateString() >= date
    );
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 768px)',
    });
    const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 767px)',
    });
    return (
        <>
            <div className={styles.banners}>
                {bannersActius
                    .sort((a, b) => {
                        if (a.acf.data_inici_campanya > b.acf.data_inici_campanya) {
                            return -1;
                        }
                        if (a.acf.data_inici_campanya < b.acf.data_inici_campanya) {
                            return 1;
                        }
                        return 0;
                    })
                    .map((b, id) => (
                        <a
                            href={b.acf.url_de_desti}
                            title={b.acf.banner_dk.title}
                            target={'_blank'}
                            key={id}
                            rel={'noreferrer noopener'}
                        >
                            <figure>
                                {isDesktopOrLaptop && (
                                    <img
                                        src={`${b.acf.banner_dk.url}`}
                                        loading={'lazy'}
                                        width={b.acf.banner_dk.width}
                                        height={b.acf.banner_dk.height}
                                        alt={b.acf.banner_dk.alt}
                                    />
                                )}
                                {isMobileDevice && (
                                    <img
                                        src={`${b.acf.banner_mobile.url}`}
                                        loading={'lazy'}
                                        width={b.acf.banner_mobile.width}
                                        height={b.acf.banner_mobile.height}
                                        alt={b.acf.banner_mobile.alt}
                                    />
                                )}
                            </figure>
                        </a>
                    ))}
            </div>
        </>
    );
};

export default Banners;
