import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional
            <span className="text-yellow-300"> Adhesive </span>
            Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            From hair spa essentials to industrial tapes, we provide premium adhesive products
            for professionals and enthusiasts alike. Quality you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
            <button className='text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-lg'>
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-blue-100">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
            <div className="text-blue-100">Product Varieties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-300/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/5 rounded-full animate-spin"></div>
    </section>
  );
};

export default Hero; 