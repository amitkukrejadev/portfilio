"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";

export default function ProjectsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section, .card-to-observe");
    sections.forEach((section) => {
      section.classList.add(
        "opacity-0",
        "translate-y-10",
        "transition-all",
        "duration-1000"
      );
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            A collection of projects I've worked on, including professional
            work, personal projects, and academic explorations.
          </p>

          <div className="space-y-16">
            {/* FrameGenie (Image on Left) */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div
                className="rounded-lg p-8 aspect-video flex items-center justify-center bg-cover bg-center card-to-observe"
                style={{ backgroundImage: `url('/images/FrameGenie.jpeg')` }}
              ></div>
              <div className="card-to-observe">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  FrameGenie
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  FrameGenie is a cutting-edge, full-stack SaaS platform that
                  empowers users to create AI-powered movie posters using simple
                  prompts. This project offers a seamless experience for
                  generating, saving, and managing stunning visual content with
                  advanced features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js 14</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Clerk</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Cloudinary</Badge>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>
                      Generate stunning movie posters with AI-powered prompts
                    </li>
                    <li>
                      Secure authentication and user management with Clerk
                    </li>
                    <li>
                      Save, view, and delete generated posters effortlessly
                    </li>
                    <li>
                      Upload custom poster images via Cloudinary integration
                    </li>
                    <li>
                      Responsive and beautiful UI designed with Tailwind CSS
                    </li>
                    <li>Ready for OpenAI integration in the backend logic</li>
                  </ul>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold dark:text-white">
                    Technical Challenges:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    One of the main challenges was optimizing the AI-powered
                    poster generation to handle diverse prompts efficiently
                    while ensuring fast load times. This was addressed by
                    leveraging Next.js Server Actions and Edge Functions,
                    combined with Cloudinary for scalable image storage and
                    processing.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <a
                      href="https://framegenie.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    <a
                      href="https://github.com/amitkukrejadev/framegenie"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Event-Driven Web App (Text on Right) */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 card-to-observe">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Event-Driven Web App
                  <Badge
                    variant="outline"
                    className="ml-4 text-yellow-700 border-yellow-300"
                  >
                    🚧 In Progress
                  </Badge>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A modern event-driven SaaS starter designed for scalable
                  integrations, featuring authentication, webhook handlers, and
                  background workflows.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Clerk</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">NeonDB</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Secure authentication with Clerk</li>
                    <li>Webhook handlers for real-time integrations</li>
                    <li>Background workflows for asynchronous processing</li>
                    <li>
                      Scalable database architecture with Prisma and NeonDB
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold dark:text-white">
                    Technical Challenges:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Ensuring reliable webhook handling and background job
                    processing while maintaining scalability. Solved by
                    implementing a robust event-driven architecture with Next.js
                    patterns and NeonDB for efficient database operations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <a
                      href="https://event-driven-app.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    <a
                      href="https://github.com/amitkukrejadev/event-driven-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 aspect-video flex items-center justify-center card-to-observe">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Event-Driven App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    SaaS Starter Platform
                  </p>
                </div>
              </div>
            </div>

            {/* Q&A Full-Stack Platform (Text on Left) */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-8 aspect-video flex items-center justify-center card-to-observe">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    QNA Platform
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Knowledge-Sharing Platform
                  </p>
                </div>
              </div>
              <div className="card-to-observe">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  QNA Platform
                  <Badge
                    variant="outline"
                    className="ml-4 text-yellow-700 border-yellow-300"
                  >
                    🚧 In Progress
                  </Badge>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A knowledge-sharing platform with secure authentication,
                  question/answer posting, voting, tagging, and search
                  functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Appwrite</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">React</Badge>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Secure authentication with Appwrite</li>
                    <li>Question/answer posting and voting system</li>
                    <li>Tagging and search functionality</li>
                    <li>Client-side state management for responsive UI</li>
                  </ul>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold dark:text-white">
                    Technical Challenges:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Building an efficient search and tagging system while
                    maintaining performance. Addressed by optimizing Appwrite
                    queries and implementing client-side caching with React
                    state management.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <a
                      href="https://qna-platform.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    <a
                      href="https://github.com/amitkukrejadev/qna-platform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Secure LMS (Text on Right) */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 card-to-observe">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Secure LMS
                  <Badge
                    variant="outline"
                    className="ml-4 text-yellow-700 border-yellow-300"
                  >
                    🚧 In Progress
                  </Badge>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A course management platform with role-based access, media
                  uploads, Razorpay payment integration, and production-grade
                  error handling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Razorpay</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Role-based access for students and instructors</li>
                    <li>Media uploads for course content</li>
                    <li>Razorpay payment integration for course purchases</li>
                    <li>Centralized validations and error handling</li>
                  </ul>
                </div>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold dark:text-white">
                    Technical Challenges:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Implementing secure role-based access and handling large
                    media uploads efficiently. Solved by using Prisma for robust
                    database management and optimizing upload pipelines with
                    chunked processing.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <a
                      href="https://secure-lms.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    <a
                      href="https://github.com/amitkukrejadev/secure-lms"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-8 aspect-video flex items-center justify-center card-to-observe">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Secure LMS
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Course Management Platform
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Projects */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Academic Projects
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <Card className="dark:border-gray-800 card-to-observe">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Expense Tracker
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      A simple application to track expenses using JavaScript
                      and localStorage for data persistence.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">HTML/CSS</Badge>
                      <Badge variant="outline">localStorage</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        size="sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <a
                          href="https://expense-tracker.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        <a
                          href="https://github.com/amitkukrejadev/expense-tracker"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="dark:border-gray-800 card-to-observe">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      To-Do App
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      A task management application built with JavaScript, using
                      localStorage for storing tasks.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">HTML/CSS</Badge>
                      <Badge variant="outline">localStorage</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        size="sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <a
                          href="https://todo-app.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        <a
                          href="https://github.com/amitkukrejadev/todo-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="dark:border-gray-800 card-to-observe">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      React Based Quiz App
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      An interactive quiz application built with React and JavaScript for
                      dynamic question rendering and scoring.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">HTML/CSS</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        size="sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <a
                          href="https://quiz-app.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        <a
                          href="https://github.com/amitkukrejadev/react-quiz-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="dark:border-gray-800 card-to-observe">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Weather Dashboard
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      A weather application that displays current and forecasted
                      weather data using the OpenWeatherMap API.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">HTML/CSS</Badge>
                      <Badge variant="outline">API Integration</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        size="sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <a
                          href="https://weather-dashboard-2025.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        <a
                          href="https://github.com/amitkukrejadev/weather-dashboard"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
