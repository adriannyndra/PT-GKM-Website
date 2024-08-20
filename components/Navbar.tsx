import React from 'react';
import Link from 'next/link';
import styles from './css-modules/Navbar.module.css'

const Navbar = () => {
  const links = ['Beranda', 'Layanan', 'Galeri', 'Kontak', 'Karir'];

  return (

    <nav className={styles.navbar}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
            </div>
            <div className={styles.links}>
                {links.map((link, index) => (
                <Link href={`/${link.toLowerCase()}`} key={index} className={styles.link}>
                    {link}
                </Link>
                ))}
            </div>
            <div className={styles.langContainer}>
                <img src="\assets\united-kingdom.png" alt="English" className={styles.lang}/>
                <img src="\assets\indonesia.png" alt="Indo" className={styles.lang}/>
            </div>
        </div>
    </nav>
  );
};

// const styles = {
//     navbar: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '10px 20px',
//         backgroundColor: '#fff',
//         borderBottom: '1px solid #eaeaea',
//         width: '100%', // Ensure the navbar spans the full width
//     },
//     container: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         width: '1366px',
//         margin: '0 auto',
//     },
//     logo: {
//         display: 'flex',
//         alignItems: 'center',
//     },
//     logoImage: {
//         height: '50px', // Increase logo size as needed
//     },
//     links: {
//         display: 'flex',
//         gap: '60px', // Space between links

//     },
//     link: {
//         padding: '10px 20px',

//   },
//     lang: {
//         width: '24px',
//         height: '24px',

//     },
//     langContainer: {
//         display: 'flex',
//         alignItems: 'center',
//     }
// };

export default Navbar;
