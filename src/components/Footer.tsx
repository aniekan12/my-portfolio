import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/aniekan12',
            color: 'hover:bg-gray-700'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/aniekan-abasi-akpakpan-0baa33178/',
            color: 'hover:bg-blue-600'
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:akpakpan764@gmail.com',
            color: 'hover:bg-amber-600'
        }
    ];

    return (
        <footer className="bg-amber-50/80 border-t border-amber-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Description */}
                    <div className="flex items-center space-x-2 mb-6 md:mb-0">
                        <div>
                            <span className="text-xl font-bold text-gray-800">Aniekan.</span>
                            <p className="text-sm text-gray-500">Software Engineer</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 transition-all duration-200 hover:bg-amber-200 ${social.color}`}
                                aria-label={social.name}
                            >
                                <social.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-amber-200 text-center">
                    <p className="text-gray-500">
                        © {currentYear} Aniekan. All rights reserved. Built with ❤️.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 