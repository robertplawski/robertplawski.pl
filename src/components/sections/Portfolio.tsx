import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BiCode } from "react-icons/bi";
import AnimatedGrid from "@/app/bits/AnimatedGrid/AnimatedGrid";
import GlowCard from "@/app/bits/GlowCard/GlowCard";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kajet - note taking app",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  /*{
    id: 2,
    title: "create-eksa-app",
    description:
      "create-eksa-app is a modern, fully-configured fullstack starter kit for Next.js applications designed to get you up and running in minutes.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "Drizzle ORM",
      "Auth.js",
      "next-intl",
      "TypeScript",
    ],
    githubUrl: "https://github.com/eksabajt-pl/create-eksa-app",
    liveUrl: "https://create.eksabajt.pl",
  },*/
  {
    id: 3,
    title: "Crazy eights - card game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: ["Next.js", "GraphQL", "Redis", "Docker"],
    githubUrl: "https://github.com",
  },
  /*{
    id: 4,
    title: "Adipiscing Task Manager",
    description:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Eiusmod Weather App",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    technologies: ["React Native", "Expo", "OpenWeather API", "Redux"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Tempor Content Platform",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    technologies: ["Python", "Django", "Celery", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },*/
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8  bg-neutral-950 relative"
    >
      <AnimatedGrid />

      <div className=" flex-col mx-auto max-w-7xl">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              My Portfolio
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Explore my recent projects showcasing various technologies and
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <GlowCard key={project.id} className="group">
                <div className="relative h-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-neutral-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 to-neutral-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative  flex flex-col justify-around h-full p-6">
                    <div className="h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <div className="text-center flex justify-center flex-col items-center">
                        <div className="text-6xl mb-2 opacity-50">
                          <BiCode />
                        </div>
                        <p className="text-sm text-neutral-400">
                          Project Preview
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neutral-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-full border border-neutral-700 group-hover:border-neutral-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-neutral-800">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                        >
                          <FaGithub className="w-5 h-5" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-400 hover:text-neutral-300 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
