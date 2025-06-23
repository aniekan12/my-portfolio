import type { LucideIcon } from 'lucide-react';

interface ValueCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const ValueCard = ({ title, description, icon: Icon }: ValueCardProps) => {
    return (
        <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ValueCard; 