interface HeroProps {
    title: string;
    subtitle: string;
    highlightedWord?: string;
}

const Hero = ({ title, subtitle, highlightedWord }: HeroProps) => {
    const renderTitle = () => {
        if (!highlightedWord) {
            return title;
        }

        const parts = title.split(highlightedWord);
        return (
            <>
                {parts[0]}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    {highlightedWord}
                </span>
                {parts[1]}
            </>
        );
    };

    return (
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {renderTitle()}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
            </p>
        </div>
    );
};

export default Hero; 