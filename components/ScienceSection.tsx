
import React from 'react';
import { MUSHROOMS } from '../constants';
import { Mushroom } from '../types';

const MushroomCard: React.FC<{mushroom: Mushroom}> = ({ mushroom }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center transition-all duration-300 hover:border-brand-accent-light hover:bg-gray-700/50 hover:-translate-y-2">
    <div className="mb-4">{mushroom.icon}</div>
    <h3 className="text-xl font-bold text-white">{mushroom.name}</h3>
    <p className="text-sm font-semibold text-brand-accent-light mb-2">{mushroom.scientificName}</p>
    <p className="text-gray-400 text-sm">{mushroom.description}</p>
  </div>
);

const ScienceSection: React.FC = () => {
  return (
    <section id="science" className="py-20 bg-brand-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Science of Cognitive Enhancement</h2>
          <p className="text-gray-400 mt-4">
            Our formulas are built on a foundation of rigorous scientific research. We use potent, functional mushrooms clinically studied for their neuroprotective and cognitive-boosting properties.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MUSHROOMS.map((mushroom) => (
            <MushroomCard key={mushroom.name} mushroom={mushroom} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
