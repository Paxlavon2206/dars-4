import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
