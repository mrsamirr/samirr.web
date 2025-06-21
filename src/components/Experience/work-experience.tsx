import { experiences } from "@/data/experience"
import { Building2 } from "lucide-react"

export default function WorkExperience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div id="works" className="relative -top-16"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">Work Experience</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            All my professional experiences as a software engineer
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="ml-8 flex-1">
                  <div className="bg-white dark:bg-zinc-800 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-[6px_6px_0px_1px_#000000a6] dark:shadow-[6px_6px_0px_1px_#ffffffa6]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white mb-1 sm:mb-0">{experience.company}</h3>
                      <span className="text-sm text-blue-400 font-medium bg-blue-400/10 px-3 py-1 rounded-full">
                        {experience.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium mb-2">{experience.position}</p>

                    {/* <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">TypeScript</span>
                      <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Node.js</span>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex justify-start mt-8">
            <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full ml-4 shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
