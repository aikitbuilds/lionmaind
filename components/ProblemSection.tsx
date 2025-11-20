
import React from 'react';

interface StatCardProps {
    value: string;
    label: string;
    source: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, source }) => (
    <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center transform transition-transform duration-300 hover:scale-105 hover:border-brand-accent">
        <p className="text-4xl md:text-5xl font-bold text-brand-accent-light">{value}</p>
        <p className="mt-2 text-gray-300">{label}</p>
        <p className="mt-1 text-xs text-gray-500">Source: {source}</p>
    </div>
);


const ProblemSection: React.FC = () => {
    return (
        <section className="py-20 bg-brand-deep-blue">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Mind Health Matters More Than Ever</h2>
                    <p className="text-gray-400 mb-12">
                        The rise of AI brings unprecedented mental demands and a growing dementia crisis looms. Proactive brain health is no longer a luxury—it's essential for thriving in the modern world.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <StatCard 
                        value="9.7%" 
                        label="Cognitive disability rate among young adults (18-39), nearly doubled since 2013."
                        source="Yale"
                    />
                    <StatCard 
                        value="152M" 
                        label="People projected to be living with dementia globally by 2050."
                        source="WHO"
                    />
                    <StatCard 
                        value="75.8%" 
                        label="Sales growth of mushroom supplements in 2023, the largest of any top ingredient."
                        source="Food Institute"
                    />
                </div>
            </div>
        </section>
    );
}

export default ProblemSection;
