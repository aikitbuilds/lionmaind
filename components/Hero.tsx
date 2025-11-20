import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1632516421312-a1362b535871?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1628432319759-197ab6a15a4b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
        {/* Background Images Container */}
        <div className="absolute inset-0 z-0">
            {images.map((url, index) => (
              <div 
                key={url}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out" 
                style={{
                  backgroundImage: `url('${url}')`,
                  opacity: index === currentImageIndex ? 1 : 0,
                }}
              ></div>
            ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-blue to-black opacity-75 z-10"></div>
        
        {/* Decorative Blobs */}
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full filter blur-3xl animate-pulse z-10"></div>
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Your Mind's Ally in the <span className="text-brand-accent-light">AI Age</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Combat cognitive overload and unlock your peak mental performance with science-backed Lion's Mane mushroom.
          </p>
          <a
            href="#plans"
            className="inline-block bg-brand-accent hover:bg-brand-accent-light text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out hover:scale-105 shadow-lg shadow-brand-accent/20"
          >
            Explore Subscription Plans
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;