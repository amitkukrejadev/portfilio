import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function EducationPage() {
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
            <Card className="dark:border-gray-800 dark:bg-gray-950">
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
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    🎓
                  </div>
                  <div className="flex-1">
                    <CardTitle className="dark:text-white">
                      St. Paul College, University of Mumbai — Mumbai, India
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
        </div>

        {/* <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="dark:border-gray-800">
              <CardHeader>
                <CardTitle>Complete Web Development Bootcamp</CardTitle>
                <CardDescription>Hitesh Choudhary (Udemy)</CardDescription>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind,
                  Node.js, Express.js, Fastify, REST APIs, MongoDB, PostgreSQL
                  (Prisma), Git/GitHub, Docker, Postman, Vercel/Netlify
                </p>
                <Button
                  variant="default"
                  className="mt-4 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  asChild
                >
                  <a
                    href="https://example.com/certificate-url" // replace with real link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </Button>
              </CardHeader>
            </Card>

            <Card className="dark:border-gray-800">
              <CardHeader>
                <CardTitle>
                  Java + Data Structures & Algorithms Bootcamp
                </CardTitle>
                <CardDescription>Piyush Garg (Udemy)</CardDescription>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Core Java, OOP, Data Structures (Arrays, Linked Lists, Trees,
                  Graphs, Heaps), Algorithms (Sorting, Searching, Recursion,
                  Dynamic Programming), DSA Interview Prep
                </p>
                <Button
                  variant="default"
                  className="mt-4 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  asChild
                >
                  <a
                    href="https://example.com/certificate-url" // replace with real link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div> */}
        <div className="mt-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h1>
            <div className="space-y-8">
              {/* Web Development Bootcamp */}
              <Card className="dark:border-gray-800 dark:bg-gray-950">
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
                        Hitesh Choudhary (Udemy)
                      </CardDescription>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        HTML5, CSS3, JavaScript (ES6+), React.js, Next.js,
                        Tailwind, Node.js, Express.js, Fastify, REST APIs,
                        MongoDB, PostgreSQL (Prisma), Git/GitHub, Docker,
                        Postman, Vercel/Netlify
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
              <Card className="dark:border-gray-800 dark:bg-gray-950">
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
                        Piyush Garg (Udemy)
                      </CardDescription>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Core Java, OOP, Data Structures (Arrays, Linked Lists,
                        Trees, Graphs, Heaps), Algorithms (Sorting, Searching,
                        Recursion, Dynamic Programming), DSA Interview Prep
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
      </section>
    </div>
  );
}
