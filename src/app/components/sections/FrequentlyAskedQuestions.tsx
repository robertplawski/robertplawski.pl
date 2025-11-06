"use client"
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services do you offer as a software developer?",
    answer: "I specialize in modern web and mobile development including React, Next.js, Node.js, React Native, and full-stack applications. I also offer WordPress services for basic theme/plugin tweaks, site fixes, migrations, and maintenance. Additionally, I provide hosting setup, domain configuration, and ongoing maintenance agreements.",
  },
  {
    id: 2,
    question: "What technologies do you work with?",
    answer: "My primary focus includes React, Next.js, Node.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Sass, React Native, Drizzle ORM, and tRPC. For backend development, I work with Hono, Next.js, FastAPI, Flask (Python), SQL databases, and KV databases. I'm also proficient with Docker, VPS, CI/CD, and cloud deployments on Vercel, Netlify, GitHub Pages, and Cloudflare.",
  },
  {
    id: 3,
    question: "Do you have professional web development experience?",
    answer: "Yes, I have experience as a freelance web developer specializing in WordPress, building and maintaining custom websites. I also completed a Junior Frontend Developer internship where I managed React frontend for an e-commerce application with focus on responsive design. I'm currently studying computer science at Technikum w Opolu.",
  },
  {
    id: 4,
    question: "Are you currently available for new projects?",
    answer: "I'm available for hire on a part-time or short-term basis, mostly for remote work with hybrid part-time possibilities. I work with clients in Poland, the EU, and internationally. Feel free to contact me to discuss your project requirements and timeline.",
  },
  {
    id: 5,
    question: "What is your pricing structure?",
    answer: "I offer two pricing options: Tiered hourly rates (80-150 PLN/hour based on project complexity) or fixed-price projects (300-600 PLN for small projects, 800-2000 PLN for medium projects, 2500+ PLN for complex applications). Ongoing maintenance and retainer agreements are available at additional cost.",
  },
  {
    id: 6,
    question: "Do you work with e-commerce websites?",
    answer: "Yes, I have experience with e-commerce applications including React-based e-commerce frontends and WooCommerce for WordPress. I can help set up online stores, payment integrations, and product management systems.",
  },
  {
    id: 7,
    question: "What is your experience with DevOps and infrastructure?",
    answer: "I have experience with Docker, VPS management, CI/CD pipelines, and cloud deployments on platforms like Vercel, Netlify, GitHub Pages, and Cloudflare Workers/Pages. I'm proficient with GNU/Linux systems and personally run Fedora while managing TrueNAS home instance and had experience with proxmox home server.",
  },
  {
    id: 8,
    question: "How can I contact you and what languages do you speak?",
    answer: "You can reach me via email at dev@robertplawski.pl or phone at +48 660 206 188. I'm fluent in Polish and communicational in English, based in Opole, Poland.",
  },
];
export default function FrequentlyAskedQuestions() {
  const [openItems, setOpenItems] = useState<number[]>([1]); // Start with first item open

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };


  return (
    <section
      id="faq"
      className="font-sans relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y-1 border-neutral-700"
    >
      <div className="mx-auto z-10 relative max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Common questions about my services and experience
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-neutral-700 rounded-lg bg-neutral-900 overflow-hidden"
            >
              <button
                className={`flex justify-between items-center w-full p-6 text-left hover:bg-neutral-800 ${openItems.includes(faq.id) ? 'bg-neutral-800' : ''} transition-colors`}
                onClick={() => toggleItem(faq.id)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(faq.id) ? (
                    <FaMinus className="text-neutral-400" />
                  ) : (
                    <FaPlus className="text-neutral-400" />
                  )}
                </div>
              </button>

              <div className={`max-h-[0] transition-all ${openItems.includes(faq.id) ? 'max-h-[10rem]' : ''}`}>
                <p className="text-neutral-300 text-lg px-6 pb-6 pt-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
