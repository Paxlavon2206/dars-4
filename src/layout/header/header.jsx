import React from "react";
import { headerList } from "../../data/home";
import style from "../header/header.module.scss"
import headerLogo from "/header-logo.svg"
import korzinka from "/korzinka.svg"
import korzinka2 from "/korinzka2.svg"
import search from '/header_search.svg'






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
    <div className={style.header__items}>
    {headerList.map((item) => <ul className="header_list" key={item.path}>
      <li>
        <a className={style.header_item} href={item.path}>{item.name}</a>
      </li>
     </ul> )}
    </div>
    <form className={style.header_form}>
      <input className={style.header_input} type="text" name="search" id="search" placeholder="Поиск по сайту"/>
      <img src={search} alt="svg" />
    </form>
</div>
  </>
   
  );
};
