import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./NewBar.css";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  title?: React.ReactNode; // text or JSX
  subtitle?: React.ReactNode; // text or JSX
  links?: NavLink[];
  avatarSrc?: string; // optional right-side icon/avatar
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({
  title = "Monty",
  subtitle = "the Mountaineer",
  links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}) => {
  return (
    <div className="navbar bg-primary shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-5xl comforter-font p-0">{title}</a>
        <a className="btn btn-ghost text-5xl comforter-font pl-1 hidden md:flex">{subtitle}</a>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
