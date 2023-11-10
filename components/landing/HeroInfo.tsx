import React from 'react'
import styles from "@/css/layout_hero_info.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { link } from 'fs'
import { SpecialistSwitcher } from '../specialist-switcher'

export const HeroInfo = ({ title, content, buttonTitle, linkTitle, imgOrder, list }: {
  title: string,
  content: string,  
  buttonTitle: string,
  linkTitle?: string,
  imgOrder: "left" | "right",
  list?: string[]
}) => {
  return (
    <div className={styles.main__container}>
      <div className={styles.wrapper}>
        <div className={imgOrder == "left" ? styles.order0 : styles.order1}>
          <Image className={styles.image} src="/img2.png" alt='Image of prueba' width={550} height={470} />
        </div>
        <div className={`${imgOrder == "left" ? styles.order1 : styles.order0 }  ${styles.info__container}`}>
          <p className={styles.title}>{title}</p>
          <p className={styles.content}>{content}</p>
          {list && list.length > 0 ? <SpecialistSwitcher listItems={list} /> : <></>}
          <div className={styles.buttons__container}>
            <Link className={styles.first__button} href="#">
              {buttonTitle}
            </Link>
            { linkTitle && linkTitle.length > 1 ? 
            <Link className="text-red-600" href="#">
              {linkTitle}
            </Link> :
            <></>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
