import React from 'react';
import styles from "@/css/nav.module.css"
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className={`${styles.back} w-full h-full flex justify-between items-center p-4`}>
      <div className={`${styles.main__cont_nav} px-4 ml-auto mr-auto flex justify-between items-center`} >

        <div className={`${styles.nav__firstsec} flex w-1/2 items-center justify-between`}>
          <p className={styles.font__title_settings}>Azlo</p>
          <ul className={`${styles.font__settings} ${styles.navul}` }>
            <li className="text-white cursor-pointer hover:text-gray-300">Necesitas un especialista</li>
            <li className="text-white cursor-pointer hover:text-gray-300">Eres especialista</li>
            <li className="text-white cursor-pointer hover:text-gray-300">Acerca de</li>
          </ul>
        </div>

        <div className={`${styles.font__settings} ${styles.nav__secondtsec} flex justify-end`}>
          <Link href="#">
            Inicia sesión
          </Link>
          <Link href="#" className={`${styles.custom__button}`}>
            Regístrate
          </Link>
        </div>

        
      </div>
    </nav>
  );
};

export default NavBar;
