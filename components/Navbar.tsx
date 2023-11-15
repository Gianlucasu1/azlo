import React from 'react';
import styles from "@/css/nav.module.css"
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className={`${styles.back} w-100 h-100 d-flex justify-content-between align-items-center p-2.5 bg-[#FA3B3B] h-[4rem]`}>
      <div className={`${styles.main__cont_nav} px-4 ml-auto mr-auto flex justify-between items-center`} >

        <div className={`${styles.nav__firstsec} flex w-1/2 items-center justify-between`}>
          <p className={styles.font__title_settings}>Azlo</p>
          <ul className={`${styles.font__settings} ${styles.navul}` }>
            <li className="text-white cursor-pointer "><Link className='text-white no-underline ' href="/necesitas-un-especialista">Necesitas un especialista</Link></li>
            <li className="text-white cursor-pointer "><Link className='text-white no-underline ' href="/eres-especialista">Eres especialista</Link></li>
            <li className="text-white cursor-pointer ">Acerca de</li>
          </ul>
        </div>

        <div className={`${styles.font__settings} ${styles.nav__secondtsec} flex justify-end`}>
          <Link className='no-underline text-white' href="/">
            Inicia sesión
          </Link>
          <Link href="#" className={`${styles.custom__button} no-underline`}>
            Regístrate
          </Link>
        </div>

        
      </div>
    </nav>
  );
};

export default NavBar;
