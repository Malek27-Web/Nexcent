// NavBar Component, receives `isMenuOpen` (boolean) and `toggleMenu` (function) as props
interface NavBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

function NavBar({ isMenuOpen, toggleMenu }: NavBarProps) {
  // Component JSX code

  return (
    <nav className="flex w-full  md:flex-row md:items-center justify-around p-4 ">
      {/* Logo */}
      <div className="flex cursor-pointer gap-x-2">
        <img src="./Icon.png" alt="" />
        <p className="font-bold font-inter text-xl  text-[#4D4D4D] tracking-wide">
          Nexcent
        </p>
      </div>

      {/* Menu Items */}
      <div
        className={`md:flex ${
          isMenuOpen ? "flex flex-col mt-12" : "hidden"
        } items-center  absolute md:relative gap-y-6 text-[#4D4D4D] md:flex-row mt-4 md:mt-0 gap-[9rem]`}
      >
        <ul className="flex mt-9 w-full md:ml-12 md:-mr-9  md:mt-0 flex-col md:flex md:flex-row gap-y-4 items-center gap-x-9">
          <li className="cursor-pointer font-inter">Home</li>
          <li className="cursor-pointer font-inter">Service</li>
          <li className="cursor-pointer font-inter">Feature</li>
          <li className="cursor-pointer font-inter">Product</li>
          <li className="cursor-pointer font-inter">FAQ</li>
        </ul>
        <div className="flex  items-center gap-5">
          <p className="text-[#4CAF50] font-inter text-lg cursor-pointer">
            login
          </p>
          <button className=" px-2 font-semibold bg-[#4CAF50] text-white p-2 w-24  whitespace-nowrap rounded">
            Sign up
          </button>
        </div>
      </div>

      {/* Burger & Close Menu Icons (visible only on mobile) */}
      <div className="md:hidden ">
        {isMenuOpen ? (
          <svg
            onClick={toggleMenu}
            className="cursor-pointer"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
          </svg>
        ) : (
          <svg
            onClick={toggleMenu}
            className="cursor-pointer"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
          </svg>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
