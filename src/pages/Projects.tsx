import ProjectCard from '../components/ProjectCard';
import Stats from '../components/Stats';
import Hero from '../components/Hero';
import { projects } from '../data/projects';

const Projects = () => {
    const projectStats = [
        { value: '7+', label: 'Applications Delivered' },
        { value: '100k+', label: 'Total Downloads' },
        { value: '3', label: 'Platforms Supported' },
        { value: '4+', label: 'Years of Development' }
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Hero
                        title="My Projects"
                        subtitle="A collection of mobile applications and web solutions I've developed, each solving unique challenges and serving diverse user needs."
                        highlightedWord="Projects"
                    />

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <Stats
                stats={projectStats}
                title="Project Impact"
                subtitle="The reach and impact of the applications I've developed."
            />
        </div>
    );
};

export default Projects; 