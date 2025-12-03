
// import React, { useEffect, useState } from "react";
// import Cards from "./Cards";
// import { useLoader } from "../Auth/AuthProvider";

// const HomeAi = () => {
//   const [aiS, setAi] = useState([]);
//   const{startLoading,stopLoading} = useLoader();
//   useEffect(() => {
//     startLoading();
//     fetch("http://localhost:3000/allai")
//       .then((res) => res.json())
//       .then((data) => {
//         setAi(data);
//         stopLoading();
//       });
//   }, []);
// console.log(aiS);
//   return (
//     <div>
//       <h1 className="font-extrabold text-3xl md:text-4xl w-fit mx-auto px-5 py-3 rounded-2xl brand-gradient">
//         FEATURED RECENT AI TOOLS
//       </h1>
//       <p className="mt-2 mb-6 text-soft">Handpicked models, fresh datasets, real impact.</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {aiS.map((ai) => (<Cards ai={ai}></Cards>))}
//       </div>
//     </div>
//   );
// };

// export default HomeAi;







//more home ai

import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Loader from "./Loader";


const HomeAi = () => {
  const [aiS, setAi] = useState([""]);  // State to store fetched data
  const [isloading,setloading] = useState(false);

  useEffect(() => {
   setloading(true);
    fetch("https://ai-inventing-manager-server.vercel.app/allai")

      .then((res) => res.json())
      .then((data) => {
     
        setAi(data); 
       
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setloading(false);
      
      });
  }, []); 

  return (
     <div className="space-y-6">
      <div className="text-center space-y-2">
        <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[var(--border)] text-xs text-soft">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Fresh drops this week
        </p>
        <h1 className="font-extrabold text-3xl md:text-4xl w-fit mx-auto px-5 py-3 rounded-2xl brand-gradient">
          FEATURED RECENT AI TOOLS
        </h1>
        <p className="text-soft">Handpicked models, fresh datasets, real impact.</p>
      </div>

      {



        isloading? (<Loader></Loader>):(
          
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Render cards only when data is fetched */}
          {aiS.map((ai) => (
            <Cards key={ai._id} ai={ai} />
          ))}
        </div>)
       }
      
    </div>
  );
};

export default HomeAi;






























