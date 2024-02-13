import React from "react";
import { headerData } from "../../data/home";
import style from "../header/header.module.scss"
import headerLogo from "/header-logo.svg"
import korzinka from "/korzinka.svg"
import korzinka2 from "/korinzka2.svg"






export const Header = () => {
  return (
  <>
    <header>
      <div className={style.container}>
         <div className={style.header__top}>
         <div className={style.logoblock}>
            <a href="index.html">
            <img className={style.log} src={headerLogo} alt="img" />
            </a>
            <p className= {style.logotitle}>Колбасы и мясные деликатесы</p>
          </div>
          <div className={style.header__korzinka_block}>
            <img src={korzinka} alt="img" />
           <img src={korzinka2} alt="img" />
          </div>
         </div>
        </div>
    </header>

    <div className={style.header__bottom}>

</div>
  </>
   
  );
};
