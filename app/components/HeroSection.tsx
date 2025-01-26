import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">AAA Gaming,</span>{" "}
                <span className="block text-purple-600 xl:inline">No Hardware Required.</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Play your favorite games seamlessly with GameFlowCloud, powered by 5G and advanced cloud technology.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button size="lg" className="w-full bg-purple-600 text-white hover:bg-purple-700">
                    Sign Up for Free
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                  >
                    Explore Plans
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div
          className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-background1.jpg')" }}
        ></div>
      </div>
    </div>
  )
}

