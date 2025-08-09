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
    period: "2024 - Present",
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
];

export default function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Education & Experience
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            My journey through various roles and technologies
          </p>
        </div>

        <ol className="relative border-l border-neutral-700">
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
    </section>
  );
}
