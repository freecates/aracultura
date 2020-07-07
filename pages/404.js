import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <HTMLHead
                title={`404 - Pàgina no trobada`}
                description={`Eps, no la tenim aquesta pàgina`}
                page={'404'}
            />
            <Layout page={'404'}>
                <h1 className='title'>{`404 - Pàgina no trobada`}</h1>
                <p>
                    Eps, no la tenim aquesta pàgina. Si us plau torna a la pàgina d'
                    <Link href={`/`}>
                        <a title={`Anar a la pàgina d'inici`}>inici</a>
                    </Link>{' '}
                    o bé escull alguna opció del menú.
                </p>
            </Layout>
        </motion.div>
    );
};

export default Custom404;
