import React, { Suspense } from "react";
import Banner from "../Component/Banner";
import HomeAi from "../Component/HomeAi";
import AboutAi from "../Component/AboutAi";
import Register from "../Component/Register";
import Loader from "../Component/Loader";
import CardOne from "../Component/SuccessCards.jsx/CardOne";
import CardTwo from "../Component/SuccessCards.jsx/CardTwo";
import CardThree from "../Component/SuccessCards.jsx/CardThree";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="my-14">
          <HomeAi />
        </section>
        <section className="my-14">
          <AboutAi />
        </section>
        <section className="my-14">
          <Register />
        </section>
       <section className="my-34 bg-blur py-36 px-17 rounded-2xl">
  <div className="flex flex-wrap justify-between gap-8 ">
    <CardOne />
    <CardTwo />
    <CardThree />
  </div>
</section>
      </div>
    </div>
  );
};

export default Home;
