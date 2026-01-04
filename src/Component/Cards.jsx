import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AunthContext } from '../Auth/AuthProvider';
import { ExternalLink, Calendar, User, ShoppingCart, Cpu, Database } from 'lucide-react';

const Cards = ({ ai }) => {
    const { setDetails } = useContext(AunthContext);
   const location = window.location.pathname;
   console.log(location);
    // EXACT same functionality as your original code
    async function getModelById(id) {
        try {
            const res = await fetch(`https://ai-inventing-manager-server.vercel.app/models/${id}`);
            if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
            const data = await res.json();
            setDetails(data);
        } catch (err) {
            console.error('Failed to fetch model:', err);
        }
    }

    // SAFE date formatting
    const date = ai?.createdAt 
        ? new Date(ai.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }) 
        : "Date unknown";

    return (
<div className="group relative flex flex-col h-[540px] w-full surface-card rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(8,112,255,0.15)]">
            
            {/* 1. Image Area */}
            <div className="relative h-52 w-full overflow-hidden p-4">
               <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-[color-mix(in_srgb,var(--card-bg)_80%,transparent)] border border-[var(--card-border)]">
                    <img 
                        src={ai?.image || "https://via.placeholder.com/400"} 
                        alt={ai?.name || "AI Model"} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                </div>
               <div className="absolute top-8 right-8 px-3 py-1 bg-[color-mix(in_srgb,var(--card-bg)_90%,transparent)] backdrop-blur-md rounded-full text-[10px] font-bold text-blue-400 border border-blue-500/30 uppercase tracking-tighter">
                    {ai?.useCase || "AI Asset"}
                </div>
            </div>

            {/* 2. Content Section */}
            <div className="flex flex-col flex-grow px-7 pb-7">
                
                <div className="flex items-start justify-between gap-2 mb-3">
                   <h2 className="text-xl font-bold text-[var(--text-strong)] group-hover:text-blue-400 transition-colors line-clamp-1">
                        {ai?.name || "Untitled Model"}
                    </h2>
                    <span className="shrink-0 flex items-center gap-1 text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md border border-blue-500/20 font-mono">
                        <Cpu size={12} /> {ai?.framework || "Custom"}
                    </span>
                </div>

              <p className="text-soft text-sm leading-relaxed line-clamp-2 mb-5">
                    {ai?.description || "No description available for this AI model."}
                </p>

                {/* 3. Meta Info - FIXED SECTION */}
                <div className="mt-auto space-y-3 pt-5 border-t border-[var(--card-border)]">
                    <div className="flex items-center justify-between text-[12px]">
                          <div className="flex items-center gap-2 text-soft">
                            <Database size={14} className="text-blue-500" />
                            <span>Dataset:</span>
                        </div>
                         <span className="text-[var(--text-strong)] font-medium truncate max-w-[120px]">{ai?.dataset || "Private"}</span>
                    </div>

                    <div className="flex items-center justify-between text-[12px]">
                         <div className="flex items-center gap-2 text-soft">
                            <User size={14} className="text-blue-500" />
                            <span>Author:</span>
                        </div>
                        {/* SAFE SPLIT: Checks if createdBy exists before splitting */}
                        <span className="text-[var(--text-strong)] truncate max-w-[120px]">
                            {ai?.createdBy ? ai.createdBy.split('@')[0] : "Unknown"}
                        </span>
                    </div>

                    <div className="flex items-center justify-between text-[12px]">
                        <div className="flex items-center gap-2 text-soft">
                            <ShoppingCart size={14} className="text-emerald-500" />
                            <span>Sales:</span>
                        </div>
                        <span className="text-emerald-400 font-bold">{ai?.purchased || 0}</span>
                    </div>
                </div>

                {/* 4. Action Button */}
                {location.includes("purchase-assets") ? (
                    <NavLink
                        onClick={() => getModelById(ai?._id)}
                        to={`/details/${ai?._id}`}
                        className="mt-6"
                    >
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-900/20">
                        Purchase
                        <ExternalLink size={16} />
                    </button>
                </NavLink>) : ( <NavLink
                    onClick={() => getModelById(ai?._id)}
                    to={`/details/${ai?._id}`}
                    className="mt-6"
                >
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-900/20">
                        View Details
                        <ExternalLink size={16} />
                    </button>
                </NavLink>)
                }
               
            </div>
        </div>
    );
};

export default Cards;