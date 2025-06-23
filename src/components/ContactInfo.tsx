import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ContactItem {
    icon: LucideIcon;
    title: string;
    value: string;
    link: string | null;
}

interface SocialLink {
    name: string;
    icon: LucideIcon;
    url: string;
    color: string;
}

const ContactInfo = () => {
    const contactInfo: ContactItem[] = [
        {
            icon: Mail,
            title: 'Email',
            value: 'akpakpan764@gmail.com',
            link: 'mailto:akpakpan764@gmail.com'
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+234 8063431549',
            link: 'tel:+2348063431549'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Nigeria',
            link: null
        }
    ];

    const socialLinks: SocialLink[] = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/aniekan-abasi-akpakpan-0baa33178/',
            color: 'hover:bg-blue-600'
        },
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/aniekan12',
            color: 'hover:bg-gray-700'
        }
    ];

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Let's Connect</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind, want to discuss potential opportunities, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
                {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                            <info.icon className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{info.title}</h3>
                            {info.link ? (
                                <a
                                    href={info.link}
                                    className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                                >
                                    {info.value}
                                </a>
                            ) : (
                                <p className="text-gray-600">{info.value}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 transition-all duration-200 hover:bg-amber-200 ${social.color}`}
                        >
                            <social.icon className="h-6 w-6" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo; 