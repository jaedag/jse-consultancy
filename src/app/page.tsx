import { HeroBackground } from "@/components/hero-background";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="w-full h-[90%]">
        <HeroBackground>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-3xl md:text-7xl font-bold text-center">
        JSE Intelligence & Security Consultancy
        </div>
        <div className="font-extralight text-base md:text-2xl py-4">
        Thinking of outsourcing your company's intelligence collection & analysis to help protect your people, brand & assets for a competitive rate? Then look no further....
        </div>
          </div>
        </HeroBackground>
        </div>
    </section>
  )
}
