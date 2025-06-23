import Hero from '../components/Hero';
import SkillCard from '../components/SkillCard';
import ValueCard from '../components/ValueCard';
import { skills, values } from '../data/skills';

const About = () => {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Hero
                        title="About Me"
                        subtitle="A passionate software engineer dedicated to creating innovative mobile solutions that make a difference."
                        highlightedWord="Me"
                    />

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h2>
                            <div className="space-y-6 text-gray-600">
                                <p>
                                    I'm a Results-driven Software Engineer with over 4 years of experience architecting and delivering cross-platform mobile applications. My passion lies in creating seamless user experiences and building scalable solutions that solve real-world problems.
                                </p>
                                <p>
                                    Throughout my career, I've had the privilege of working on diverse projects ranging from payment solutions to language learning apps, each presenting unique challenges that have helped me grow both technically and professionally.
                                </p>
                                <p>
                                    I specialize in Flutter/Dart development, React/TypeScript, React Native, and have extensive experience with REST API integration and modern mobile architecture patterns. My expertise extends to team leadership, where I've successfully guided development teams to deliver high-quality products on time.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/60 rounded-xl p-8 border border-amber-200 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Achievements</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-600">Delivered 7+ production mobile applications across iOS and Android platforms</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-600">Led development teams and mentored junior developers</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-600">Implemented performance optimizations resulting in 40%+ improvement in app responsiveness</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-600">Architected scalable solutions handling millions of transactions</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-600">Successfully launched apps with 100k+ downloads across app stores</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
                <div className="max-w-7xl mx-auto">
                    <Hero
                        title="Technical Skills"
                        subtitle="My expertise spans across mobile development (Flutter, React Native), web technologies (React/TypeScript), and software architecture."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill) => (
                            <SkillCard key={skill.name} {...skill} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Hero
                        title="What I Value"
                        subtitle="The principles that guide my work and collaboration."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <ValueCard key={value.title} {...value} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About; 