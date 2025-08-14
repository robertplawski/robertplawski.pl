import AnimatedGrid from "@/app/bits/AnimatedGrid/AnimatedGrid";
import React, { ReactNode } from "react";
import { FaGraduationCap, FaLaptop } from "react-icons/fa";

interface Experience {
  id: number;
  icon: ReactNode;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    icon: <FaLaptop />,
    company: "Freelancing, Wordpress",
    position: "Web development",
    period: "2025 - Present",
    description:
      "Building and maintaining custom WordPress websites, creating themes and plugins, optimizing performance, and managing client sites.",
    technologies: [
      "WordPress",
      "React",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "WooCommerce",
      "Elementor",
    ],
  },
  {
    id: 2,
    icon: <FaLaptop />,
    company: "",
    position: "Junior Frontend Developer Internship",
    period: "2025 ",
    description:
      "Managed React frontend of an e-commerce application with emphasis on responsive design. Gained experience using git, react, typescript and css postprocessors. Also improved my teamwork skills. ",
    technologies: ["React", "Typescript", "Sass", "Git"],
  },
  {
    id: 3,
    icon: <FaGraduationCap />,
    company: "Technikum w Opolu", // yeah i know that detailed information about my school is in git history...
    position: "Nauka na profilu - technik programista",
    period: "2022 - Present ",
    description:
      "Doświadczenie w tworzeniu aplikacji na wydarzenia promocyjne szkoły. " +
      "Kształcenie w zakresie projektowania, programowania oraz administrowania aplikacjami webowymi i bazami danych. " +
      "Praktyczna nauka języków programowania, technologii frontendowych oraz narzędzi developerskich (Git). " +
      "Poznanie i praca z technologiami LAMP (Linux, Apache, MySQL, PHP).",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Python",
      "Kotlin",
      "C++",
      "Git",
      "Linux",
      "Apache",
      "MySQL",
      "PHP",
    ],
  },
];

export default function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="font-sans relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y-1 border-neutral-700"
    >
      {" "}
      <div className="mx-auto z-10 relative max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Education & Experience
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            My journey through various roles and technologies
          </p>
        </div>

        <div className="mask-b-from-85% pb-1 px-4">
          <ol className="relative border-l border-neutral-70 ">
            {experiences.map((experience) => (
              <li key={experience.id} className="mb-10 ml-8">
                <div className="absolute p-1 scale-140 -translate-x-2  bg-neutral-800 rounded-full mt-1.5 -left-1.5 border border-neutral-900">
                  {experience.icon}
                </div>
                <div className="mb-1 text-sm font-normal leading-none text-neutral-400">
                  {experience.period}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {experience.position}
                </h3>
                <p className="text-lg text-neutral-300 mb-2">
                  {experience.company}
                </p>
                <p className="mb-4 text-base font-normal text-neutral-400">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-full border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
