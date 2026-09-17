const Navbar = () => {
  return (
    <div className="navbar bg-[#05101ee2] shadow-sm text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <a className="text-xl gap-0 font-bold">
          Movie<span className="text-orange-500">Explorer</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-orange-500 text-white border-0 shadow-none">All Movies</a>
      </div>
    </div>
  );
};

export default Navbar;
