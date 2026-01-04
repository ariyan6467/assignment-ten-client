import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Changed to react-router-dom for standard consistency

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden surface-panel text-soft">
      {/* Decorative Top Border Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
      
      {/* Background Subtle Glow */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-600/10 blur-[120px] -z-0 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-6">
            <NavLink
              to="/"
              className="flex items-center gap-3 group transition-all"
              aria-label="AI Generator home"
            >
             <img 
              src="https://i.ibb.co.com/5Wb4wrmG/AI-Inventory-Management-Logo-Design-1.png" 
              className="w-10 h-10 rounded-lg shadow-lg group-hover:rotate-6 transition-transform" 
              alt="Logo" 
            />
               <span className="text-2xl font-bold text-[var(--text-strong)] tracking-tight">
                Inventory <span className="text-blue-500 font-light">Manager</span>
              </span>
            </NavLink>
            
           <p className="max-w-sm text-sm leading-relaxed text-soft">
              The premier platform for intelligent model management. 
              Streamlining workflows with curated AI assets, high-performance datasets, and enterprise-grade tooling.
            </p>

            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest text-emerald-500 bg-emerald-500/5 w-fit px-4 py-2 rounded-full border border-emerald-500/10">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Operational: All Systems Live
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
             <h6 className="text-[var(--text-strong)] text-sm font-bold uppercase tracking-wider">Platform</h6>
              <nav className="flex flex-col gap-3 text-sm">
                <NavLink to="/models" className="hover:text-blue-400 transition-colors">All Models</NavLink>
                <NavLink to="/add-model" className="hover:text-blue-400 transition-colors">Add Model</NavLink>
                <NavLink to="/purchase" className="hover:text-blue-400 transition-colors">My Purchases</NavLink>
                <NavLink to="/mymodals" className="hover:text-blue-400 transition-colors">My Modal</NavLink>
              </nav>
            </div>
            
            <div className="space-y-4">
              <h6 className="text-[var(--text-strong)] text-sm font-bold uppercase tracking-wider">Support</h6>
              <nav className="flex flex-col gap-3 text-sm">
                <a href="mailto:support@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FaEnvelope className="text-blue-500" /> Support
                </a>
                <span className="cursor-pointer hover:text-white transition-colors">Documentation</span>
                <span className="cursor-pointer hover:text-white transition-colors">Community</span>
                <span className="cursor-pointer hover:text-white transition-colors flex items-center gap-2">
                   <FaGlobe className="text-blue-500" /> API Status
                </span>
              </nav>
            </div>
          </div>

          {/* Newsletter/Connect Section */}
          <div className="md:col-span-3 space-y-6">
              <h6 className="text-[var(--text-strong)] text-sm font-bold uppercase tracking-wider">Connect with us</h6>
            <div className="flex gap-4">
              <a href="https://github.com/ariyan6467" target="_blank" rel="noreferrer" 
                 className="p-3 bg-white/5 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 border border-white/5">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" 
                 className="p-3 bg-white/5 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 border border-white/5">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" 
                 className="p-3 bg-white/5 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 border border-white/5">
                <FaTwitter size={20} />
              </a>
            </div>

            <div className="group rounded-2xl border border-[var(--card-border)] bg-[color-mix(in_srgb,var(--card-bg)_96%,transparent)] p-5 transition-all hover:bg-[color-mix(in_srgb,var(--card-bg)_98%,transparent)]">
              <p className="text-sm font-bold text-[var(--text-strong)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Latest Release
              </p>
               <p className="mt-2 text-xs text-soft leading-normal">
                Version 2.4.0 is now live. Explore our new real-time inference monitoring tools.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-6 text-soft">
          <p className="text-[11px] font-medium">
            © {new Date().getFullYear()} AI INVENTORY MANAGEMENT. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
            <span className="cursor-pointer hover:text-blue-500 transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-blue-500 transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-blue-500 transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;