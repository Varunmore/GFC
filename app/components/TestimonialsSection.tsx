import Image from "next/image"

const testimonials = [
  {
    content:
      "GameFlowCloud has revolutionized my gaming experience. I can play my favorite AAA titles on my phone during my commute!",
    author: "Sarah Johnson",
    role: "Casual Gamer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    content:
      "As a professional streamer, GameFlowCloud has been a game-changer. The low latency and high-quality streams are unbeatable.",
    author: "Alex Chen",
    role: "Pro Gamer & Streamer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    content:
      "I never thought I'd be able to play the latest games on my old laptop. GameFlowCloud made it possible, and I'm hooked!",
    author: "Emily Rodriguez",
    role: "Student",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Our Gamers Say</h2>
          <p className="mt-4 text-lg text-gray-400">Don't just take our word for it - hear from our satisfied users</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-gray-800 p-6 shadow-lg">
              <p className="text-gray-300">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="mt-6 flex items-center">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                />
                <div className="ml-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

