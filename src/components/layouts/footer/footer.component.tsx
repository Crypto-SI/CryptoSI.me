import styles from './footer.module.scss';

const Footer = () =>
{
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <span>© 2021 - { new Date().getFullYear() } CryptoSI</span>
            </div>
        </footer>
    );
};

export default Footer;
