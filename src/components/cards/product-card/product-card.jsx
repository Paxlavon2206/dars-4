import React from 'react'
import style from "../product-card/style.module.scss"


export const Productcard = ({img, title, text}) => {
  return (
    <div className={style.product}>
      <img className={style.product_img} src={img} alt="img" />
      <div className={style.product_block}>
        <h1 className={style.product_title}>{title}</h1>
        <p className={style.product_text}>{text}</p>
      </div>
    </div>
  )
}
