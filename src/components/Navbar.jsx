import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="navItems lg:flex items-center hidden">
        <ul className="flex gap-20 text-[var(--text-color)] text-xl">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>

      <nav className="lg:hidden flex items-center">
        <div onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✖" : "☰"}</div>
        {/* {isOpen && (
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
        )} */}
      </nav>
    </>
  );
};

export default Navbar;