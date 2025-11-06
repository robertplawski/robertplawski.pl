import React from "react";
import { FaGithub, FaExternalLinkAlt, FaTools } from "react-icons/fa";
import AnimatedGrid from "../../bits/AnimatedGrid/AnimatedGrid";
import { BiCode, BiLogoGithub } from "react-icons/bi";
import GlowCard from "@/app/bits/GlowCard/GlowCard";
import Link from "next/link";
import { Brush, ComputerIcon, DollarSign, Globe, GraduationCap, ToolCaseIcon, TowerControlIcon, UtilityPole } from "lucide-react";
import gugaPreviewImage from "@/assets/guga.png"
import eksaPreviewImage from "@/assets/eksa.png"
import antikPreviewImage from "@/assets/antik.png"
import poemataPreviewImage from "@/assets/poemata.png"
import Image, { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[],
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  previewImage?: StaticImageData
}

const getTagIcon = ({ tag, size }: { tag: string, size: number }) => {
  if (tag === "website") {
    return <Globe size={size} />

  }
  if (tag === "tool") {

    return <FaTools size={size} />

  }
  if (tag === "commercial") {
    return <DollarSign size={size} />
  }
  if (tag === "utility") {
    return <ToolCaseIcon size={size} />
  }
  if (tag === "hobby") {
    return <Brush size={size} />
  }
  if (tag === "school") {
    return <GraduationCap size={size} />
  }
  if (tag === "webapp") {
    return <ComputerIcon size={size} />
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: "Antik studio",
    description:
      "Antik studio to firma zajmująca się renowacją i sprzedażą antycznych mebli. Ich strona potrzebowała odświeżenia wyglądu oraz naprawienia certyfikatu SSL. \n\n Wprowadzone zmiany poprawiły pozycjonowanie strony w wyszukiwarkach.",
    technologies: ["Wordpress", "Elementor", "HTML", "CSS", "Hosting"],
    liveUrl: "https://antik-studio.pl/",
    tags: ["website", "commercial"],
    previewImage: antikPreviewImage
  },
  {
    id: 2,
    title: "unnamed glossary app (guga) ",
    description:
      "GUGA, to projekt szkolny, z ZSTIO im. Kazimierza Gzowskiego (stąd nazwa). Pomysł na aplikację narodził się na lekcji angielskiego, by stworzyć coś przydatnego do nauki języka.\n\n Obecnie aplikacja posiada setki słów oraz wiele uczniów z jej korzysta.",
    technologies: ["React", "TailwindCSS", "Hono", "BetterAuth", "Drizzle", "Cloudflare pages+workers+D1+KV"],
    githubUrl: "https://github.com/robertplawski/gzowski-unnamed-glossary-app",
    liveUrl: "https://guga.eksabajt.pl",
    previewImage: gugaPreviewImage,
    tags: ["webapp", "school"]
  },
  {
    id: 3,
    title: "create-eksa-app",
    description:
      "create-eksa-app is a modern, fully-configured fullstack starter kit for Next.js applications designed to get you up and running in minutes. It allowed many programmers to develop their applications way faster - just npm create eksa-app@latest, and you're all set",
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
    previewImage: eksaPreviewImage,
    liveUrl: "https://create.eksabajt.pl",

    tags: ["tool", "utility"]
  },

  {
    id: 5,
    title: "poemata-editor",
    description:
      "Poemata editor is a local selfhosted app to interface with poems, to write, edit and read them. Mostly made for my dad - a hobbyist poet",
    technologies: [
      "React",
      "TailwindCSS",
      "Fastapi",
      "Docker"
    ],
    githubUrl: "https://github.com/robertplawski/poemata-editor",
    previewImage: poemataPreviewImage,
    tags: ["webapp", "hobby"]

  },

  /*{
    id: 4,
    title: "txtshr",
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


const SeeMoreCard = () => {
  return <Link className="md:col-span-2" href="https://github.com/robertplawski">

    <GlowCard className="group">
      <div className="relative h-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-neutral-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 to-neutral-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative  flex flex-col justify-around h-full p-6">
          <div className="text-center flex justify-center flex-col items-center">
            <div className="text-6xl mb-4 opacity-80">
              <BiLogoGithub />
            </div>
            <p className="text-xl text-neutral-200">
              See more on github...
            </p>
          </div>
        </div>
      </div>
    </GlowCard>
  </Link>

}

const ProjectCard = ({ project }: { project: Project }) => {
  return <GlowCard className="group">
    <div className="relative h-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-neutral-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 to-neutral-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative  flex flex-col justify-around h-full p-6">
        <div className="h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          {project.previewImage ?

            <Image className=" object-center object-cover" alt={`${project.title}'s preview image`} src={project.previewImage} />
            :
            <div className="text-center flex justify-center flex-col items-center">

              <div className="text-6xl mb-2 opacity-50">
                <BiCode />
              </div>
              <p className="text-sm text-neutral-400">
                Project Preview
              </p>
            </div>

          }
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neutral-400 transition-colors">
          {project.title}
        </h3>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => {
              const Icon = getTagIcon
              return (
                <div
                  key={tag}
                  className="px-3 flex flex-row gap-2 py-1 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-full border border-neutral-700 group-hover:border-neutral-600 transition-colors"
                >
                  <Icon size={16} tag={tag} />

                  {tag}
                </div>

              )
            })}
          </div>
        </div>
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
              <span className="text-sm">Live </span>
            </a>
          )}
        </div>
      </div>
    </div>
  </GlowCard>

}

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
              <ProjectCard key={project.id} project={project} />
            ))}
            <SeeMoreCard />
          </div>
        </div>
      </div>
    </section>
  );
}
