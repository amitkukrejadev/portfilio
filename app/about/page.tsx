import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, BookOpen, Target, Lightbulb, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-12">
            <p>
              Hello! I'm Amit Kukreja, a Full Stack Developer with a passion for
              building web applications that are both functional and beautiful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      My Journey
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      My path to becoming a developer has been unconventional. I
                      started with a Bachelor's in Commerce, but discovered my
                      passion for coding during my final year. This led me to
                      pursue an MCA at Jain University, where I've been
                      expanding my technical skills and working on real-world
                      projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      What Drives Me
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      I'm driven by the endless possibilities of technology and
                      the ability to create solutions that make a difference. I
                      love the problem-solving aspect of coding and the
                      satisfaction of seeing a project come to life from concept
                      to completion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            My Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-12">
            <p>
              My journey into tech began during my B.Com studies when I first
              encountered web development through a friend's project. What
              started as curiosity quickly evolved into passion as I began
              learning HTML, CSS, and JavaScript in my free time.
            </p>
            <p>
              After completing my B.Com degree, I made the decision to fully
              commit to a career in technology by pursuing an MCA at Jain
              University. This formal education, combined with self-learning and
              practical experience through internships, has helped me develop a
              strong foundation in full-stack development.
            </p>
            <p>
              Today, I specialize in building web applications using React,
              Next.js, and Node.js. I'm particularly interested in creating
              intuitive user interfaces and efficient backend systems that work
              seamlessly together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      Beyond Coding
                    </h3>
                    <span className="inline-block mt-1 mb-2 px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded">
                      Currently reading: Atomic Habits
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">
                      When I'm not coding, I enjoy content creation, exploring
                      emerging tech trends, and reading. I'm currently reading
                      "Atomic Habits" by James Clear, which has been helping me
                      optimize my learning process and daily routines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      My Goals
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      My professional goals include becoming a strong software
                      developer who can architect and build complex
                      applications, supporting my family through my career in
                      tech, and achieving financial stability that allows me to
                      continue growing and learning in this ever-evolving field.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              <a
                href="/resume/Frontend_Developer_amit_kukreja.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Get Resume
              </a>
            </Button>
            <Link href="/contact">
              <Button variant="outline">Get In Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
