import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';

const Contact = () => {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Hero
                        title="Get In Touch"
                        subtitle="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and mobile development."
                        highlightedWord="Touch"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <ContactInfo />
                        <ContactForm />
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