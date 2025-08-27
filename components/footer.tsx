import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="text-2xl font-bold dark:text-white">
              Amit Kukreja<span className="text-blue-500">.</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Software Engineer | Frontend Developer (React, Next.js, Tailwind)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold dark:text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-md font-semibold dark:text-white mb-3">
              Connect
            </h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/amitkukrejadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/amitkukrejadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:amitkukrejadev@gmail.com"
                aria-label="Email"
                className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400 pt-4">
          © {new Date().getFullYear()} Amit Kukreja. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
