import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
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
            {/* FrameGenie (originally VidSnap.AI) */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div
                className="rounded-lg p-8 aspect-video flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url('/images/FrameGenie.jpeg')` }}
              >
              </div>
              <div>
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
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Fastify</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">JWT</Badge>
                </div>
                <div className="space-y-2 mb-6">
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
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold dark:text-white">
                    Technical Challenges:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Designing a secure yet flexible authentication system that
                    could scale across microservices. Solved by implementing a
                    centralized auth service with JWT validation middleware that
                    could be imported into any service.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    <Github className="w-4 h-4 mr-2" />
                    <a
                      href="https://github.com/amitkukrejadev/fastify-auth"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </Button>
                </div>
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

            {/* E-commerce CMS Dashboard */}
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
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Razorpay</Badge>
                  <Badge variant="outline">Jest</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
                <div className="space-y-2 mb-6">
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
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold dark:text-white">
                    Technical Challenges:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Creating a responsive dashboard that maintained performance
                    while displaying complex data visualizations. Solved by
                    implementing virtualized lists and optimized rendering
                    strategies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <a
                      href="https://ecommerce-cms.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    <a
                      href="https://github.com/amitkukrejadev/ecommerce-cms"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Academic Projects */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Academic Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="dark:border-gray-800">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Task Management App
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      A full-stack task management application with user
                      authentication, task categories, and deadline
                      notifications.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Express</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="w-4 h-4 mr-2" />
                      <a
                        href="https://github.com/amitkukrejadev/task-manager"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="dark:border-gray-800">
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
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="w-4 h-4 mr-2" />
                      <a
                        href="https://github.com/amitkukrejadev/weather-dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="dark:border-gray-800">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      E-Learning Platform
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      A prototype e-learning platform with course listings, user
                      enrollment, and progress tracking.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">Tailwind</Badge>
                      <Badge variant="outline">Supabase</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="w-4 h-4 mr-2" />
                      <a
                        href="https://github.com/amitkukrejadev/elearning-platform"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </Button>
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
