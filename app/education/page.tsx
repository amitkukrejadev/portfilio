import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function EducationPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Education</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            My academic background and educational qualifications.
          </p>

          <div className="space-y-8">
            <Card className="dark:border-gray-800">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    🎓
                  </div>
                  <div className="flex-1">
                    <CardTitle>Jain University — Master of Computer Applications (MCA)</CardTitle>
                    <CardDescription>Bangalore, India</CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>Jul 2022 – Nov 2024 (Expected)</span>
                      <span>•</span>
                      <span>SGPA: 8.67 | Percentage: 80.68%</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Key Subjects: Advanced Web Technologies, Python Development, Java Programming, Cloud
                      Infrastructure, Big Data Analytics, AI/ML, DSA
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="dark:border-gray-800">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    🎓
                  </div>
                  <div className="flex-1">
                    <CardTitle>St. Paul College (Mumbai University) — Bachelor of Commerce (B.Com.), CBCS</CardTitle>
                    <CardDescription>Mumbai, India</CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>Jul 2019 – Apr 2022</span>
                      <span>•</span>
                      <span>CGPI: 8.94 | Percentage: 74.2%</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Key Subjects: Accountancy & Financial Management, Business Economics, Financial Accounting &
                      Auditing, Business Law, Export Marketing
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="dark:border-gray-800">
                <CardHeader>
                  <CardTitle>Complete Web Development Bootcamp</CardTitle>
                  <CardDescription>Hitesh Choudhary (Udemy)</CardDescription>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind, Node.js, Express.js, Fastify, REST
                    APIs, MongoDB, PostgreSQL (Prisma), Git/GitHub, Docker, Postman, Vercel/Netlify
                  </p>
                </CardHeader>
              </Card>

              <Card className="dark:border-gray-800">
                <CardHeader>
                  <CardTitle>Java + Data Structures & Algorithms Bootcamp</CardTitle>
                  <CardDescription>Piyush Garg (Udemy)</CardDescription>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Core Java, OOP, Data Structures (Arrays, Linked Lists, Trees, Graphs, Heaps), Algorithms (Sorting,
                    Searching, Recursion, Dynamic Programming), DSA Interview Prep
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
