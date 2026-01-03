import React, { useContext, useState } from 'react';
import { 
  LayoutDashboard, Wallet, PieChart, Activity, 
  Search, Menu, X, Globe, Zap, ArrowUpRight, Cpu, LogOut, User as UserIcon
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'; // Changed to react-router-dom for consistency
import { AunthContext } from '../../Auth/AuthProvider';

const SidebarItem = ({ icon: Icon, label, active = false, badge, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center justify-between px-4 py-3 cursor-pointer rounded-xl transition-all ${
      active ? 'bg-blue-600/10 text-blue-500 border border-blue-500/20' : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
    }`}
  >
    <div className="flex items-center gap-3">
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </div>
    {badge && <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-md">{badge}</span>}
  </div>
);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for avatar dropdown
  const { user, handleSignOut } = useContext(AunthContext);

   const navigate = useNavigate();

   function signOut() {
    handleSignOut()
      .then(() => {
        navigate('/');
      })
      .catch(() => alert("fail"));
  }

  return (
    <div className="flex min-h-screen bg-[#05070a] text-gray-300 overflow-x-hidden">
      
      {/* --- Mobile Sidebar Overlay --- */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* --- Sidebar (Responsive) --- */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-[70] w-64 bg-[#05070a] border-r border-white/5 p-6 flex flex-col gap-8 transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between lg:justify-start gap-2 px-2">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co.com/5Wb4wrmG/AI-Inventory-Management-Logo-Design-1.png" 
              className="w-10 h-10 rounded-lg shadow-lg group-hover:rotate-6 transition-transform" 
              alt="Logo" 
            />
            <div className="flex flex-col">
              <span className="font-bold text-blue-400 leading-none text-sm uppercase tracking-tighter">AI Inventory</span>
              <span className="text-[10px] font-medium opacity-60">Management System</span>
            </div>
          </NavLink>
          <button className="lg:hidden text-gray-400" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-2 flex-grow">
          <NavLink to="/dashboard" end>
            {({ isActive }) => <SidebarItem icon={LayoutDashboard} label="Dashboard" active={isActive} onClick={() => setIsSidebarOpen(false)} />}
          </NavLink>
          <NavLink to="/dashboard/purchase-assets">
             {({ isActive }) => <SidebarItem icon={Wallet} label="Purchase Assets" active={isActive} onClick={() => setIsSidebarOpen(false)} />}
          </NavLink>
          <NavLink to="/dashboard/my-purchase">
             <SidebarItem icon={Globe} label="My Purchase" onClick={() => setIsSidebarOpen(false)} />
          </NavLink>
         
        </nav>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-grow flex flex-col min-w-0">
        
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-[#05070a]/80 backdrop-blur-md border-b border-white/5 p-4 lg:px-8 lg:py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-400" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="hidden md:flex gap-6 items-center text-sm font-medium">
              <span className="text-white border-b-2 border-blue-500 pb-1 cursor-pointer">Overview</span>
              <span className="hover:text-white cursor-pointer transition-colors">Analytics</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
              <input 
                type="text" 
                placeholder="Search assets..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-blue-500/50 w-40 lg:w-60"
              />
            </div>

            {/* --- USER AVATAR SECTION --- */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1 pr-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-500/50 shadow-lg shadow-blue-500/10">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <UserIcon size={16} className="text-gray-400" />
                    </div>
                  )}
                </div>
                <span className="hidden sm:block text-xs font-bold text-white max-w-[80px] truncate">
                  {user?.displayName || "Member"}
                </span>
              </button>

              {/* Profile Dropdown */}
   {isProfileOpen && (
  <>
    {/* Click-away overlay */}
    <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
    
    <div className="absolute right-0 mt-3 w-48 bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl z-20 py-2 overflow-hidden animate-in fade-in zoom-in duration-200">
      {/* User Info Header */}
      <div className="px-4 py-3 border-b border-white/5 mb-2">
          <p className="text-xs text-gray-500">Signed in as</p>
          <p className="text-sm font-bold text-white truncate">{user?.email}</p>
      </div>

      {/* NEW: Navigate to Dashboard Row */}
      <button 
        onClick={() => {
          navigate("/dashboard");
          setIsProfileOpen(false);
        }}
        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
      >
          <LayoutDashboard size={16} className="text-blue-500" /> Dashboard Home
      </button>

      {/* Profile Settings Row */}
     <NavLink to="/dashboard/profile">
         <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
          <UserIcon size={16} /> Profile Settings
      </button>
     </NavLink>

      {/* Sign Out Row */}
      <button 
        onClick={() => {
          handleSignOut();
          setIsProfileOpen(false);
        }}
        className="w-full flex items-center gap-3 px-4 py-2 mt-1 text-sm text-red-400 hover:bg-red-500/10 transition-colors border-t border-white/5"
      >
          <LogOut size={16} /> Sign Out
      </button>
    </div>
  </>
)}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-grow">
            <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;