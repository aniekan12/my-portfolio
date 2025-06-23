import { ExternalLink, Smartphone, Globe, Heart, CreditCard, BookOpen, Target, Gift } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'iDonatio',
            description: 'iDonatio makes it easy to make and receive donations. They connect donors with the people and organisations they care about and provide donees with helpful tools to conveniently track and manage received donations.',
            icon: Heart,
            category: 'Mobile App',
            tech: ['Flutter', 'Dart', 'REST API'],
            links: {
                android: 'https://play.google.com/store/apps/details?id=com.idonatio.idonatio&pli=1',
                ios: 'https://apps.apple.com/ng/app/idonatio/id1627754544'
            },
            features: ['Donation Management', 'Organization Tools', 'Tracking System', 'Cross-platform']
        },
        {
            id: 2,
            name: 'iRecharge',
            description: 'iRecharge is a comprehensive bill payments app that allows users to pay for various services including airtime, data, electricity, and more.',
            icon: CreditCard,
            category: 'Mobile App',
            tech: ['Flutter', 'Dart', 'Payment Integration'],
            links: {
                android: 'https://play.google.com/store/apps/details?id=com.ist.irecharge&hl=en',
                ios: 'https://apps.apple.com/ng/app/irecharge/id971084808'
            },
            features: ['Bill Payments', 'Airtime & Data', 'Electricity', 'Multiple Payment Options']
        },
        {
            id: 3,
            name: 'Accelerate',
            description: 'Accelerate is a fast, secure, and seamless payment solution designed to help individuals and businesses accept payments from their customers for either one-off or recurring transactions by providing them over 10 payment options.',
            icon: CreditCard,
            category: 'Mobile App',
            tech: ['Flutter', 'Dart', 'Payment Gateway'],
            links: {
                android: 'https://play.google.com/store/apps/details?id=com.ist.accelerate.accelerate_mobile&hl=en',
                ios: 'https://apps.apple.com/ng/app/accelerate-by-irecharge/id1623395617'
            },
            features: ['10+ Payment Options', 'Recurring Payments', 'Business Solutions', 'Secure Transactions']
        },
        {
            id: 4,
            name: 'Obodo',
            description: 'Obodo is an innovative Igbo language learning app designed to help users learn and preserve the Igbo language through interactive lessons and cultural content.',
            icon: BookOpen,
            category: 'Mobile App',
            tech: ['Flutter', 'Dart', 'Educational Content'],
            links: {
                android: 'https://play.google.com/store/apps/details?id=com.droid.obodo&hl=en',
                ios: 'https://apps.apple.com/us/app/obodo-full-circle/id1623822418?l=en'
            },
            features: ['Language Learning', 'Cultural Content', 'Interactive Lessons', 'Progress Tracking']
        },
        {
            id: 5,
            name: 'Goalspaces',
            description: 'Goalspaces is a productivity app that helps users set, track, and achieve their personal and professional goals through organized workspace management.',
            icon: Target,
            category: 'Mobile App',
            tech: ['Flutter', 'Dart', 'Productivity Tools'],
            links: {
                android: 'https://play.google.com/store/apps/details?id=space.mvpapp.centralspace&hl=en',
                ios: 'https://apps.apple.com/us/app/goalspaces/id1589210832'
            },
            features: ['Goal Setting', 'Progress Tracking', 'Workspace Management', 'Productivity Tools']
        },
        {
            id: 6,
            name: 'iRecharge POS',
            description: 'A specialized bill payments app designed to run on FETS POS terminals, enabling merchants to process payments and manage transactions efficiently.',
            icon: CreditCard,
            category: 'POS Application',
            tech: ['Flutter', 'Dart', 'POS Integration'],
            links: {},
            features: ['POS Integration', 'Merchant Tools', 'Transaction Management', 'Hardware Compatibility']
        },
        {
            id: 7,
            name: 'Giv.ng',
            description: 'Giv.ng is a web application that allows individuals and organisations to create campaigns and also allows users to donate to those campaigns, with comprehensive donation tracking capabilities.',
            icon: Gift,
            category: 'Web Application',
            tech: ['React', 'TypeScript', 'Web Development'],
            links: {
                web: 'https://giv.ng/'
            },
            features: ['Campaign Creation', 'Donation Tracking', 'Organization Tools', 'Web Platform']
        }
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            My <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Projects</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A collection of mobile applications and web solutions I've developed, each solving unique challenges and serving diverse user needs.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white/60 rounded-xl p-8 border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                                            <project.icon className="h-6 w-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800">{project.name}</h3>
                                            <p className="text-sm text-amber-600">{project.category}</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-500 mb-3">TECHNOLOGIES</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full border border-amber-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-500 mb-3">KEY FEATURES</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {project.features.map((feature) => (
                                            <div key={feature} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-3">
                                    {project.links.web && (
                                        <a
                                            href={project.links.web}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200"
                                        >
                                            <Globe className="h-4 w-4 mr-2" />
                                            Visit Website
                                            <ExternalLink className="h-4 w-4 ml-2" />
                                        </a>
                                    )}
                                    {project.links.android && (
                                        <a
                                            href={project.links.android}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                                        >
                                            <Smartphone className="h-4 w-4 mr-2" />
                                            Android
                                            <ExternalLink className="h-4 w-4 ml-2" />
                                        </a>
                                    )}
                                    {project.links.ios && (
                                        <a
                                            href={project.links.ios}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            <Smartphone className="h-4 w-4 mr-2" />
                                            iOS
                                            <ExternalLink className="h-4 w-4 ml-2" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Impact</h2>
                        <p className="text-xl text-gray-600">
                            The reach and impact of the applications I've developed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-amber-600 mb-2">7+</div>
                            <div className="text-gray-600">Applications Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-amber-600 mb-2">100k+</div>
                            <div className="text-gray-600">Total Downloads</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-amber-600 mb-2">2</div>
                            <div className="text-gray-600">Platforms Supported</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-amber-600 mb-2">4+</div>
                            <div className="text-gray-600">Years of Development</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects; 