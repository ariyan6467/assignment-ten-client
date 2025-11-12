
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

const HomeAi = () => {
  const [aiS, setAi] = useState([""]);  // State to store fetched data
  

  useEffect(() => {
 
    fetch("http://localhost:3000/allai")
      .then((res) => res.json())
      .then((data) => {
     
        setAi(data); // Set fetched data to state
        // Stop loading after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      
      });
  }, []); // Ensure to call on mount

  return (
    <div>
      <h1 className="font-extrabold text-3xl md:text-4xl w-fit mx-auto px-5 py-3 rounded-2xl brand-gradient">
        FEATURED RECENT AI TOOLS
      </h1>
      <p className="mt-2 mb-6 text-soft">Handpicked models, fresh datasets, real impact.</p>

      {/* Check if data is being fetched */}
       
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Render cards only when data is fetched */}
          {aiS.map((ai) => (
            <Cards key={ai.id} ai={ai} />
          ))}
        </div>
      
    </div>
  );
};

export default HomeAi;






























