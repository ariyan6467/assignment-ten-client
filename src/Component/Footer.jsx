import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
    return (
    <footer className="mt-16 border-0 py-5 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0b1021] text-white ">
      <div className="section-shell py-12 grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <NavLink
            to="/"
            className="inline-flex items-center gap-3 text-2xl font-extrabold tracking-tight"
            aria-label="AI Generator home"
          >
            <span className="badge chip badge-lg shadow-sm" aria-hidden>
              AI




            </span>

            <span className="brand-gradient">generator</span>
          </NavLink>
          <p className="text-soft leading-relaxed">
            Building delightful AI experiences with curated models, transparent datasets, and premium tooling.
          </p>
          <div className="flex items-center gap-3 text-xs text-soft">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Always-on status and uptime monitoring
          </div>
        </div>

         <div className="grid grid-cols-2 gap-6 text-soft">
          <div className="space-y-3">
            <h6 className="text-white text-sm font-semibold">Navigate</h6>
            <div className="flex flex-col gap-2 text-sm">
              <NavLink to="/models" className="hover:text-white">All Models</NavLink>
              <NavLink to="/add-model" className="hover:text-white">Add Model</NavLink>
              <NavLink to="/purchase" className="hover:text-white">My Purchases</NavLink>
              <NavLink to="/mymodals" className="hover:text-white">My Modal</NavLink>
            </div>
          </div>
          <div className="space-y-3">
            <h6 className="text-white text-sm font-semibold">Support</h6>
            <div className="flex flex-col gap-2 text-sm">
              <a className="hover:text-white" href="mailto:support@example.com">support@example.com</a>
              <span className="hover:text-white">Documentation</span>
              <span className="hover:text-white">Community</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h6 className="text-white text-sm font-semibold">Connect</h6>
          <div className="flex gap-3 text-2xl text-soft">
            <a href="https://github.com/ariyan6467" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-soft">
            <p className="font-semibold text-white">Stay in the loop</p>
            <p className="mt-1">Design updates, release notes and inspiring AI stories.</p>
          </div>
        </div>
      </div>

      <div className=" py-6  bg-black/20">
        <div className="section-shell py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-soft ">
          <p>© {new Date().getFullYear()} AI Generator. Crafted for modern model teams.</p>
          <div className="flex items-center gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Status</span>
          </div>
        </div>

      </div>
            
        
   
   </footer>
  );
};

export default Footer;
