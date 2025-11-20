
import React, { useState } from 'react';

const BrainIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.25 2 7 4.25 7 7C7 8.82 8.05 10.4 9.58 11.22C9.55 11.33 9.53 11.45 9.53 11.57C9.53 12.09 9.74 12.57 10.08 12.93C8.39 13.5 7.25 14.73 7.03 16.21C6.44 16.09 5.89 16.03 5.33 16.03C3.51 16.03 2 17.54 2 19.36C2 20.84 3.03 22.04 4.41 22.37C5.39 23.33 6.84 24 8.5 24C10.65 24 12.53 22.68 13.42 20.88C13.68 21.91 14.71 22.71 15.93 22.71C17.5 22.71 18.78 21.5 18.97 20C19.78 20.07 20.57 20.04 21.32 19.91C22.75 19.66 23.86 18.44 23.98 16.97C24.03 16.3 23.82 15.66 23.42 15.14C23.06 14.67 22.56 14.33 21.97 14.21C21.94 13.53 21.72 12.89 21.36 12.35C20.83 11.53 19.92 11 18.88 11C18.15 11 17.49 11.27 16.97 11.72C16.41 10.73 15.33 10 14.1 10C13.03 10 12.08 10.45 11.4 11.19C11.85 10.15 12 9.01 12 7.82C12 7.42 11.96 7.02 11.89 6.63C12.93 6.03 14.12 6.03 15.26 6.69C16.2 7.25 17 8.26 17 9.41C17 10.42 16.47 11.31 15.65 11.82C15.86 12.56 16.53 13.13 17.33 13.26C17.63 13.32 17.94 13.34 18.25 13.34C18.98 13.34 19.65 13.06 20.15 12.6C20.43 13.23 20.53 13.9 20.43 14.58C20.91 14.69 21.31 15.03 21.52 15.5C21.84 16.25 21.55 17.15 20.83 17.56C20.14 17.95 19.29 17.84 18.71 17.29C18.42 18.44 17.29 19.37 16 19.37C14.71 19.37 13.63 18.47 13.35 17.25C12.33 17.86 11.08 18.23 9.75 18.23C9.06 18.23 8.39 18.12 7.77 17.92C7.94 17.29 8.27 16.73 8.75 16.32C9.53 15.69 10.13 14.86 10.45 13.94C10.79 13.52 11.27 13.21 11.81 13.09C12.61 12.92 13.38 13.25 13.82 13.93L13.96 14.15C14.41 14.83 15.24 15.13 16.04 14.88C16.84 14.64 17.31 13.84 17.07 13.04L16.93 12.58C16.47 11.13 14.88 10.23 13.43 10.7C12.7 10.93 12.08 11.41 11.66 12.04C10.86 11.1 10.24 9.94 10 8.65C9.28 9.84 9 11.23 9 12.67C9 12.83 9.01 13 9.03 13.16C8.5 13.03 8 12.74 7.64 12.31C7.24 11.83 7 11.17 7 10.44C7 9.42 7.53 8.53 8.35 8.02C8.14 7.28 8.47 6.44 9.22 6.12C9.97 5.8 10.81 6.14 11.12 6.89C10.82 5.33 10.29 3.9 9.11 3.11C8.28 2.55 7.28 2.8 6.53 3.53C5.78 4.28 5.53 5.28 5.95 6.11C6.03 6.27 6.07 6.44 6.07 6.62C6.07 7.37 5.48 7.97 4.72 7.97C4.44 7.97 4.17 7.88 3.95 7.72C3.12 7.12 2.8 6.04 3.23 5.15C3.67 4.26 4.67 3.71 5.63 3.97C6.61 4.24 7.31 5.13 7.31 6.13C7.31 6.23 7.3 6.32 7.28 6.42C7.94 5.33 9.04 4.54 10.32 4.19C11.91 3.75 13.62 4.06 15.06 5.03C15.82 4.03 16.94 3.39 18.22 3.39C19.93 3.39 21.36 4.63 21.68 6.25C21.75 6.62 22.09 6.89 22.47 6.89C22.61 6.89 22.75 6.86 22.88 6.8C23.57 6.5 24 5.79 24 5C24 3.34 22.66 2 21 2H12Z" /></svg>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#science', text: 'The Science' },
        { href: '#plans', text: 'Subscription Plans' },
        { href: '#why-us', text: 'Why Us' },
        { href: '#social-proof', text: 'Reviews' },
        { href: '#faq', text: 'FAQ' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-brand-deep-blue/80 backdrop-blur-lg shadow-lg shadow-black/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center space-x-2">
                            <BrainIcon className="h-8 w-8 text-brand-accent" />
                            <span className="text-2xl font-bold text-white">LionMaind</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    {link.text}
                                </a>
                            ))}
                            <a href="#plans" className="bg-brand-accent hover:bg-brand-accent-light text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:scale-105">
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                {link.text}
                            </a>
                        ))}
                        <a href="#plans" className="bg-brand-accent hover:bg-brand-accent-light text-white font-bold block w-full text-center py-2 px-4 mt-2 rounded-full transition-all duration-300 ease-in-out hover:scale-105">
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
