import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            My professional journey and work experience in the tech industry.
          </p>
          <div className="space-y-8">
            {/* Freelance Full Stack Developer */}
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="dark:text-white">
                      Freelance Full Stack Developer
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      Self-Employed (Remote)
                    </CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Aug 2024 – Present
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>
                    Built and deployed full-stack projects inspired by
                    real-world use cases (e.g. AI video apps, CMS dashboards,
                    e-commerce features).
                  </li>
                  <li>
                    Integrated services like Clerk (auth) and Razorpay
                    (payments); created REST APIs and serverless functions using
                    Node.js.
                  </li>
                  <li>
                    Managed data using Prisma ORM with MongoDB and PostgreSQL,
                    deployed apps via Vercel/Netlify, and containerized services
                    using Docker.
                  </li>
                  <li>
                    Wrote frontend tests using Jest and React Testing Library to
                    ensure UI stability.
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
                    MongoDB
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
                    Clerk
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
                    Tailwind CSS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Account Receivable Executive */}
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="dark:text-white">
                      Account Receivable Executive (Medical Billing)
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      IKS Health, Mumbai
                    </CardDescription>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Jan 2023 – Aug 2024
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>
                    Managed end-to-end U.S. medical claims lifecycle, ensuring
                    timely reimbursements for Florida-based healthcare
                    providers.
                  </li>
                  <li>
                    Reviewed, analyzed, and followed up on insurance claims to
                    ensure accuracy and resolution.
                  </li>
                  <li>
                    Coordinated with internal teams to streamline medical
                    billing processes and resolve discrepancies.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
