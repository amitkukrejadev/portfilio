import {
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiVscodium,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";

export default function SkillsPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Skills
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
              Technologies and tools I've worked with throughout my projects and
              experience.
            </p>

            <div className="space-y-16">
              <div className="bg-white dark:bg-gray-950">
                <div className="space-y-16">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Front End
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <SiReact className="text-2xl text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                          React.js
                        </h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                          Advanced
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <SiNextdotjs className="text-2xl text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                          Next.js
                        </h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                          Advanced
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <SiJavascript className="text-2xl text-yellow-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                          JavaScript
                        </h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                          Advanced
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <SiTailwindcss className="text-2xl text-cyan-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                          Tailwind CSS
                        </h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                          Advanced
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <SiHtml5 className="text-2xl text-orange-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                          HTML
                        </h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                        <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                          Expert
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <SiCss3 className="text-2xl text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                          CSS
                        </h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                          Advanced
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <SiBootstrap className="text-2xl text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                          Bootstrap
                        </h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                          Proficient
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Back End
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Node.js */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiNodedotjs className="text-2xl text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      Node.js
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Advanced
                    </p>
                  </div>
                  {/* Express.js */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiExpress className="text-2xl text-gray-700 dark:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      Express.js
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Proficient
                    </p>
                  </div>
                  {/* Fastify */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiFastify className="text-2xl text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      Fastify
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Proficient
                    </p>
                  </div>
                  {/* MongoDB */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiMongodb className="text-2xl text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      MongoDB
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Advanced
                    </p>
                  </div>
                  {/* PostgreSQL */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiPostgresql className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      PostgreSQL
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Proficient
                    </p>
                  </div>
                  {/* Prisma */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiPrisma className="text-2xl text-gray-800 dark:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      Prisma
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Proficient
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Tools & Platforms
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                  {/* Git */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiGit className="text-2xl text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      Git
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Advanced
                    </p>
                  </div>
                  {/* GitHub */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiGithub className="text-2xl text-gray-800 dark:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      GitHub
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Advanced
                    </p>
                  </div>
                  {/* VS Code */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiVscodium className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      VS Code
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Expert
                    </p>
                  </div>
                  {/* Vercel */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-black dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiVercel className="text-2xl text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      Vercel
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Advanced
                    </p>
                  </div>
                  {/* Docker */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <SiDocker className="text-2xl text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2 dark:text-white">
                      Docker
                    </h3>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
                      Proficient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
    </div>
  );
}
