import React from "react";
import { MainLayout } from "../../layout/main-layout";
import { bannerData } from "../../data/home";
import { MainBanner } from "../../components/banners";
import { Productcard } from "../../components/cards/product-card/product-card";
import { products } from "../../data/home";
import tab1 from "/tab1.png"
import tab2 from "/tab2.png"
import tab3 from "/tab3.png"
import tab4 from "/tab4.png"


export const Home = () => {
  return (
    <MainLayout>
      {bannerData.map((item,i) => <MainBanner key={i} img={item.img} title={item.title} text={item.text} button={item.button}/>)}
      <div className="box">
      {products.map((item,i) => <Productcard 
      key={i}  img={item.img} title={item.title} text={item.text}/> )}
      </div>
      <ul className="tab_list">
        <li><img src={tab1} alt="" /></li>
        <li><img src={tab2} alt="" /></li>
        <li><img src={tab3} alt="" /></li>
        <li><img src={tab4} alt="" /></li>
      </ul>
    </MainLayout>
  );
};
