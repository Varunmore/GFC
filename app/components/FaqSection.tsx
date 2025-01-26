import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What games are available on GameFlowCloud?",
    answer:
      "GameFlowCloud offers a wide range of games, from AAA titles to indie gems. Our library includes action, RPG, strategy, sports, and many other genres. The exact game selection depends on your subscription tier.",
  },
  {
    question: "Do I need additional hardware to use GameFlowCloud?",
    answer:
      "No additional hardware is required! GameFlowCloud works on most modern devices with a stable internet connection. This includes smartphones, tablets, laptops, desktop computers, and smart TVs.",
  },
  {
    question: "What kind of internet connection do I need?",
    answer:
      "For the best experience, we recommend a stable broadband connection with at least 10 Mbps for 1080p gaming. For 4K gaming, we recommend at least 35 Mbps. 5G connections also work great with GameFlowCloud.",
  },
  {
    question: "Can I use my existing game saves with GameFlowCloud?",
    answer:
      "In most cases, yes! GameFlowCloud supports cloud saves for many games, allowing you to continue your progress across devices. Some games may have platform-specific saves that can't be transferred.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 7-day free trial for new users to experience GameFlowCloud. You can access a selection of games during this period to test our service.",
  },
]

export default function FaqSection() {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-400">Have questions? We're here to help.</p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white hover:text-purple-400">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

