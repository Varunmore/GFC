import { Zap, TabletsIcon as Devices, HardDrive } from "lucide-react"

const features = [
  {
    name: "Low Latency Gaming",
    description: "Experience seamless gameplay with our advanced cloud technology and 5G integration.",
    icon: Zap,
  },
  {
    name: "Device Independence",
    description: "Play your favorite games on any device, from smartphones to smart TVs.",
    icon: Devices,
  },
  {
    name: "All Games Pre-Installed",
    description: "No need to wait for downloads or updates. Start playing instantly.",
    icon: HardDrive,
  },
]

export default function FeaturesSection() {
  return (
    <div className="py-12 bg-gray-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Next-Gen Cloud Gaming
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            GameFlowCloud brings you cutting-edge features for the ultimate gaming experience.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

