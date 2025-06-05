export default function SkillsPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Skills</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            Technologies and tools I've worked with throughout my projects and experience.
          </p>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Front End</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">React.js</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Advanced</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl text-white">N</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Next.js</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Advanced</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">JS</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">JavaScript</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Advanced</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">TW</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Tailwind CSS</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Advanced</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">HTML</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">HTML</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Expert</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">CSS</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">CSS</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Advanced</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">B</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Bootstrap</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Proficient</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Backend & Databases</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🟢</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Node.js</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Advanced</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">Ex</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Express.js</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Proficient</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl text-white">F</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Fastify</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Proficient</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">MongoDB</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Advanced</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🐘</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">PostgreSQL</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Proficient</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">P</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Prisma</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Proficient</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tools & Platforms</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🔶</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Git</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Advanced</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🐙</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">GitHub</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Advanced</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">VS</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">VS Code</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Expert</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">F</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Figma</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Proficient</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl text-white">▲</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Vercel</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Advanced</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🐳</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">Docker</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">Proficient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
