
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
import { useLoader } from "../Auth/AuthProvider"; // Import the custom hook for loading control

const HomeAi = () => {
  const [aiS, setAi] = useState([""]);  // State to store fetched data
  const { startLoading, stopLoading, loader } = useLoader(); // Destructure loading functions

  useEffect(() => {
   // startLoading(); // Start loading before fetching data
    fetch("http://localhost:3000/allai")
      .then((res) => res.json())
      .then((data) => {
         stopLoading();
        setAi(data); // Set fetched data to state
        // Stop loading after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        stopLoading(); // Ensure to stop loading even in case of an error
      });
  }, [startLoading, stopLoading]); // Ensure to call on mount

  return (
    <div>
      <h1 className="font-extrabold text-3xl md:text-4xl w-fit mx-auto px-5 py-3 rounded-2xl brand-gradient">
        FEATURED RECENT AI TOOLS
      </h1>
      <p className="mt-2 mb-6 text-soft">Handpicked models, fresh datasets, real impact.</p>

      {/* Check if data is being fetched */}
      {loader ? (
        <div className="flex justify-center items-center w-full h-64">
          <div className="spinner-border animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16">
            loading....
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Render cards only when data is fetched */}
          {aiS.map((ai) => (
            <Cards key={ai.id} ai={ai} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeAi;






























