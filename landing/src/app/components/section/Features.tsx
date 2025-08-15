import { Card, CardContent } from "@/components/ui/card"
import { Zap, Palette, Smartphone, RotateCcw, Code, Sparkles } from "lucide-react"


export function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-yellow-400" />,
      title: "One-command setup",
      description: "Create your entire portfolio in seconds with a single npx command",
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-pink-400" />,
      title: "Modern design system",
      description: "Clean, minimalist design with Tailwind CSS and custom variables",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-400" />,
      title: "Fully responsive",
      description: "Looks perfect on desktop, tablet, and mobile devices",
    },
    {
      icon: <RotateCcw className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cyan-400" />,
      title: "Dark/Light themes",
      description: "Stunning theme switching with smooth transitions",
    },
    {
      icon: <Code className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />,
      title: "TypeScript ready",
      description: "Built with TypeScript for better development experience",
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-400" />,
      title: "Customizable sections",
      description: "Easy to customize with your projects, skills, and experience",
    },
  ]


  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-4 bg-zinc-950/40 border-t backdrop-blur-md border-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white drop-shadow-lg px-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
            Carefully crafted features that make portfolio creation effortless and stunning
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/20 backdrop-blur-xl border-white/5 shadow-xl hover:bg-white/5 transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="mb-3 sm:mb-4 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-2 sm:mb-3 text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
