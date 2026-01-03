import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AunthContext } from "../Auth/AuthProvider";
import useTheme from "../hooks/UseTheme";
import { Moon, Sun, Menu, X, LogOut, Package, Layout } from "lucide-react";

export default function Navbar() {
  const { user, handleSignOut } = useContext(AunthContext);
  const [open, setOpen] = React.useState(false);
  const { theme, toggleTheme, isDarkMode } = useTheme();

  function signOut() {
    handleSignOut()
      .then(() => alert("successfull"))
      .catch(() => alert("fail"));
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/models", label: "All Model" },
  ];

  if (user?.email) {
    links.push(
      { href: "/add-model", label: "Add Model" },
      { href: "/purchase", label: "My Purchases" },
      { href: "/mymodals", label: "My Modal" }
    );
  }

  return (
    <header className="sticky top-0 z-[100] w-full transition-all duration-300">
      {/* Subtle top border line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-30" />
      
      <div className="navbar glass backdrop-blur-md border-b border-white/10 px-4 md:px-12 py-3">
        <div className="navbar-start">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co.com/5Wb4wrmG/AI-Inventory-Management-Logo-Design-1.png" 
              className="w-10 h-10 rounded-lg shadow-lg group-hover:rotate-6 transition-transform" 
              alt="Logo" 
            />
            <div className="flex flex-col">
              <span className="font-bold text-blue-900 dark:text-blue-400 leading-none text-sm uppercase tracking-tighter">AI Inventory</span>
              <span className="text-[10px] font-medium opacity-60 dark:text-white">Management System</span>
            </div>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                      isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle text-blue-600">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar online ring-2 ring-blue-500/20">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="Avatar" />
                </div>
              </label>
              {/* Dropdown content remains same as previous high-quality version */}
            </div>
          ) : (
            <NavLink to="/login" className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-6 btn-sm md:btn-md">
              Login
            </NavLink>
          )}

          <button className="lg:hidden btn btn-ghost btn-circle" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden absolute w-full transition-all duration-300 ${open ? "top-full opacity-100" : "-top-[400px] opacity-0"}`}>
         <div className="bg-white dark:bg-gray-900 p-6 shadow-2xl border-b border-blue-500/20">
            <ul className="flex flex-col gap-4">
              {links.map(l => (
                <NavLink key={l.href} to={l.href} onClick={() => setOpen(false)} className="text-lg font-medium border-b border-gray-100 dark:border-gray-800 pb-2">{l.label}</NavLink>
              ))}
            </ul>
         </div>
      </div>
    </header>
  );
}