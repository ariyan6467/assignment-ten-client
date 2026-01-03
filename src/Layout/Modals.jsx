import React, { useContext, useEffect, useState } from 'react';
import { AunthContext } from '../Auth/AuthProvider';
import Cards from '../Component/Cards';
import { useLocation } from 'react-router';
import Loader from '../Component/Loader';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Modals = () => {
    const name = useContext(AunthContext);
    const location = useLocation();

    const [aiS, setAi] = useState([]);
    const [filteredAi, setFilteredAi] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isloading, setloading] = useState(false);

    // --- Pagination States ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Dynamic unique names for the dropdown
    const uniqueNamesArray = ["All", ...new Set(aiS.map(item => item.framework))];

    useEffect(() => {
        setloading(true);
        fetch("https://ai-inventing-manager-server.vercel.app/allmodals")
            .then((res) => res.json())
            .then((data) => {
                setAi(data);
                setFilteredAi(data);
                setloading(false);
            });
    }, []);

    // --- Pagination Logic ---
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // We slice "filteredAi" so pagination works with search/filter results
    const currentItems = filteredAi.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredAi.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Filter by Framework
    const filtering = (framework) => {
        setIsOpen(false);
        setCurrentPage(1); // Reset to page 1 on new filter
        setloading(true);

        const url = framework === "All" 
            ? "https://ai-inventing-manager-server.vercel.app/allmodals"
            : `https://ai-inventing-manager-server.vercel.app/find/${framework}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAi(data);
                setFilteredAi(data);
                setloading(false);
            });
    };

    // Search Logic
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setCurrentPage(1); // Reset to page 1 on search

        if (query) {
            const regex = new RegExp(query, 'i');
            const filtered = aiS.filter((ai) => regex.test(ai.name));
            setFilteredAi(filtered);
        } else {
            setFilteredAi(aiS);
        }
    };

    return (
        <div className='max-w-[1300px] mx-auto px-4 py-10 min-h-screen'>
            {/* Top Bar: Filter & Search */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-12'>
                <div className="relative inline-block w-full md:w-auto">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center gap-2 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl px-8 py-3.5 transition-all hover:shadow-2xl hover:scale-105 active:scale-95 font-bold"
                    >
                        <Filter size={18} /> {searchQuery ? "Filtering Results" : "Filter Framework"}
                    </button>

                    {isOpen && (
                        <ul className="dropdown-menu w-52 rounded-2xl bg-white shadow-2xl mt-3 absolute z-50 border border-gray-100 overflow-hidden">
                            {uniqueNamesArray?.map((arr, index) => (
                                <li key={index} 
                                    className="hover:bg-purple-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0"
                                    onClick={() => filtering(arr)}
                                >
                                    <span className="block px-6 py-3 text-sm font-medium text-gray-700">{arr}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Search Bar */}
                <label className="relative w-full max-w-[450px] group">
                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        type="search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search AI Models..."
                        className="w-full py-4 pl-12 pr-6 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 transition-all shadow-sm"
                    />
                </label>
            </div>

            {/* Grid Section */}
            {isloading ? (
                <div className="flex justify-center items-center py-20"><Loader /></div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {currentItems.length > 0 ? (
                            currentItems.map((ai) => <Cards key={ai._id} ai={ai} />)
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-xl font-bold text-gray-400">No AI Models Match Your Criteria</p>
                            </div>
                        )}
                    </div>

                    {/* --- Pagination UI --- */}
                    {filteredAi.length > itemsPerPage && (
                        <div className="mt-16 flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-3 rounded-xl border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                <div className="flex items-center gap-2">
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => paginate(index + 1)}
                                            className={`w-12 h-12 rounded-xl text-sm font-bold transition-all border ${
                                                currentPage === index + 1 
                                                ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-200" 
                                                : "bg-white border-gray-200 text-gray-500 hover:border-purple-300 hover:text-purple-600"
                                            }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>

                                <button 
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-3 rounded-xl border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredAi.length)} of {filteredAi.length} Models
                            </span>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Modals;