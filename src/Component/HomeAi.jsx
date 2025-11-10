
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const HomeAi = () => {
  const [aiS, setAi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allai")
      .then((res) => res.json())
      .then((data) => setAi(data));
  }, []);
console.log(aiS);
  return (
    <div>
      <h1 className="font-extrabold text-3xl md:text-4xl w-fit mx-auto px-5 py-3 rounded-2xl brand-gradient">
        FEATURED RECENT AI TOOLS
      </h1>
      <p className="mt-2 mb-6 text-soft">Handpicked models, fresh datasets, real impact.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {aiS.map((ai) => (<Cards ai={ai}></Cards>))}
      </div>
    </div>
  );
};

export default HomeAi;




































