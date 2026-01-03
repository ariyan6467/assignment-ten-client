import React, { useContext, useEffect, useState } from 'react';
import { AunthContext } from '../../Auth/AuthProvider';
import Loader from '../../Component/Loader';
import Card from '../../Component/PurchaseCard';
import { ShoppingBag, History, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const MyPurchases = () => {
    const { user } = useContext(AunthContext);
    const [purchases, setPurchase] = useState([]);
    const [isloading, setloading] = useState(false);

    // --- Pagination States ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; 

    useEffect(() => {
        setloading(true);
        fetch(`https://ai-inventing-manager-server.vercel.app/userpurchase/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setPurchase(data);
                setloading(false);
            });
    }, [user.email]);

    // --- Pagination Logic ---
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPurchases = purchases.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(purchases.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#05070a] text-gray-300">
            {/* --- Professional Header Section --- */}
            <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-10">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                            <History size={14} />
                            Transaction History
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                            My <span className="text-blue-600">Purchases</span>
                        </h1>
                        <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                            Manage and access your acquired AI assets. View license details and deployment status for your models.
                        </p>
                    </div>

                    {/* Stats Summary Chips */}
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl flex flex-col">
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Total Assets</span>
                            <span className="text-xl font-bold text-white">{purchases.length}</span>
                        </div>
                        <div className="bg-blue-600/10 border border-blue-500/20 px-5 py-3 rounded-2xl flex flex-col">
                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Status</span>
                            <span className="text-xl font-bold text-blue-500 flex items-center gap-2">
                                Verified <CheckCircle size={16} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Main Grid Content --- */}
            <div className="max-w-[1300px] mx-auto px-6 pb-20">
                {isloading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <Loader />
                        <p className="text-xs font-mono text-blue-500 animate-pulse uppercase tracking-widest">Synchronizing Vault...</p>
                    </div>
                ) : (
                    <>
                        {purchases.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
                                    {currentPurchases.map((purchase) => (
                                        <div key={purchase.id || purchase._id} className="w-full flex justify-center">
                                            <Card purchase={purchase} />
                                        </div>
                                    ))}
                                </div>

                                {/* --- Professional Pagination Controls --- */}
                                {purchases.length > itemsPerPage && (
                                    <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/5 pt-10">
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={() => paginate(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="p-2 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>

                                            <div className="flex items-center gap-1">
                                                {[...Array(totalPages)].map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => paginate(index + 1)}
                                                        className={`w-10 h-10 rounded-xl text-sm font-bold transition-all border ${
                                                            currentPage === index + 1 
                                                            ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20" 
                                                            : "bg-white/5 border-white/10 text-gray-500 hover:border-white/20 hover:text-white"
                                                        }`}
                                                    >
                                                        {index + 1}
                                                    </button>
                                                ))}
                                            </div>

                                            <button 
                                                onClick={() => paginate(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="p-2 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                                            >
                                                <ChevronRight size={20} />
                                            </button>
                                        </div>
                                        <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                                            Vault Page {currentPage} of {totalPages}
                                        </p>
                                    </div>
                                )}
                            </>
                        ) : (
                            /* Empty State */
                            <div className="flex flex-col items-center justify-center py-24 text-center bg-white/[0.02] border border-dashed border-white/10 rounded-[3rem]">
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                                    <ShoppingBag size={40} className="text-gray-700" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Your Vault is Empty</h3>
                                <p className="text-gray-500 text-sm max-w-xs mb-8">
                                    You haven't purchased any AI models yet. Explore the marketplace to find the perfect asset for your project.
                                </p>
                                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95">
                                    Explore Marketplace <ArrowRight size={16} />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default MyPurchases;