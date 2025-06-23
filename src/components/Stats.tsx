interface Stat {
    value: string;
    label: string;
}

interface StatsProps {
    stats: Stat[];
    title: string;
    subtitle: string;
}

const Stats = ({ stats, title, subtitle }: StatsProps) => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
                    <p className="text-xl text-gray-600">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats; 