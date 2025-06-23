import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Hero from '../components/Hero';

const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className="pt-24 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="pt-16">
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <Hero
                        title={project.name}
                        subtitle={project.category}
                        highlightedWord={project.name.split(' ')[0]}
                    />
                    <div className="bg-white/60 rounded-xl p-8 border border-amber-200 shadow-lg mt-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">About this project</h3>
                        <p className="text-gray-700 mb-6">{project.description}</p>
                        {project.tech && project.tech.length > 0 && (
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-2">Tech Stack</h4>
                                <ul className="flex flex-wrap gap-2">
                                    {project.tech.map((tech: string) => (
                                        <li key={tech} className="px-3 py-1 bg-amber-100 rounded-full text-sm text-amber-700 border border-amber-200">{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {project.features && project.features.length > 0 && (
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-2">Key Features</h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {project.features.map((feature: string) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {project.links && (
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-2">Links</h4>
                                <div className="flex flex-wrap gap-3">
                                    {project.links.web && (
                                        <a href={project.links.web} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">Web</a>
                                    )}
                                    {project.links.android && (
                                        <a href={project.links.android} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Android</a>
                                    )}
                                    {project.links.ios && (
                                        <a href={project.links.ios} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">iOS</a>
                                    )}
                                </div>
                            </div>
                        )}
                        <div className="mt-8">
                            <Link
                                to="/projects"
                                className="text-amber-700 hover:underline text-sm"
                            >
                                ← Back to Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails; 