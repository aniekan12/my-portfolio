import { Smartphone, Code, Zap, Users, Database, Globe, Shield, TrendingUp } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Flutter/Dart', icon: Smartphone, level: 'Expert' },
        { name: 'React/TypeScript', icon: Code, level: 'Advanced' },
        { name: 'REST API Integration', icon: Database, level: 'Expert' },
        { name: 'Mobile Architecture', icon: TrendingUp, level: 'Expert' },
        { name: 'Team Leadership', icon: Users, level: 'Advanced' },
        { name: 'Performance Optimization', icon: Zap, level: 'Expert' },
        { name: 'Cross-platform Development', icon: Globe, level: 'Expert' },
        { name: 'Security Implementation', icon: Shield, level: 'Advanced' },
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            About <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Me</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A passionate software engineer dedicated to creating innovative mobile solutions that make a difference.
                        </p>
                    </div>

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
                                    I specialize in Flutter/Dart development, React/TypeScript, and have extensive experience with REST API integration and modern mobile architecture patterns. My expertise extends to team leadership, where I've successfully guided development teams to deliver high-quality products on time.
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
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Technical Skills</h2>
                        <p className="text-xl text-gray-600">
                            My expertise spans across mobile development, web technologies, and software architecture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="bg-white/60 rounded-xl p-6 border border-amber-200 hover:border-amber-400 transition-colors duration-200 shadow-lg"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <skill.icon className="h-6 w-6 text-amber-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Proficiency</span>
                                    <span className="text-sm font-medium text-amber-600">{skill.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">What I Value</h2>
                        <p className="text-xl text-gray-600">
                            The principles that guide my work and collaboration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Code className="h-8 w-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Clean Code</h3>
                            <p className="text-gray-600">
                                Writing maintainable, readable, and well-documented code that stands the test of time.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Collaboration</h3>
                            <p className="text-gray-600">
                                Working closely with teams, stakeholders, and users to deliver exceptional products.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-8 w-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Continuous Learning</h3>
                            <p className="text-gray-600">
                                Staying updated with the latest technologies and best practices in software development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About; 