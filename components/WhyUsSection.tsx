import React, { useState, useEffect, useRef } from 'react';
import { BENEFITS } from '../constants';
import { Benefit } from '../types';

const BenefitCard: React.FC<{ benefit: Benefit, index: number }> = ({ benefit, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const iconAnimation = `transition-all duration-500 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`;
  const textAnimation = `transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`;

  return (
    <div ref={cardRef} className="flex items-start space-x-4">
      <div className={`flex-shrink-0 ${iconAnimation}`} style={{ transitionDelay: `${index * 100}ms` }}>
          {benefit.icon}
      </div>
      <div className={`${textAnimation}`} style={{ transitionDelay: `${index * 100 + 150}ms` }}>
        <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
        <p className="mt-1 text-gray-400">{benefit.description}</p>
      </div>
    </div>
  );
};

const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-brand-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose LionMaind?</h2>
          <p className="text-gray-400 mt-4">
            We're more than just a supplement company. We're your partner in navigating the cognitive challenges of a rapidly evolving world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;