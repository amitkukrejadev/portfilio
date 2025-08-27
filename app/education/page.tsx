"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

export default function EducationPage() {
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
            Education
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            My academic background and educational qualifications.
          </p>

          <div className="space-y-8">
            {/* Jain University */}
            <Card className="dark:border-gray-800 dark:bg-gray-950 card-to-observe">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    🎓
                  </div>
                  <div className="flex-1">
                    <CardTitle className="dark:text-white">
                      Jain University — Bangalore, India
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Master of Computer Applications · Jul 2022 – Jan 2025
                    </CardDescription>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      SGPA: 8.67 | Percentage: 80.68%
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Relevant Coursework: Advanced Web Technologies, Python
                      Programming, Java, Cloud Infrastructure, Big Data
                      Analytics, Artificial Intelligence & Machine Learning,
                      Data Structures and Algorithms
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* St. Paul College */}
            <Card className="dark:border-gray-800 dark:bg-gray-950 card-to-observe">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    🎓
                  </div>
                  <div className="flex-1">
                    <CardTitle className="dark:text-white">
                      St. Paul College — Mumbai, India
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Bachelor of Commerce (B.Com) · Jul 2019 – Apr 2022
                    </CardDescription>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      CGPI: 8.94 | Percentage: 74.2%
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Relevant Coursework: Financial Management, Business
                      Economics, Auditing, Business Law, Export Marketing
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Certifications
              </h1>
              <div className="space-y-8">
                {/* Web Development Bootcamp */}
                <Card className="dark:border-gray-800 dark:bg-gray-950 card-to-observe">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-lg">
                        📜
                      </div>
                      <div className="flex-1">
                        <CardTitle className="dark:text-white">
                          Complete Web Development Bootcamp
                        </CardTitle>
                        <CardDescription className="dark:text-gray-400">
                          ( By Hitesh Choudhary Udemy )
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 m-2">
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
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          This full-stack development journey covers modern web
                          technologies starting with HTML5, CSS3, and JavaScript
                          (ES6+) for building responsive and interactive user
                          interfaces. You’ll develop front-end applications
                          using React.js, Next.js, and style them efficiently
                          with Tailwind CSS. On the backend, the course dives
                          into Node.js, Express.js, and Fastify, enabling you to
                          build scalable servers and REST APIs. You’ll work with
                          both NoSQL and SQL databases, including MongoDB and
                          PostgreSQL. Key development tools such as Git/GitHub,
                          Postman, and Docker are integrated into the workflow,
                          along with deployment platforms like Vercel and
                          Netlify to launch your projects seamlessly.
                        </p>
                        <Button
                          variant="default"
                          className="mt-4 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                          asChild
                        >
                          <a
                            href="https://example.com/certificate-url"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Certificate
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Java + DSA Bootcamp */}
                <Card className="dark:border-gray-800 dark:bg-gray-950 card-to-observe">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-lg">
                        📜
                      </div>
                      <div className="flex-1">
                        <CardTitle className="dark:text-white">
                          Java + Data Structures & Algorithms Bootcamp
                        </CardTitle>
                        <CardDescription className="dark:text-gray-400">
                          ( By Piyush Garg Udemy )
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 m-2">
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            Core Java
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            OOPs
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            Data Structures
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            Searching
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            Recursion
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            DSA Interview Prep
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          This bootcamp provides a strong foundation in Core
                          Java and Object-Oriented Programming (OOP), essential
                          for modern software development. It dives deep into
                          Data Structures like Arrays, Linked Lists, Trees,
                          Graphs, and Heaps, while also covering key Algorithms
                          such as Sorting, Searching, Recursion, and Dynamic
                          Programming. Designed with a focus on DSA Interview
                          Prep, this course equips you with the problem-solving
                          skills and coding techniques needed to confidently
                          tackle technical interviews and real-world programming
                          challenges.
                        </p>
                        <Button
                          variant="default"
                          className="mt-4 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                          asChild
                        >
                          <a
                            href="https://example.com/certificate-url"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Certificate
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="dark:border-gray-800 dark:bg-gray-950 card-to-observe">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-lg">
                        📜
                      </div>
                      <div className="flex-1">
                        <CardTitle className="dark:text-white">
                          Figma UI/UX Design Bootcamp Brian Wood (LinkedIn
                          Learning)
                        </CardTitle>
                        <CardDescription className="dark:text-gray-400">
                          ( By Brian Wood - LinkedIn )
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 m-2">
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            Figma Basics
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            UI/UX Design
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            Prototyping
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            Components
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            Interactions
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            Design Workflow
                          </Badge>
                          <Badge
                            variant="outline"
                            className="dark:border-gray-600 dark:text-gray-300"
                          >
                            AI Tools
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          Master the fundamentals and advanced features of
                          Figma, the powerful collaborative interface design
                          tool. This comprehensive bootcamp equips you with
                          everything needed to kickstart and elevate your UX
                          design projects—starting with Figma Basics like
                          creating files, shapes, images, and text, and
                          organizing projects across multiple screens and
                          devices. You’ll gain hands-on experience in UI/UX
                          Design, using essential tools such as layers, reusable
                          formatting, and components to streamline your design
                          workflow. Learn to build engaging user experiences
                          through prototyping and interactions that bring your
                          designs to life. The course also introduces the latest
                          AI tools in Figma to help you design faster and
                          smarter.
                        </p>
                        <Button
                          variant="default"
                          className="mt-4 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                          asChild
                        >
                          <a
                            href="https://example.com/certificate-url"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Certificate
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
