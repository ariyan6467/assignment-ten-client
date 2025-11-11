
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AunthContext } from "../Auth/AuthProvider";

export default function Navbar() {
  const { user, handleSignOut } = useContext(AunthContext);
  const [open, setOpen] = React.useState(false);
 console.log(user);
  function signOut() {
    handleSignOut()
      .then(() => alert("successfull"))
      .catch(() => alert("fail"));
  }

  const links = [
    { href: "/add-model", label: "add model" },
    { href: "/models", label: "view model" },
    { href: "/purchase", label: "my purchase" },
     { href: "/mymodals", label: "My Modals" },
  ];

  const LinkItems = (
    <>
      {links.map((l) => (
        <li key={l.href}>
          <NavLink
            to={l.href}
            className="relative px-3 py-2 font-medium rounded-btn brand-underline"
          >
            <span className="text-soft hover:text-white transition-colors">{l.label}</span>
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50">
      <div className="h-[2px] w-full bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-accent)] to-[var(--brand-secondary)]" />
      <div className="navbar glass border-b border-[var(--border)]">
        {/* Left: Logo */}
        <div className="navbar-start">
          <NavLink
            to="/"
            className="btn btn-ghost text-xl font-extrabold tracking-tight hover:scale-[1.02] transition-transform"
            aria-label="AI Generator home"
          >
            <span className="inline-flex items-center gap-2">
              <span className="badge chip badge-lg shadow-sm" aria-hidden>
                AI
              </span>
              <span className="brand-gradient">generator</span>
            </span>
          </NavLink>
        </div>

        {/* Middle */}
        <nav className="navbar-center hidden lg:flex" aria-label="Primary">
          <ul className="menu menu-horizontal gap-1 px-1">{LinkItems}</ul>
        </nav>

        {/* Right */}
        <div className="navbar-end gap-2">
          {/* Soft action */}
          <button className="btn btn-soft rounded-full" aria-label="Toggle theme">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M21.64 13a1 1 0 0 0-1.05-.14A8 8 0 0 1 11.1 3.41a1 1 0 0 0-1.25-1.24A10 10 0 1 0 22 14a1 1 0 0 0-.36-1Z"/>
            </svg>
          </button>

          {/* Auth */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar" aria-label="Open profile menu">
                <div className="w-10 rounded-full ring ring-[var(--border)]">
                  <img alt="User avatar" src={user.photoURL}/>
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content glass rounded-box w-64">
                <li className="menu-title text-soft">Signed in</li>
                <li className="px-3 pb-1 text-sm">{user.displayName}</li>
                <li className="px-3 pb-1 text-xs text-soft">{user.email}</li>
                <li><div className="divider my-1"/></li>
                <li>
                  <NavLink to="/purchase" className="justify-between">
                    Purchase Page<span className="badge chip">Click</span>
                  </NavLink>
                </li>
                <li>
                  <button onClick={signOut} className="btn btn-soft mt-1">Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-brand rounded-full normal-case shadow-md hover:shadow-lg">
              Login
            </NavLink>
          )}

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              aria-label="Toggle menu"
              className={`btn btn-ghost btn-circle transition-transform ${open ? 'rotate-90' : ''}`}
              onClick={() => setOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3.75 5.25A.75.75 0 0 1 4.5 4.5h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 7.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-40 lg:hidden bg-black/40 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-[64px] z-50 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-3 rounded-2xl glass">
          <ul className="menu p-3">{LinkItems}</ul>
          <div className="px-3 pb-3">
            <NavLink to="/login" className="btn btn-brand w-full rounded-xl">Login</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
