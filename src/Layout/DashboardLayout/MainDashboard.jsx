import React, { useEffect, useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';
import { LayoutDashboard, TrendingUp, Cpu, PieChart as PieIcon, Activity } from 'lucide-react';

const MainDashboard = () => {
    const [data, setData] = useState([]);
    const [isloading, setloading] = useState(false);

    // EXACT same functionality as your original code
    useEffect(() => {
        setloading(true);
        fetch("https://ai-inventing-manager-server.vercel.app/allmodals")
            .then((res) => res.json())
            .then((resData) => {
                setData(resData);
                setloading(false);
            });
    }, []);

    // 1. Process Data for Pie Chart (Framework distribution)
    const frameworkData = data.reduce((acc, curr) => {
        const found = acc.find(item => item.name === curr.framework);
        if (found) found.value++;
        else acc.push({ name: curr.framework || "Other", value: 1 });
        return acc;
    }, []);

    // 2. Process Data for Bar Chart (Purchases per Model)
    // We take top 6 for a clean UI
    const purchaseData = [...data]
        .sort((a, b) => b.purchased - a.purchased)
        .slice(0, 6);

    // 3. Process Data for Line Chart (Growth over time)
    const timelineData = [...data]
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .map(item => ({
            date: new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            purchased: item.purchased,
            name: item.name
        }));

    const COLORS = ['#3b82f6', '#818cf8', '#6366f1', '#4f46e5', '#1d4ed8'];

    return (
        <div className="min-h-screen bg-[#05070a] p-6 lg:p-10 text-gray-300">
            
            {/* Header section */}
            <div className="mb-10">
                <div className="flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest mb-2">
                    <Activity size={16} />
                    Live System Analytics
                </div>
                <h1 className="text-3xl font-black text-white tracking-tight">Enterprise <span className="text-blue-600">Overview</span></h1>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                
                {/* 1. Bar Chart Card - Model Popularity */}
                <div className="bg-[#0d1117] border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                <TrendingUp size={20} className="text-blue-500" /> Model Popularity
                            </h3>
                            <p className="text-gray-500 text-sm">Most purchased AI assets</p>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={purchaseData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                <XAxis dataKey="name" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                                <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '12px' }}
                                    itemStyle={{ color: '#60a5fa' }}
                                />
                                <Bar dataKey="purchased" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 2. Line Chart Card - Acquisition Timeline */}
                <div className="bg-[#0d1117] border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                <LayoutDashboard size={20} className="text-indigo-500" /> Growth Trends
                            </h3>
                            <p className="text-gray-500 text-sm">Inventory acquisition over time</p>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={timelineData}>
                                <defs>
                                    <linearGradient id="colorPur" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="date" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '12px' }}
                                />
                                <Area type="monotone" dataKey="purchased" stroke="#6366f1" fillOpacity={1} fill="url(#colorPur)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 3. Pie Chart Card - Framework Diversity */}
                <div className="bg-[#0d1117] border border-white/5 rounded-[2.5rem] p-8 shadow-2xl xl:col-span-2">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-2">
                                <Cpu size={20} className="text-emerald-500" /> Framework Distribution
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">Diversity of technological frameworks in your system</p>
                            <div className="grid grid-cols-2 gap-4">
                                {frameworkData.map((entry, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                        <span className="text-xs font-bold text-gray-300">{entry.name}</span>
                                        <span className="ml-auto text-xs text-blue-400">{entry.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="h-[300px] w-full md:w-1/2">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={frameworkData}
                                        innerRadius={80}
                                        outerRadius={110}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {frameworkData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainDashboard;