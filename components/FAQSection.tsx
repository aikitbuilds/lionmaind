
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { FAQItem } from '../types';

const FaqItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="pb-5 pr-4 text-gray-400">{item.answer}</div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItemComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
