import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal bg-gray-700 text-neutral-content p-10 ">
  <aside>
   
      <div 
            className="btn btn-success text-xl font-extrabold tracking-tight hover:scale-[1.02] transition-transform bg-gray-700 border-none"
            aria-label="AI Generator home">
              <span className="inline-flex items-center gap-2">
              <span className="badge chip badge-lg shadow-sm" aria-hidden>
                AI
              </span>
              <span className="brand-gradient">generator</span>
            </span>

      </div>
            
        
   
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
    
   
      <a href="https://github.com/ariyan6467" target="_blank">   <FaGithub /></a>
    
    
    </div>
  </nav>
</footer>
    );
};

export default Footer;
