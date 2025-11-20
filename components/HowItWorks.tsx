
import React from 'react';

const Step: React.FC<{ number: number; title: string; description: string; icon: React.ReactNode }> = ({ number, title, description, icon }) => (
    <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center w-24 h-24 bg-gray-800 border-2 border-brand-accent rounded-full text-brand-accent-light mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{number}. {title}</h3>
        <p className="text-gray-400 text-center max-w-xs">{description}</p>
    </div>
);

const Arrow: React.FC = () => (
    <div className="hidden lg:flex items-center justify-center flex-grow">
        <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
    </div>
);

const HowItWorks: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Unlock Your Cognitive Potential in 3 Simple Steps</h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-8">
                    <Step 
                        number={1} 
                        title="Choose Your Plan" 
                        description="Select the monthly subscription that best fits your cognitive health goals."
                        icon={<svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 7H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>}
                    />
                    <Arrow />
                    <Step 
                        number={2} 
                        title="Delivered Monthly" 
                        description="Receive your 30-day supply automatically. Consistency is key for optimal results."
                        icon={<svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm13.5-8.5l1.96 2.5H17V9.5h3.5zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>}
                    />
                    <Arrow />
                    <Step 
                        number={3} 
                        title="Feel the Difference" 
                        description="Experience enhanced focus, clarity, and mental resilience in your daily life."
                        icon={<svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>}
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
