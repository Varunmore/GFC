import { MousePointer, Play, Gamepad } from "lucide-react"

const steps = [
  {
    title: "Select a game",
    description: "Browse our extensive library of AAA titles and indie gems.",
    icon: MousePointer,
  },
  {
    title: "Click Play",
    description: "No downloads, no waiting. Just click and start playing instantly.",
    icon: Play,
  },
  {
    title: "Start gaming",
    description: "Enjoy high-quality gaming on any device, anywhere.",
    icon: Gamepad,
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-400">Get started with GameFlowCloud in three simple steps</p>
        </div>
        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-semibold text-white">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

