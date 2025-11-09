import React from "react"
import { NavLink } from "react-router"

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  const links = [
    { href: "/add-model", label: "add model" },
    { href: "/models", label: "view model" },
    { href: "/purchase", label: "my purchase" },
  ]

  const LinkItems = (
    <>
      {links.map((l) => (
        <li key={l.href}>
          <NavLink
        to={l.href}
            className="relative px-3 py-2 font-medium rounded-btn group"
          >
            <span className="transition-colors group-hover:text-primary">{l.label}</span>
            {/* animated underline */}
            <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 origin-left scale-x-0 group-hover:scale-x-100 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full transition-transform duration-300" />
         </NavLink>
        </li>
      ))}
    </>
  )

  return (
    <header className="sticky top-0 z-50">
      {/* decorative gradient border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-accent to-secondary" />

      <div className="navbar bg-base-100/70 backdrop-blur supports-[backdrop-filter]:bg-base-100/50 border-b border-base-200">
        {/* Left: Logo */}
        <div className="navbar-start">
          <NavLink
            to="/"
            className="btn btn-ghost text-xl font-extrabold tracking-tight hover:scale-[1.02] transition-transform"
            aria-label="AI Generator home"
          >
            <span className="inline-flex items-center gap-2">
              <span className="badge badge-primary badge-lg shadow-sm shadow-primary/20" aria-hidden>
                AI
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">generator</span>
            </span>
          </NavLink>
        </div>

        {/* Middle: Nav Links */}
        <nav className="navbar-center hidden lg:flex" aria-label="Primary">
          <ul className="menu menu-horizontal gap-1 px-1">
            {LinkItems}
          </ul>
        </nav>

        {/* Right: Avatar Dropdown + Login + Mobile toggle */}
        <div className="navbar-end gap-2">
          {/* Theme toggle placeholder (optional) */}
          <button className="btn btn-ghost rounded-full" aria-label="Toggle theme">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M21.64 13a1 1 0 0 0-1.05-.14A8 8 0 0 1 11.1 3.41a1 1 0 0 0-1.25-1.24A10 10 0 1 0 22 14a1 1 0 0 0-.36-1Z"/>
            </svg>
          </button>

          {/* Avatar dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar" aria-label="Open profile menu">
              <div className="w-10 rounded-full ring ring-base-300">
                <img
                  alt="User avatar"
                  src="https://tse4.mm.bing.net/th/id/OIP.jOAHFRvlcbk9ibuLp5nRoAHaE7?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-56 border border-base-200"
            >
              <li className="menu-title">Signed in as</li>
              <li className="px-3 pb-1 text-sm opacity-70">user@example.com</li>
              <li><div className="divider my-1"/></li>
              <li><a className="justify-between" href="#profile">Profile<span className="badge">New</span></a></li>
              <li><a href="#settings">Settings</a></li>
              <li><a href="#logout">Logout</a></li>
            </ul>
          </div>

          {/* Login button */}
         <NavLink to="/login" className="btn btn-primary rounded-full normal-case shadow-md shadow-primary/20 hover:shadow-lg">
            LOgin
         </NavLink>

          {/* Mobile: Menu button */}
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

      {/* Backdrop for mobile drawer */}
      {open && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-40 lg:hidden bg-base-300/40 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-[64px] z-50 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-3 rounded-2xl border border-base-200 bg-base-100/95 shadow-2xl">
          <ul className="menu p-3">
            {LinkItems}
          </ul>
          <div className="px-3 pb-3">
            <a href="#login" className="btn btn-primary w-full rounded-xl">Login</a>
          </div>
        </div>
      </div>
    </header>
  )
}
