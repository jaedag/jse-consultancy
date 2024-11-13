import Card from "@/components/card";
import { ContainerScroll } from "@/components/container-scroll";

import { HeroBackground } from "@/components/hero-background";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SlideInText from "@/components/slide-in-text";
import TextEffect from "@/components/text-effect";


export default function Home() {
  return (
    <div>
      <section className="w-full h-[90%]">
        <HeroBackground>
          <MaxWidthWrapper>
        <div className="text-3xl md:text-7xl font-bold text-center mb-4">
        JSE Intelligence & Security Consultancy
        </div>
            <div className="text-center mt-10">
              <TextEffect className="font-extralight text-sm md:text-4xl" words="Thinking of outsourcing your company's intelligence collection & analysis to help protect your people, brand & assets for a competitive rate? Then look no further..." />
        </div>
          </MaxWidthWrapper>
        </HeroBackground>
      </section>
      <section className="">
      <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Our Priorities <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                The 3A&apos;s
              </span>
            </h1>
          </>
        }
          >
            <div className="flex flex-col justify-center gap-10">
              <Card>
                  <h1 className="text-2xl font-semibold text-black dark:text-white">
                    Assessment
                    </h1>
                    <p className="text-black dark:text-white italic">
                    Intelligence & Threat assessment
                </p>
                <ul>
                  <li className="text-black dark:text-white">
                    Operational
                    </li>
                  <li className="text-black dark:text-white">
                  Tactical
                    </li>
                  <li className="text-black dark:text-white">
                  Strategic
                    </li>
                    </ul>                  
                </Card>
                <Card>
                <h1 className="text-2xl font-semibold text-black dark:text-white">
                    Advisory
                    </h1>
                    <p className="text-black dark:text-white italic">
                    Sub-Saharan Africa Affairs Specialism
                </p>
                <ul>
                  <li className="text-black dark:text-white">
                  Political
                    </li>
                  <li className="text-black dark:text-white">
                  Economic
                    </li>
                  <li className="text-black dark:text-white">
                  Social
                    </li>
                  <li className="text-black dark:text-white">
                  Technological
                    </li>
                  <li className="text-black dark:text-white">
                  Environmental
                    </li>
                  <li className="text-black dark:text-white">
                  Legal
                    </li>
                  <li className="text-black dark:text-white">
                  Organisational
                    </li>
                    </ul> 
              </Card>
                <Card>
                <h1 className="text-2xl font-semibold text-black dark:text-white">
                    Assistance
                    </h1>
                    <p className="text-black dark:text-white italic">
                    Consulting / supporting services
                </p>
                <ul>
                  <li className="text-black dark:text-white">
                  Setting up Threat Assessment Team

                    </li>
                  <li className="text-black dark:text-white">
                  Intelligence & Security Assessment Training
                    </li>
                  <li className="text-black dark:text-white">
                  Evolving Global Security Landscape (country specific)
                    </li>
                  <li className="text-black dark:text-white">
                    Government Policies (country specific) & Impact on Business Activities
                    </li>
                    </ul> 
              </Card>
            </div>
          </ContainerScroll>
        </div>
      </section>
      <section>
        <SlideInText>
          <MaxWidthWrapper>
          <h1 className="text-4xl md:text-6xl font-semibold text-black dark:text-white text-center mb-10">
            Our Promise
          </h1>
          <p className="text-black dark:text-white">
            JSE Intelligence & Security Consultancy promises to be reliable, dependable, attention - to - detail, flexible, competitive, and most importantly adaptable to suit your business&apos;s requirement by offering the best services. This is a forward-looking consulting firm with extensive network across various Governments Departments; Corporate World; Media; NGOs; and Academia in most of the challenging terrains worldwide, and therefore able to offer steadfast service. 
          </p>
          </MaxWidthWrapper>
          </SlideInText>
      </section>
    </div>
  )
}






