import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { submitContactForm } from '../services/contactService';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

const initialErrors = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState(initialErrors);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors = { ...initialErrors };
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.values(newErrors).every(e => !e);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);

        const success = await submitContactForm(formData);
        if (success) {
            toast.success("Message sent successfully! I'll get back to you soon.");
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            toast.error('Failed to send message. Please try again or contact me directly.');
        }
        setIsSubmitting(false);
    };

    const isFormValid = formData.name && formData.email && formData.subject && formData.message && Object.values(errors).every(e => !e);

    return (
        <div className="bg-white/60 rounded-xl p-8 border border-amber-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput
                    label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    autoComplete="name"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    autoComplete="email"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                <FormInput
                    label="Subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                />
                {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}
                <FormTextarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
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
    );
};

export default ContactForm; 