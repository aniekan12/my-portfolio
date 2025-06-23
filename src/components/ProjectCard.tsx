import { ExternalLink, Smartphone, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Project {
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
    category: string;
    tech: string[];
    links: {
        web?: string;
        android?: string;
        ios?: string;
    };
    features: string[];
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="bg-white/60 rounded-xl p-8 border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
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
    );
};

export default ProjectCard; 