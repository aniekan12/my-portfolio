import type { LucideIcon } from 'lucide-react';

interface SkillCardProps {
    name: string;
    icon: LucideIcon;
    level: string;
}

const SkillCard = ({ name, icon: Icon, level }: SkillCardProps) => {
    return (
        <div className="bg-white/60 rounded-xl p-6 border border-amber-200 hover:border-amber-400 transition-colors duration-200 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
                <Icon className="h-6 w-6 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Proficiency</span>
                <span className="text-sm font-medium text-amber-600">{level}</span>
            </div>
        </div>
    );
};

export default SkillCard; 