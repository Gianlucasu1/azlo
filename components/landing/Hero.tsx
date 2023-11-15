import React from 'react'
import styles from "@/css/hero.module.css"
import Link from 'next/link'

export default function Hero() {
  return (
    <section className={styles.main__container}>
      <div className={styles.inside__container}>
        <div className={styles.container_info}>
          <p className={styles.title}>Toda la ayuda que necesitas, fácil, rápido, seguro y cerca de ti.</p>
          <p className={styles.info}>Encuentra en Azlo la ayuda que tanto necesitas de una forma rápida y segura, mira nuestros servicios y solicita tu primer especialista</p>
          <div className={styles.buttons__container}>
            <Link className={`${styles.first__button} no-underline`} href="#">
              Solicita un especialista
            </Link>
            <Link className={`${styles.second__button} no-underline`} href="#">
              Trabaja con Azlo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
