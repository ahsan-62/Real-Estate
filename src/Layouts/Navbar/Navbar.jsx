import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


    const navLinks=<>
    

    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/career'}>Career</NavLink></li>
    <li><NavLink to={'/about'}>About</NavLink></li>
    
    </>
    return (
        <div className="bg-blue-200 rounded-sm navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLinks}
      </ul>
    </div>
    <Link to={'/'} className="text-3xl font-bold">AHSAN RealEstate</Link>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
     
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/login'} className="btn btn-primary">Login</Link>
  </div>
</div>
    );
};

export default Navbar;