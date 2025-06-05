import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            My professional journey and work experience in the tech industry.
          </p>

          <div className="space-y-8">
            {/* Full Stack Intern - Coincent.ai */}
            <Card className="dark:border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Full Stack Intern</CardTitle>
                    <CardDescription>Coincent.ai (Remote)</CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2025 – Present</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>
                    Collaborated on building VidSnap.AI's front-end using Next.js, integrating Clerk for authentication
                    and Cloudinary for media uploads.
                  </li>
                  <li>
                    Implemented AI-powered preview generation and automated format conversions (Instagram, Twitter,
                    Facebook).
                  </li>
                  <li>Wrote serverless functions in Node.js/Express to handle video-processing workflows.</li>
                  <li>Set up MongoDB data models via Mongoose and connected to NeonDB using Prisma.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Cloudinary</Badge>
                  <Badge variant="outline">Clerk</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Backend Developer Intern - Pinnacle Labs */}
            <Card className="dark:border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Backend Developer Intern</CardTitle>
                    <CardDescription>Pinnacle Labs (Remote)</CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Jun 2024 – Dec 2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Developed RESTful APIs with Fastify and Express for a microservices-based SaaS template.</li>
                  <li>Integrated PostgreSQL (NeonDB) through Prisma ORM to manage users, products, and events.</li>
                  <li>Implemented JWT-based authentication middleware and role-based access controls.</li>
                  <li>Containerized services using Docker and deployed to Vercel/Netlify for staging.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Fastify</Badge>
                  <Badge variant="outline">Express.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Web Developer Intern - Oasis Infobyte */}
            <Card className="dark:border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Web Developer Intern</CardTitle>
                    <CardDescription>Oasis Infobyte (Remote)</CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Mar 2024 – May 2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>
                    Built responsive frontend components for a corporate CMS dashboard using React and Tailwind CSS.
                  </li>
                  <li>Integrated Razorpay payment gateway for demo e-commerce workflow (sandbox).</li>
                  <li>Wrote unit tests in Jest/React Testing Library to ensure component reliability.</li>
                  <li>Collaborated with UX designer to refine wireframes and improve user flows.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Razorpay</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
