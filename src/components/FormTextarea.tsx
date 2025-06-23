import React from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
    required?: boolean;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ label, name, required = false, ...props }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
            {label} {required && '*'}
        </label>
        <textarea
            id={name}
            name={name}
            required={required}
            className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
            {...props}
        />
    </div>
);

export default FormTextarea; 