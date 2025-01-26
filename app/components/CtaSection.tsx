import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to streamline your workflow?</span>
          <span className="block">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-50">
              Get started
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-dark">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

