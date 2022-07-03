import React from 'react';
import { MdClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff]">DeFi</h1>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex text-white items-center">
            <li className="hover:text-[#00d8ff] transition-colors">
              <a href="#platform">Platform</a>
            </li>
            <li className="hover:text-[#00d8ff] transition-colors">
              <a href="#community">Community</a>
            </li>
            <li className="hover:text-[#00d8ff] transition-colors">
              <a href="#about">About</a>
            </li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>

        {/* Hamburger Buttons */}
        <div onClick={handleNav} className="block transition-all sm:hidden">
          {nav ? (
            <MdClose size={35} className="text-white cursor-pointer" />
          ) : (
            <GiHamburgerMenu size={35} className="text-white cursor-pointer" />
          )}
        </div>

        {/* MobileMenu */}
        <div
          onClick={handleNav}
          className={
            nav
              ? 'w-full h-[60%] bg-black text-white absolute top-[90px] left-0 flex justify-center text-center transition-all duration-300 z-100 sm:hidden'
              : 'absolute top-[90px] left-[-200px]'
          }
        >
          <ul className="z-100">
            <li className="text-2xl">
              <a
                className="hover:text-[#00d8ff] transition-colors"
                href="#platform"
              >
                Platform
              </a>
            </li>
            <li className="text-2xl">
              <a
                className="hover:text-[#00d8ff] transition-colors"
                href="#community"
              >
                Community
              </a>
            </li>
            <li className="text-2xl">
              <a
                className="hover:text-[#00d8ff] transition-colors"
                href="#about"
              >
                About
              </a>
            </li>
            <button className="m-8 px-15">Use Defi</button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
