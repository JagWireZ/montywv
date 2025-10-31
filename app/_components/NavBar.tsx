import React from "react";
import SearchInput from "./SearchInput";
import ThemeToggle from "./ThemeToggle";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  logo?: React.ReactNode; // text or JSX
  links?: NavLink[];
  avatarSrc?: string; // optional right-side icon/avatar
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({
  logo = "MyLogo",
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
        <a className="btn btn-ghost text-xl">{logo}</a>
      </div>
      <div className="navbar-end">
        <SearchInput />
        <button className="btn btn-secondary btn-circle ml-1 mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
        </button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
