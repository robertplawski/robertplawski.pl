"use client";

import { useState } from "react";
import { CurrentYear } from "@/app/CurrentYear";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLocationPin } from "react-icons/fa6";
import { ContactInfo } from "./ContactInfo";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="w-full bg-neutral-900 border-t border-neutral-800 text-neutral-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Newsletter Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="mb-4 text-neutral-400">
              Subscribe to my newsletter for the latest updates on my projects
              and blog posts.
            </p>

            {isSubscribed ? (
              <div className="bg-green-900/30 border border-green-800 rounded-lg p-4">
                <p className="text-green-400 font-medium">
                  Thank you for subscribing! 🎉
                </p>
                <p className="text-sm text-green-300 mt-1">
                  Please check your inbox to approve the newsletter
                  subscription.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-3 flex flex-row  gap-2 flex-wrap"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent text-white placeholder-neutral-500"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-full bg-neutral-600 hover:bg-neutral-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
                {error && (
                  <p className="text-red-400 text-sm mt-1 w-full">{error}</p>
                )}
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Contact Me</h3>
            <div className="space-y-3">
              <ContactInfo
                icon={<MdEmail />}
                label={"Robert's email address"}
                href={"mailto:dev@robertplawski.pl"}
                value={"dev@robertplawski.pl"}
              />
              <ContactInfo
                icon={<MdPhone />}
                label={"Robert's phone number"}
                href={"tel:+48660206188"}
                value={"+48 660 206 188"}
                fallback={"+48 ___ ___ ___"}
              />
              <ContactInfo
                icon={<BsGithub />}
                label={"Robert's Github account"}
                href={"https://github.com/robertplawski"}
                value={"robertplawski"}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
          <p>
            robertplawski.pl, all rights reserved &copy;
            <CurrentYear />
          </p>
        </div>
      </div>
    </footer>
  );
};
