
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    image: string;
    description: string;
    technologies: string[];//lista de tecnologias 
    githubUrl: string;
    demoUrl?: string;//? significa que es opcional, no es obligatorio
};

export default function ProjectCard({ title, image, description, technologies, githubUrl, demoUrl }: ProjectCardProps) {
    return (
        <div className="border-2 border-slate-300 rounded-xl p-6 shadow-md">
            <Image src={image} alt={title} width={800} height={800} className="w-full h-48 mb-4 object-contain" />
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-slate-700 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech) => (
                    <span key={tech} className="bg-slate-800 text-cyan-400 text-sm px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-400 px-4 py-2 rounded "
                >
                    GitHub
                </a>
                {/*Si existe demoUrl, muestra el botón. sino, no lo muestra */}
                {demoUrl && (
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-600 text-white px-4 py-2 rounded "
                    >
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
}