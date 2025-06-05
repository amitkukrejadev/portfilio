"use client";

import {
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Users,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const reactIconRef = useRef<HTMLDivElement>(null);
  const nextIconRef = useRef<HTMLDivElement>(null);
  const nodeIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for React icon
    const reactAnimation = () => {
      if (reactIconRef.current) {
        reactIconRef.current.style.transform = "rotate(360deg)";
        reactIconRef.current.style.transition = "transform 10s linear infinite";
      }
    };

    // Animation for Next.js icon (slight wobble)
    const nextAnimation = () => {
      if (nextIconRef.current) {
        nextIconRef.current.animate(
          [
            { transform: "translateY(0px)" },
            { transform: "translateY(-5px)" },
            { transform: "translateY(0px)" },
          ],
          {
            duration: 2000,
            iterations: Number.POSITIVE_INFINITY,
          }
        );
      }
    };

    // Animation for Node.js icon (pulse)
    const nodeAnimation = () => {
      if (nodeIconRef.current) {
        nodeIconRef.current.animate(
          [
            { transform: "scale(1)" },
            { transform: "scale(1.1)" },
            { transform: "scale(1)" },
          ],
          {
            duration: 2000,
            iterations: Number.POSITIVE_INFINITY,
          }
        );
      }
    };

    reactAnimation();
    nextAnimation();
    nodeAnimation();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Amit Kukreja
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  Full Stack Developer
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>amitkukrejadev@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Globe className="w-4 h-4" />
                  <span>amitkukrejadev.vercel.app</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/amitkukrejadev</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Github className="w-4 h-4" />
                  <span>github.com/amitkukrejadev</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Users className="w-4 h-4" />
                  <span>peerlist.io/iamamitkukreja</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Aspiring Full Stack Developer with hands-on experience
                  building React/Next.js frontends and Node.js/MongoDB backends.
                  Currently completing MCA at Jain University, and actively
                  contributing to SaaS projects (VidSnap.AI, Fastify Auth
                  Module).
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Passionate about clean code, scalable architectures, and
                  delivering pixel-perfect UIs. I believe in continuous learning
                  and staying updated with the latest technologies to build
                  innovative solutions that make a real impact.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600"
                  >
                    About Me
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Profile photo */}
              <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <img
                  src="/images/profile.jpg"
                  alt="Amit Kukreja - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Animated tech icons below the image */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div
                  ref={reactIconRef}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl border border-blue-200 dark:border-blue-800">
                    <span className="text-3xl">⚛️</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium">
                    React.js
                  </span>
                </div>

                <div
                  ref={nextIconRef}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-black dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl border border-gray-300 dark:border-gray-600">
                    <span className="text-3xl text-white">N</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium">
                    Next.js
                  </span>
                </div>

                <div
                  ref={nodeIconRef}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl border border-green-200 dark:border-green-800">
                    <span className="text-3xl">🟢</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium">
                    Node.js
                  </span>
                </div>

                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl border border-yellow-200 dark:border-yellow-800">
                    <span className="text-3xl">JS</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium">
                    JavaScript
                  </span>
                </div>

                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl border border-green-200 dark:border-green-800">
                    <span className="text-3xl">🍃</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium">
                    MongoDB
                  </span>
                </div>

                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl border border-cyan-200 dark:border-cyan-800">
                    <span className="text-3xl">TW</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Experience
          </h2>

          <div className="space-y-8">
            {/* Full Stack Intern - Coincent.ai */}
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="dark:text-white">
                      Full Stack Intern
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Coincent.ai (Remote)
                    </CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Jan 2025 – Present
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>
                    Collaborated on building VidSnap.AI's front-end using
                    Next.js, integrating Clerk for authentication and Cloudinary
                    for media uploads.
                  </li>
                  <li>
                    Implemented AI-powered preview generation and automated
                    format conversions (Instagram, Twitter, Facebook).
                  </li>
                  <li>
                    Wrote serverless functions in Node.js/Express to handle
                    video-processing workflows.
                  </li>
                  <li>
                    Set up MongoDB data models via Mongoose and connected to
                    NeonDB using Prisma.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    React.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Prisma
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    MongoDB
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Cloudinary
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Clerk
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Backend Developer Intern - Pinnacle Labs */}
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="dark:text-white">
                      Backend Developer Intern
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Pinnacle Labs (Remote)
                    </CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Jun 2024 – Dec 2024
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>
                    Developed RESTful APIs with Fastify and Express for a
                    microservices-based SaaS template.
                  </li>
                  <li>
                    Integrated PostgreSQL (NeonDB) through Prisma ORM to manage
                    users, products, and events.
                  </li>
                  <li>
                    Implemented JWT-based authentication middleware and
                    role-based access controls.
                  </li>
                  <li>
                    Containerized services using Docker and deployed to
                    Vercel/Netlify for staging.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Fastify
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Express.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Prisma
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Docker
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Web Developer Intern - Oasis Infobyte */}
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="dark:text-white">
                      Web Developer Intern
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Oasis Infobyte (Remote)
                    </CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Mar 2024 – May 2024
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>
                    Built responsive frontend components for a corporate CMS
                    dashboard using React and Tailwind CSS.
                  </li>
                  <li>
                    Integrated Razorpay payment gateway for demo e-commerce
                    workflow (sandbox).
                  </li>
                  <li>
                    Wrote unit tests in Jest/React Testing Library to ensure
                    component reliability.
                  </li>
                  <li>
                    Collaborated with UX designer to refine wireframes and
                    improve user flows.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    React.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Razorpay
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    JavaScript
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Education
          </h2>

          <div className="space-y-8">
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    🎓
                  </div>
                  <div className="flex-1">
                    <CardTitle className="dark:text-white">
                      Jain University — Master of Computer Applications (MCA)
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Bangalore, India
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>Jul 2022 – Jan 2025 </span>
                      <span>•</span>
                      <span>SGPA: 8.67 | Percentage: 80.68%</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Key Subjects: Advanced Web Technologies, Python
                      Development, Java Programming, Cloud Infrastructure, Big
                      Data Analytics, AI/ML, DSA
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    🎓
                  </div>
                  <div className="flex-1">
                    <CardTitle className="dark:text-white">
                      St. Paul College (Mumbai University) — Bachelor of
                      Commerce (B.Com.), CBCS
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Mumbai, India
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>Jul 2019 – Apr 2022</span>
                      <span>•</span>
                      <span>CGPI: 8.94 | Percentage: 74.2%</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Key Subjects: Accountancy & Financial Management, Business
                      Economics, Financial Accounting & Auditing, Business Law,
                      Export Marketing
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            Technologies and tools I've worked with throughout my projects and
            experience
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Front End
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">JS</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    JavaScript
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    React.js
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-white">N</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Next.js
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">HTML</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    HTML
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">CSS</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    CSS
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">B</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Bootstrap
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">TW</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Backend & Databases
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🟢</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Node.js
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">Ex</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Express.js
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-white">F</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Fastify
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    MongoDB
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🐘</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">P</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Prisma
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🔶</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Git
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🐙</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    GitHub
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">VS</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    VS Code
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">F</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Figma
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl text-white">▲</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Vercel
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🐳</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Projects
          </h2>

          <div className="space-y-12">
            {/* VidSnap.AI Project */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    VidSnap.AI
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-Powered Video Processing
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  VidSnap.AI
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  AI-powered video processing platform with automated format
                  conversions for social media platforms. Features intelligent
                  preview generation and seamless media management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Clerk
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Cloudinary
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    MongoDB
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Prisma
                  </Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>AI-powered preview generation</li>
                    <li>
                      Automated format conversions (Instagram, Twitter,
                      Facebook)
                    </li>
                    <li>Serverless video processing workflows</li>
                    <li>Secure authentication with Clerk</li>
                  </ul>
                </div>
                <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  Live Demo
                </Button>
              </div>
            </div>

            {/* Fastify Auth Module */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Fastify Auth Module
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Comprehensive authentication module for Fastify applications
                  with JWT-based authentication, role-based access controls, and
                  microservices architecture.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Fastify
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Prisma
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Docker
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    JWT
                  </Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>RESTful API architecture</li>
                    <li>JWT-based authentication middleware</li>
                    <li>Role-based access controls</li>
                    <li>Containerized microservices</li>
                  </ul>
                </div>
                <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  View Code
                </Button>
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg p-8 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Auth Module
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fastify Authentication System
                  </p>
                </div>
              </div>
            </div>

            {/* E-commerce Dashboard */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-8 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    E-commerce CMS
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Corporate Dashboard
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  E-commerce CMS Dashboard
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Responsive corporate CMS dashboard with integrated payment
                  gateway, comprehensive testing suite, and optimized user
                  experience design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    React.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Razorpay
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    Jest
                  </Badge>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    JavaScript
                  </Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Responsive frontend components</li>
                    <li>Razorpay payment integration</li>
                    <li>Comprehensive unit testing</li>
                    <li>UX-optimized user flows</li>
                  </ul>
                </div>
                <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
