import React, { useContext, useState } from 'react';
import { AunthContext } from '../../Auth/AuthProvider';
import { 
  User, Mail, Calendar, ShieldCheck, Edit3, 
  Camera, MapPin, Link as LinkIcon, Save, X 
} from 'lucide-react';

const Profile = () => {
    const { user } = useContext(AunthContext);
    const [isEditing, setIsEditing] = useState(false);

    // Format Firebase Metadata Dates
    const joinDate = user?.metadata?.creationTime 
        ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) 
        : "January 2026";

    const lastLogin = user?.metadata?.lastSignInTime 
        ? new Date(user.metadata.lastSignInTime).toLocaleString() 
        : "Recent";

    return (
        <div className="min-h-screen bg-[#05070a] text-gray-300 pb-20">
            {/* 1. Full-Width Cover Header */}
            <div className="relative h-64 w-full bg-gradient-to-r from-blue-900 via-indigo-950 to-[#05070a]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute -bottom-16 left-0 w-full px-6 lg:px-12 flex flex-col md:flex-row items-end gap-6">
                    {/* Avatar Container */}
                    <div className="relative group">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] border-4 border-[#05070a] overflow-hidden bg-gray-900 shadow-2xl">
                            <img 
                                src={user?.photoURL || "https://via.placeholder.com/150"} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="absolute bottom-2 right-2 p-2 bg-blue-600 rounded-xl text-white hover:bg-blue-500 transition-all shadow-lg opacity-0 group-hover:opacity-100">
                            <Camera size={18} />
                        </button>
                    </div>

                    {/* Name & Quick Info */}
                    <div className="flex-grow pb-4">
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
                            {user?.displayName || "Nahian Jawad Ariyan"}
                            {user?.emailVerified && <ShieldCheck className="text-blue-500" size={24} />}
                        </h1>
                        <p className="text-gray-400 font-medium flex items-center gap-2 mt-1">
                            <Mail size={14} /> {user?.email}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pb-4 flex gap-3">
                        {!isEditing ? (
                            <button 
                                onClick={() => setIsEditing(true)}
                                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-2.5 rounded-xl font-bold text-sm text-white transition-all"
                            >
                                <Edit3 size={16} /> Edit Profile
                            </button>
                        ) : (
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => setIsEditing(false)}
                                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2"
                                >
                                    <Save size={16} /> Save
                                </button>
                                <button 
                                    onClick={() => setIsEditing(false)}
                                    className="bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2.5 rounded-xl font-bold text-sm"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 2. Profile Details Grid */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column: Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-[#0d1117] border border-white/5 rounded-[2rem] p-6">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                            <User size={16} className="text-blue-500" /> Account Details
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-gray-500 text-sm">Member Since</span>
                                <span className="text-gray-200 text-sm font-medium">{joinDate}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-gray-500 text-sm">Provider</span>
                                <span className="text-blue-500 text-xs font-bold uppercase px-2 py-1 bg-blue-500/10 rounded">
                                    {user?.providerId || "Firebase"}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-gray-500 text-sm">Last Sign In</span>
                                <span className="text-gray-200 text-[11px] text-right">{lastLogin}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Editable Bio & Information */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-[#0d1117] border border-white/5 rounded-[2rem] p-8">
                        <h3 className="text-white font-bold mb-6 text-lg">Personal Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Full Name</label>
                                {isEditing ? (
                                    <input type="text" defaultValue={user?.displayName} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                                ) : (
                                    <div className="text-white font-medium bg-white/[0.02] px-4 py-3 rounded-xl border border-transparent italic">
                                        {user?.displayName}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Email Address</label>
                                <div className="text-gray-400 font-medium bg-white/[0.02] px-4 py-3 rounded-xl border border-white/5 flex items-center gap-2">
                                    <Mail size={14} /> {user?.email}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Location</label>
                                {isEditing ? (
                                    <input type="text" placeholder="e.g. Dhaka, Bangladesh" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                                ) : (
                                    <div className="text-white font-medium bg-white/[0.02] px-4 py-3 rounded-xl border border-transparent flex items-center gap-2">
                                        <MapPin size={14} className="text-gray-500" /> Not Set
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Website/Portfolio</label>
                                {isEditing ? (
                                    <input type="text" placeholder="https://..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                                ) : (
                                    <div className="text-white font-medium bg-white/[0.02] px-4 py-3 rounded-xl border border-transparent flex items-center gap-2">
                                        <LinkIcon size={14} className="text-gray-500" /> Add Link
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-8 space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Professional Bio</label>
                            {isEditing ? (
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Tell us about yourself..."></textarea>
                            ) : (
                                <p className="text-gray-400 text-sm leading-relaxed bg-white/[0.02] p-4 rounded-xl">
                                    This user hasn't added a bio yet. Click the edit button to add information about your professional background and interests in AI.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;