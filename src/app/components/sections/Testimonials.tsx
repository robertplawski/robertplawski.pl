import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anna Kowalska",
    role: "Marketing Director",
    company: "Tech Solutions Sp. z o.o.",
    content:
      "Robert delivered an exceptional WordPress website for our company. His attention to detail and ability to understand our needs resulted in a site that perfectly represents our brand. The project was completed on time and communication was excellent throughout.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marek Nowak",
    role: "Small Business Owner",
    company: "Local Cafe",
    content:
      "Working with Robert on our cafe's website was a great experience. He created a beautiful, functional site that has helped us attract more customers. His technical skills combined with his understanding of user experience made all the difference.",
    rating: 5,
  },
  {
    id: 3,
    name: "Katarzyna Wiśniewska",
    role: "Project Manager",
    company: "Digital Agency",
    content:
      "Robert's React skills are impressive. He joined our team as an intern and quickly became a valuable contributor. His code is clean, well-structured, and he has a great eye for responsive design. Would definitely recommend him for frontend development work.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Feedback from people I&apos;ve worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                    <span className="text-neutral-600 dark:text-neutral-300 font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-neutral-300 dark:text-neutral-600"
                    }`}
                  />
                ))}
              </div>

              <FaQuoteLeft className="w-6 h-6 text-neutral-300 dark:text-neutral-600 mb-4" />

              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 dark:text-neutral-400">
            Interested in working together?{" "}
            <a
              href="#contact"
              className="text-neutral-900 dark:text-neutral-100 font-medium hover:underline"
            >
              Let&apos;s discuss your project
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
