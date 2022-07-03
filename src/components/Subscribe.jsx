import React from 'react';

const Subscribe = () => {
  return (
    <section className="w-full bg-black px-4 py-16 text-white text-center">
      <h1>Join Our DeFi Community</h1>
      <div className="py-4">
        <input
          placeholder="Your best email"
          className="p-3 rounded-3xl mr-4 text-gray-700"
          type="email"
          name="email"
          id="email"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input className="mr-2" type="checkbox" name="agree" id="agree" />
        <label htmlFor="agree">
          Yes, I agree to receive email communication from DeFi
        </label>
      </div>
    </section>
  );
};

export default Subscribe;
