import React from 'react';
import heroVideo from '../assets/video.mp4';

const Hero = () => {
  return (
    <section id="platform" className="w-full h-[90vh]">
      <video
        className=" -z-10 absolute object-cover h-full w-full"
        src={heroVideo}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex justify-center items-center flex-col text-white px-4">
        <h1>Decentralized</h1>
        <h1 className="py-2">
          <span className="text-[#00d8ff]">Trading</span> Protocol
        </h1>
        <p className="text-center text-xl py-4">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications
        </p>
        <div>
          <button className="m-2">Use Defi</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-3xl'>Total Volume Secured: $42,104,783,882.47</p>
      </div>
    </section>
  );
};

export default Hero;
