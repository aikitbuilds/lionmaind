
import React from 'react';
import { PLANS } from '../constants';
import { Plan } from '../types';

const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const PlanCard: React.FC<{plan: Plan}> = ({ plan }) => {
  const cardClasses = `
    relative flex flex-col h-full bg-gray-800/60 rounded-xl p-8 border
    ${plan.isPopular ? 'border-brand-accent shadow-2xl shadow-brand-accent/20' : 'border-gray-700'}
    transform transition-transform duration-300 hover:scale-105
  `;

  return (
    <div className={cardClasses}>
      {plan.isPopular && (
        <div className="absolute top-0 right-0 -mt-4 mr-4">
          <span className="bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
        <p className="mt-4 text-gray-400">{plan.description}</p>
        <div className="mt-6">
          <span className="text-4xl font-extrabold text-white">{plan.price}</span>
          <span className="text-base font-medium text-gray-400">/month</span>
        </div>
        <p className="mt-2 text-sm text-brand-accent-light font-semibold">{plan.savings}</p>
        <ul className="mt-8 space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <CheckIcon />
              </div>
              <p className="ml-3 text-base text-gray-300">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <a href="#" className={`block w-full text-center rounded-lg px-6 py-3 text-base font-semibold
          ${plan.isPopular 
            ? 'bg-brand-accent text-white shadow-md hover:bg-brand-accent-light' 
            : 'bg-gray-700 text-white hover:bg-gray-600'}
          transition-colors duration-300
        `}>
          Choose Plan
        </a>
      </div>
    </div>
  );
};


const PricingSection: React.FC = () => {
  return (
    <section id="plans" className="py-20 bg-brand-deep-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Find Your Perfect Plan</h2>
          <p className="text-gray-400 mt-4">
            Commit to your cognitive health with a plan that fits your needs. All subscriptions come with free shipping and our satisfaction guarantee.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
