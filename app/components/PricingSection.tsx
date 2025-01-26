import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: 0,
    features: ["Access to free games", "720p streaming", "Standard support"],
  },
  {
    name: "Basic",
    price: 499,
    features: ["Access to 100+ games", "1080p streaming", "Priority support", "2 devices"],
  },
  {
    name: "Pro",
    price: 799,
    features: ["Access to 300+ games", "4K streaming", "24/7 support", "4 devices", "Exclusive content"],
    popular: true,
  },
  {
    name: "Ultimate",
    price: 1199,
    features: ["Access to all games", "4K streaming", "Ray tracing", "Unlimited devices", "VIP support", "Beta access"],
  },
]

export default function PricingSection() {
  return (
    <section className="bg-gray-900 py-12 sm:py-16 lg:py-20" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Plans & Pricing</h2>
          <p className="mt-4 text-lg text-gray-400">Choose the perfect plan for your gaming needs</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg bg-gray-800 p-8 shadow-lg ring-1 ring-gray-700 ${plan.popular ? "ring-2 ring-purple-500" : ""}`}
            >
              {plan.popular && (
                <span className="inline-flex items-center rounded-full bg-purple-500 px-3 py-0.5 text-sm font-medium text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold text-white mt-4">{plan.name}</h3>
              <p className="mt-4 text-5xl font-bold tracking-tight text-white">
                ₹{plan.price}
                <span className="text-xl font-medium text-gray-400">/mo</span>
              </p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-400" aria-hidden="true" />
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-700 hover:bg-gray-600"}`}
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

