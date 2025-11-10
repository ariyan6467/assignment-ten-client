
import React, { useContext, useEffect, useState } from 'react';
import { AunthContext } from '../Auth/AuthProvider';
import Cards from '../Component/Cards';

const Modals = () => {
    const name = useContext(AunthContext);
    console.log(name);
    
    const [aiS, setAi] = useState([]);  
    const [filteredAi, setFilteredAi] = useState([]);  
    const [searchQuery, setSearchQuery] = useState(''); 

    useEffect(() => {
        fetch("http://localhost:3000/allmodals")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAi(data);
                setFilteredAi(data);  
            });
    }, []);

  
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query) {
            const regex = new RegExp(query, 'i'); 
            const filtered = aiS.filter((ai) => regex.test(ai.name)); 
            setFilteredAi(filtered);
        } else {
            setFilteredAi(aiS); 
        }
    };

    return (
        <div className='max-w-[1300px] mx-auto'>
            <div className='flex justify-center items-center'>
                <h1 id='headmodal' className='text-4xl font-bold mx-auto text-center my-7 font-serif text-gray-500 bg-gray-600 w-fit px-20 py-7 rounded-2xl'>
                    All AI Models
                </h1>
                <label className="relative w-full max-w-[400px]">
                 
                    <svg
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 text-gray-400 transition-all duration-300 ease-in-out group-focus:scale-110 group-focus:text-purple-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>

              
                    <input
                        type="search"
                        value={searchQuery}
                        onChange={handleSearchChange}  
                        required
                        placeholder="Search"
                        className="w-full py-3 pl-12 pr-4 rounded-full bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 focus:border-transparent group hover:bg-purple-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                    />
                </label>
            </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[1300px] mx-auto">
                {filteredAi.length > 0 ? (
                    filteredAi.map((ai) => <Cards key={ai._id} ai={ai} />)
                ) : (
                    <p className="text-center text-xl text-gray-500 col-span-4">No models found.</p>
                )}
            </div>
        </div>
    );
};

export default Modals;
