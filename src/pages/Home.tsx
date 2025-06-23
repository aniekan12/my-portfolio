import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Zap, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const Home = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8 cursor-pointer">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                <Typewriter
                                    words={['Aniekan.', 'a Software Engineer.']}
                                    loop={0}
                                    cursor={true}
                                    cursorStyle="_"
                                    cursorBlinking={true}
                                    cursorColor="black"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Results-driven Software Engineer with over 4 years of experience architecting and delivering cross-platform mobile applications.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <div className="flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full border border-amber-300">
                                <Smartphone className="h-5 w-5 text-amber-600" />
                                <span className="text-amber-700">Mobile Development</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full border border-amber-300">
                                <span className="text-amber-700">Flutter/Dart</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full border border-amber-300">
                                <span className="text-amber-700">React Native</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full border border-amber-300">
                                <Zap className="h-5 w-5 text-amber-600" />
                                <span className="text-amber-700">React/TypeScript</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full border border-amber-300">
                                <Users className="h-5 w-5 text-amber-600" />
                                <span className="text-amber-700">Team Leadership</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/projects"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
                        >
                            View My Work
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 border-2 border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-200"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-white/60 rounded-xl border border-amber-200 shadow-lg">
                            <div className="text-4xl font-bold text-amber-600 mb-2">
                                <CountUp end={4} duration={2} start={inView ? undefined : 0} />+
                            </div>
                            <div className="text-gray-600">Years of Experience</div>
                        </div>
                        <div className="text-center p-8 bg-white/60 rounded-xl border border-amber-200 shadow-lg">
                            <div className="text-4xl font-bold text-amber-600 mb-2">
                                <CountUp end={7} duration={2} start={inView ? undefined : 0} />+
                            </div>
                            <div className="text-gray-600">Apps Delivered</div>
                        </div>
                        <div className="text-center p-8 bg-white/60 rounded-xl border border-amber-200 shadow-lg">
                            <div className="text-4xl font-bold text-amber-600 mb-2">
                                <CountUp end={3} duration={2} start={inView ? undefined : 0} />
                            </div>
                            <div className="text-gray-600">Platforms (iOS, Android & Web)</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 