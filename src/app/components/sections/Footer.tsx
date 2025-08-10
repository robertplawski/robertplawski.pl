"use client";

import { useState } from "react";
import { CurrentYear } from "@/app/components/informational/CurrentYear";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { ContactInfo } from "../interactable/ContactInfo";

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
    <footer className="w-full bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Newsletter Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              Stay Updated
            </h3>
            <p className="mb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Get notified about new projects.
            </p>

            {isSubscribed ? (
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                <p className="text-green-700 dark:text-green-400 font-medium">
                  Thank you for subscribing! ✓
                </p>
                <p className="text-sm text-green-600 dark:text-green-500 mt-1">
                  Check your inbox to confirm your subscription.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-500 focus:border-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-600 transition-colors"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium py-2.5 px-5 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-neutral-300 dark:border-neutral-700"
                  >
                    {isSubmitting ? "..." : "Subscribe"}
                  </button>
                </div>
                {error && (
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <ContactInfo
                icon={<MdEmail />}
                label={"Robert's email address"}
                href={"mailto:dev@robertplawski.pl"}
                value={"dev@robertplawski.pl"}
                variant="small"
              />
              <ContactInfo
                icon={<MdPhone />}
                label={"Robert's phone number"}
                href={"tel:+48660206188"}
                value={"+48 660 206 188"}
                fallback={"+48 ___ ___ ___"}
                variant="small"
              />
              <ContactInfo
                icon={<BsGithub />}
                label={"Robert's Github account"}
                href={"https://github.com/robertplawski"}
                value={"robertplawski"}
                variant="small"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            robertplawski.pl © <CurrentYear />
          </p>
        </div>
      </div>
    </footer>
  );
};
