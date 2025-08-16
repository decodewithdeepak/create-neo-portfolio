import { Card, CardContent } from "@/components/ui/card";
import { Code, ChevronRight, Cog, FileText } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 lg:py-32 px-4 border-t backdrop-blur-md border-white/5"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white">
            How it works
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            Understanding the magic behind the one-command portfolio setup
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* How it Works Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <Card className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center mb-4 lg:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    1. Create Portfolio
                  </h3>
                </div>
                <ul className="space-y-2 lg:space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-blue-400 flex-shrink-0" />
                    <span>Run npx create-neo-portfolio</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-blue-400 flex-shrink-0" />
                    <span>Interactive mode or provide project name</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-blue-400 flex-shrink-0" />
                    <span>Scaffolds portfolio automatically</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-blue-400 flex-shrink-0" />
                    <span>Installs dependencies and starts dev server</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center mb-4 lg:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                    <Cog className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    2. Edit Content
                  </h3>
                </div>
                <ul className="space-y-2 lg:space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-green-400 flex-shrink-0" />
                    <span>Open src/components/constants/data.ts</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-green-400 flex-shrink-0" />
                    <span>Fill in your details (name, links, projects)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-green-400 flex-shrink-0" />
                    <span>Update contact form endpoint</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-green-400 flex-shrink-0" />
                    <span>Customize sections as needed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center mb-4 lg:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    3. Deploy
                  </h3>
                </div>
                <ul className="space-y-2 lg:space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-purple-400 flex-shrink-0" />
                    <span>Deploy to Vercel (recommended)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-purple-400 flex-shrink-0" />
                    <span>Or use your favorite platform</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-purple-400 flex-shrink-0" />
                    <span>Portfolio ready in minutes</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-0.5 sm:mt-1 text-purple-400 flex-shrink-0" />
                    <span>Clean up unused sections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Flow Diagram */}
          <div className="mt-12 lg:mt-16">
            <Card className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-center text-white">
                  Installation Flow
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                      <span className="text-blue-400 font-bold text-lg sm:text-xl">
                        1
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">
                      Create
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Run CLI command
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                      <span className="text-green-400 font-bold text-lg sm:text-xl">
                        2
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">
                      Edit
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Customize your data
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                      <span className="text-purple-400 font-bold text-lg sm:text-xl">
                        3
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">
                      Deploy
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Launch your portfolio
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-3">
                      <span className="text-yellow-400 font-bold text-lg sm:text-xl">
                        ✓
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">
                      Ready!
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Portfolio is live
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
