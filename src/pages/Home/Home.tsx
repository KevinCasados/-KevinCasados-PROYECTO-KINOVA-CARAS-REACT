import React from "react";
import Header from "../../components/Header/header";
import Carousel from "../../components/Carousel/carousel";
import FeaturedArticles from "../../components/FeaturedArticles/FeaturedArticles";
import Testimonials from "../../components/Testimonials/testimonials";
import Footer from "../../components/Footer/footer";
import Form from "../../components/Form/form";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <FeaturedArticles />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
};

export default Home;