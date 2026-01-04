import React, { useEffect, useState } from 'react';
import Loader from '../../Component/Loader';
import Cards from '../../Component/Cards';
import { ShoppingBag, Sparkles, ChevronLeft, ChevronRight, RefreshCw, SortAsc } from 'lucide-react';
import SearchBar from '../../Component/SearchBar';

const PurchaseAssets = () => {
    const [isloading, setloading] = useState(false);
    const [aiS, setAi] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    // Filter & Sort States
    const [selectedFramework, setSelectedFramework] = useState('All');
    const [selectedUseCase, setSelectedUseCase] = useState('All');
    const [sortOrder, setSortOrder] = useState('newest');

    // Pagination States
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; 

    useEffect(() => {
        setloading(true);
        fetch("https://ai-inventing-manager-server.vercel.app/allmodals")
            .then((res) => res.json())
            .then((data) => {
                setAi(data);
                setloading(false);
            });
    }, []);

    const getProcessedData = () => {
        let result = aiS.filter((ai) => {
            const matchesSearch = ai.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFramework = selectedFramework === 'All' || ai.framework === selectedFramework;
            const matchesUseCase = selectedUseCase === 'All' || ai.useCase === selectedUseCase;
            return matchesSearch && matchesFramework && matchesUseCase;
        });

        result.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });
        return result;
    };

    const filteredAi = getProcessedData();
    const currentItems = filteredAi.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const totalPages = Math.ceil(filteredAi.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1); 
    };

    const resetFilters = () => {
        setSelectedFramework('All');
        setSelectedUseCase('All');
        setSortOrder('newest');
        setSearchQuery('');
        setCurrentPage(1);
    };

    const frameworks = ["All", ...new Set(aiS.map(item => item.framework))];
    const useCases = ["All", ...new Set(aiS.map(item => item.useCase))];

    return (
        <div className="min-h-screen bg-[#05070a] pb-20">
            {/* --- Integrated Header & Toolbar --- */}
            <div className="max-w-[1400px] mx-auto px-6 pt-12">
                <div className="flex flex-col space-y-8 border-b border-white/5 pb-10">
                    
                    {/* Top Row: Title & Search */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest mb-2">
                                <Sparkles size={14} />
                                Marketplace
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                                Purchase <span className="text-blue-600">Assets</span>
                            </h2>
                        </div>

                        {/* SearchBar positioned here for better flow */}
                        <div className="flex-grow max-w-lg lg:ml-10">
                            <SearchBar onSearch={handleSearch} />
                        </div>
                    </div>

                    {/* Bottom Row: Filters & Stats */}
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div className="flex flex-wrap items-center gap-4">
                            {/* Sort */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-gray-500 font-bold uppercase ml-1 flex items-center gap-1">
                                    <SortAsc size={10}/> Sort
                                </span>
                                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="bg-white/5 border border-white/10 text-gray-300 text-xs rounded-xl px-4 py-2 outline-none">
                                    <option value="newest" className="bg-[#05070a]">Newest</option>
                                    <option value="oldest" className="bg-[#05070a]">Oldest</option>
                                </select>
                            </div>

                            {/* Framework */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-gray-500 font-bold uppercase ml-1">Framework</span>
                                <select value={selectedFramework} onChange={(e) => {setSelectedFramework(e.target.value); setCurrentPage(1);}} className="bg-white/5 border border-white/10 text-gray-300 text-xs rounded-xl px-4 py-2 outline-none">
                                    {frameworks.map(f => <option key={f} value={f} className="bg-[#05070a]">{f}</option>)}
                                </select>
                            </div>

                            {/* Use Case */}
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-gray-500 font-bold uppercase ml-1">Use Case</span>
                                <select value={selectedUseCase} onChange={(e) => {setSelectedUseCase(e.target.value); setCurrentPage(1);}} className="bg-white/5 border border-white/10 text-gray-300 text-xs rounded-xl px-4 py-2 outline-none">
                                    {useCases.map(u => <option key={u} value={u} className="bg-[#05070a]">{u}</option>)}
                                </select>
                            </div>

                            <button onClick={resetFilters} className="mt-5 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all">
                                <RefreshCw size={18} />
                            </button>
                        </div>

                        {/* Result Counter */}
                        <div className="hidden sm:flex items-center gap-3 bg-blue-600/5 px-4 py-2 rounded-2xl border border-blue-500/20">
                            <ShoppingBag className="text-blue-500" size={18} />
                            <span className="text-white font-bold text-sm">{filteredAi.length}</span>
                            <span className="text-gray-500 text-xs">Items</span>
                        </div>
                    </div>
                </div>
            </div>
         
            {/* Grid Content */}
            <div className="max-w-[1400px] mx-auto px-6 mt-12">
                {isloading ? (
                    <div className="flex justify-center items-center h-64"><Loader /></div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {currentItems.map((ai) => (
                                <div key={ai._id} className="w-full flex justify-center">
                                    <Cards ai={ai} />
                                </div>
                            ))}
                        </div>

                        {/* Pagination UI - Same as before */}
                        {filteredAi.length > itemsPerPage && (
                            <div className="mt-16 flex flex-col items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded-xl border border-white/10 text-gray-400 disabled:opacity-20"><ChevronLeft size={20} /></button>
                                    <div className="flex items-center gap-1">
                                        {[...Array(totalPages)].map((_, index) => (
                                            <button key={index} onClick={() => paginate(index + 1)} className={`w-10 h-10 rounded-xl text-sm font-bold border ${currentPage === index + 1 ? "bg-blue-600 border-blue-500 text-white" : "bg-white/5 border-white/10 text-gray-500"}`}>{index + 1}</button>
                                        ))}
                                    </div>
                                    <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 rounded-xl border border-white/10 text-gray-400 disabled:opacity-20"><ChevronRight size={20} /></button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PurchaseAssets;