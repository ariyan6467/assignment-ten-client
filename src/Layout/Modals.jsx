import React, { useContext, useEffect, useState } from 'react';
import { AunthContext } from '../Auth/AuthProvider';
import Cards from '../Component/Cards';


const Modals = () => {
    const name = useContext(AunthContext);
    console.log(name);
     const [aiS, setAi] = useState([]);
      useEffect(() => {
        fetch("http://localhost:3000/allmodals")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setAi(data);
          });
      }, []);
    return (
        <div>
           <h1 id='headmodal' className='text-4xl font-bold mx-auto text-center my-7 font-serif text-gray-500 bg-gray-600 w-fit px-20 py-7 rounded-2xl'>All Ai Models</h1>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
           {
            aiS.map((ai) => ( <Cards ai={ai}></Cards>
          
        ))}
           </div>
        </div>
    );
};

export default Modals;