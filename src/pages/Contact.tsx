import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const contactInfo = [
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

    const socialLinks = [
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Replace these with your actual EmailJS credentials
            const result = await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Aniekan',
                    to_email: 'akpakpan764@gmail.com'
                },
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );

            if (result.status === 200) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Email send error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = formData.name && formData.email && formData.subject && formData.message;

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Get In <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and mobile development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
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

                        {/* Contact Form */}
                        <div className="bg-white/60 rounded-xl p-8 border border-amber-200 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <p className="text-green-700">Message sent successfully! I'll get back to you soon.</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center space-x-2">
                                    <AlertCircle className="h-5 w-5 text-red-600" />
                                    <p className="text-red-700">Failed to send message. Please try again or contact me directly.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
                                        placeholder="Tell me about your project or opportunity..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isFormValid || isSubmitting}
                                    className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 transform ${isFormValid && !isSubmitting
                                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 hover:scale-105'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Sending...
                                        </div>
                                    ) : (
                                        <>
                                            <MessageCircle className="inline h-5 w-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Availability Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Current Availability</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        I'm currently available for new opportunities and exciting projects.
                    </p>
                    <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-full border border-green-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                        Available for new opportunities
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact; 