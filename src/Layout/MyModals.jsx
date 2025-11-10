import React, { useContext, useEffect, useState } from 'react';
import { AunthContext } from '../Auth/AuthProvider';
import Cards from '../Component/Cards';

const MyModals = () => {
    const {user} = useContext(AunthContext);
   const [aiS,setAiS] = useState([]);
    console.log(user.email);
     useEffect(()=>{
        fetch(`http://localhost:3000/model/${user.email}`)  
  .then(response => response.json()) 
  .then(data => {
    console.log(data)
    setAiS(data);
  })  
  .catch(error => console.error('Error:', error));
     },[])
    return (
        <div>
         <h1 className="font-extrabold text-3xl md:text-4xl w-fit mx-auto px-5 py-3 rounded-2xl brand-gradient">
            My Models
         </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    aiS.map(ai =>(<Cards ai={ai}></Cards>))
                }
            </div>
        </div>
    );
};

export default MyModals;