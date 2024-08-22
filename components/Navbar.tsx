"use client";
import React from "react";
import Link from "next/link";
import styles from "./css-modules/Navbar.module.css";

const Navbar = () => {
  const links = [
    { name: "Beranda", submenu: ["Tentang Kami", "Struktur Organisasi", "Klien Kami"] },
    { name: "Layanan", submenu: ["Izin SLF", "Alur Pelayanan SLF", "Layanan Pengurusan"] },
    { name: "Galeri", submenu: [] },
    { name: "Kontak", submenu: [] },
    { name: "Karir", submenu: [] },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.logo}>
          <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
        </div>

        {/* NavLinks */}
        <div className={styles.links}>
          {links.map((link, index) => (
            <div key={index} className={styles.linkContainer}>
              <Link href={link.name === "Beranda" ? "/" : `/${link.name.toLowerCase().replace(/\s+/g, '-')}`} className={styles.link}>
                <b>{link.name}</b>
              </Link>

              {/* Dropdown */}
              {link.submenu.length > 0 && (
                <div className={styles.dropdown}>
                  {link.submenu.map((sublink, subIndex) => (
                    <Link href={`/${sublink.toLowerCase().replace(/\s+/g, '-')}`} key={subIndex} className={styles.dropdownLink}>
                      {sublink}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Change Languages */}
        <div className={styles.langContainer}>
          <img src="/assets/united-kingdom.png" alt="English" className={styles.lang} />
          <img src="/assets/indonesia.png" alt="Indo" className={styles.lang} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
