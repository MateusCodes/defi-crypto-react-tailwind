import React from 'react';
import Terminal from '../assets/Terminal.png';

const Developers = () => {
  return (
    <section id="community" className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div className='flex justify-center items-center flex-col text-center'>
          <h1>Superpowers for DeFi developers.</h1>
          <p>
            Checkout the <span className="text-[#00d8ff]">documentation</span>,
            the <span className="text-[#00d8ff]">quick start</span> or a guide
            below to integrate your project with thousands of tokens and
            billions of liquidity
          </p>
        </div>
        <div className='flex justify-center w-full py-16'>
          <img className='max-w-[250px] shadow-lg shadow-cyan-500/50' src={Terminal} alt="/" />
        </div>
      </div>
    </section>
  );
};

export default Developers;
