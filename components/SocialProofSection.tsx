import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS, FEATURED_LOGOS } from '../constants';
import { Testimonial } from '../types';

const QuoteIcon: React.FC = () => (
    <svg className="w-10 h-10 text-brand-accent/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="flex flex-col h-full bg-gray-800/60 p-6 rounded-xl border border-gray-700">
        <QuoteIcon />
        <p className="text-gray-300 my-4 flex-grow">"{testimonial.quote}"</p>
        <div>
            <p className="font-bold text-white">{testimonial.name}</p>
            <p className="text-sm text-brand-accent-light">{testimonial.title}</p>
        </div>
    </div>
);

const SocialProofSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const AUTOPLAY_DELAY = 5000; // 5 seconds

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (isPaused) {
            resetTimeout();
            return;
        }

        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
                ),
            AUTOPLAY_DELAY
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, isPaused, TESTIMONIALS.length]);

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
        );
    };

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section id="social-proof" className="py-20 bg-brand-dark/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Customers Are Saying</h2>
                    <p className="text-gray-400 mt-4">
                        Real stories from individuals who have experienced the cognitive benefits of LionMaind.
                    </p>
                </div>
                
                <div 
                    className="max-w-3xl mx-auto relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="overflow-hidden relative h-[350px] sm:h-[300px]">
                        <div
                            className="flex transition-transform duration-700 ease-in-out h-full"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4 h-full">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        onClick={prevTestimonial} 
                        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10 p-2 bg-gray-700/50 rounded-full hover:bg-gray-600 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>

                    <button 
                        onClick={nextTestimonial} 
                        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10 p-2 bg-gray-700/50 rounded-full hover:bg-gray-600 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>

                    <div className="flex justify-center mt-8 space-x-3">
                        {TESTIMONIALS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-accent' : 'bg-gray-600 hover:bg-gray-500'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-center text-lg font-semibold text-gray-500 uppercase tracking-wider mb-8">
                        As Featured In
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                        {FEATURED_LOGOS.map(logo => (
                            <span key={logo} className="text-xl font-medium text-gray-500 transition-colors hover:text-white">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
