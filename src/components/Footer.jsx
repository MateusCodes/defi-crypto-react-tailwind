import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 text-center">
      <div className="max-w-[1240px] mx-auto px-4 grid sm:grid-cols-2">
        <div>
          <h3 className="m-3 font-bold text-xl border-b-2 border-[#00d8ff] inline-block">
            Products
          </h3>
          <ul>
            <li>
              <a className="hover:text-[#00d8ff] transition-colors" href="#">
                Exchange
              </a>
            </li>
            <li>
              <a className="hover:text-[#00d8ff] transition-colors" href="#">
                Academy
              </a>
            </li>
            <li>
              <a className="hover:text-[#00d8ff] transition-colors" href="#">
                DeFi Live
              </a>
            </li>
            <li>
              <a className="hover:text-[#00d8ff] transition-colors" href="#">
                Charity
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="m-3 font-bold text-xl border-b-2 border-[#00d8ff] inline-block">
            Services
          </h3>
          <ul>
            <li>
              <a className="hover:text-[#00d8ff] transition-colors" href="#">
                Downloads
              </a>
            </li>
            <li>
              <a className="hover:text-[#00d8ff] transition-colors" href="#">
                Desktop Application
              </a>
            </li>
            <li>
              <a className="hover:text-[#00d8ff] transition-colors" href="#">
                Buy Crypto
              </a>
            </li>
            <li>
              <a className="hover:text-[#00d8ff] transition-colors" href="#">
                Institutional & VIP Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
