import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";
import { PageContainer } from "./Components/PageContainer";

export const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <PageContainer>
      <Navbar title="navbar" />
      <Main />
      <Footer />
    </PageContainer>
  );
};
