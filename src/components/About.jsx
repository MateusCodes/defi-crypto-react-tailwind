import React from 'react';
import AboutData from '../data/AboutData';
import AboutItem from './AboutItem';

const About = () => {
  return (
    <section id="about" className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div>
          <h1 className="py-4">A Growing Protocol Ecosystem</h1>
          <p className="py-4 text-xl">
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {AboutData.map(item => {
              return (
                <AboutItem
                  key={item.head}
                  icon={item.icon}
                  head={item.head}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
