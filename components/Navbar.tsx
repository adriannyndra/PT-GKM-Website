import React from 'react';
import Link from 'next/link';
import { Margarine } from 'next/font/google';

const Navbar = () => {
  const links = ['Beranda', 'Layanan', 'Galeri', 'Kontak', 'Karir'];

  return (

    <nav style={styles.navbar}>
        <div style={styles.container}>
            <div style={styles.logo}>
                <img src="/assets/logo.png" alt="Logo" style={styles.logoImage} />
            </div>
            <div style={styles.links}>
                {links.map((link, index) => (
                <Link href={`/${link.toLowerCase()}`} key={index} style={styles.link}>
                    {link}
                </Link>
                ))}
            </div>
            <div style={styles.langContainer}>
                <img src="\assets\united-kingdom.png" alt="English" style={styles.lang}/>
                <img src="\assets\indonesia.png" alt="Indo" style={styles.lang}/>
            </div>
        </div>
    </nav>
  );
};

const styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #eaeaea',
        width: '100%', // Ensure the navbar spans the full width
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '1366px',
        margin: '0 auto',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImage: {
        height: '60px', // Increase logo size as needed
    },
    links: {
        display: 'flex',
        gap: '60px', // Space between links
        // alignItems: 'center',
        // flexGrow: 1, // Ensure links container grows to center align items
        // justifyContent: 'center', // Center align links
    },
    link: {
        padding: '10px 20px',
        // alignItems: 'center',
        // textDecoration: 'none',
        // color: '#000',
        // borderRadius: '20px',
        // transition: 'background-color 0.3s ease',
        // display: 'flex',
  },
    lang: {
        width: '24px',
        height: '24px',
        // margin: '2px'
    },
    langContainer: {
        display: 'flex',
        alignItems: 'center',
    }
};

export default Navbar;
