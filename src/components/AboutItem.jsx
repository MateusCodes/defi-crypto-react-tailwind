import React from 'react';

const AboutItem = ({ icon, head, description }) => {
  return (
    <div className='text-left flex flex-col border rounded-2xl py-12 px-8'>
      <div className='bg-[#00d8ff] inline-flex items-center justify-center p-2 rounded-full'>
        {icon}
      </div>
      <h3 className='text-xl font-bold py-4'>{head}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AboutItem;
