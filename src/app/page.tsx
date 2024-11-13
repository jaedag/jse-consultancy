
import { ContainerScroll } from "@/components/container-scroll";
import HeroMapBackground from "@/components/hero-map-background";
import ImageCard from "@/components/image-card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Quote } from "@/components/quote";
import SlideInText from "@/components/slide-in-text";


const cardData = [
  {
    title: "Assessment",
    description: "Intelligence & Threat assessment",
    src: "/assets/pexels-photo-5256523.webp",
    points: [
      "Operational",
      "Tactical",
      "Strategic"
    ]
  },
  {
    title: "Advisory",
    description: "Sub-Saharan Africa Affairs Specialism",
    src: "/assets/free-photo.jpeg",
    points: [
      "Political",
      "Economic",
      "Social",
      "Technological",
      "Environmental",
      "Legal",
      "Organisational"
    ]
  },
  {
    title: "Assistance",
    description: "Consulting / supporting services",
    src: "/assets/pexels-photo-12903148.webp",
    points: [
      "Setting up Threat Assessment Team",
      "Intelligence & Security Assessment Training",
      "Evolving Global Security Landscape (country specific)",
      "Government Policies (country specific) & Impact on Business Activities"
    ]
  }
];

export default function Home() {
  return (
    <div>
      <section className="w-full">
        <HeroMapBackground>
          <MaxWidthWrapper>
        <div className="text-3xl md:text-7xl font-bold text-center mb-4">
        JSE Intelligence & Security Consultancy
        </div>
            <div className="text-center mt-10">
              <p className="font-extralight text-sm md:text-4xl text-white"> Thinking of outsourcing your company&apos;s intelligence collection & analysis to help protect your people, brand & assets for a competitive rate? Then look no further...</p>
        </div>
          </MaxWidthWrapper>
        </HeroMapBackground>
      </section>
      <section className="">
        <div className="flex flex-col overflow-hidden">

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black">
              Our Priorities <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                The 3A&apos;s
              </span>
            </h1>
          </>
        }
          >
            <div className="flex justify-center gap-10 flex-wrap mt-5">
              {cardData.map((card, index) => (
                <ImageCard key={index} card={card} />
              ))}
             
            </div>
          </ContainerScroll>
        </div>
      </section>
      <section>
        <SlideInText>
          <MaxWidthWrapper>
          <h1 className="text-4xl md:text-6xl font-semibold text-black  text-center my-5">
            Our Promise
          </h1>
          <p className="text-black">
            JSE Intelligence & Security Consultancy promises to be reliable, dependable, attention - to - detail, flexible, competitive, and most importantly adaptable to suit your business&apos;s requirement by offering the best services. This is a forward-looking consulting firm with extensive network across various Governments Departments; Corporate World; Media; NGOs; and Academia in most of the challenging terrains worldwide, and therefore able to offer steadfast service. 
          </p>
          </MaxWidthWrapper>
        </SlideInText>
        <div className="flex justify-center mt-10 md:justify-end">
        <Quote>
        Our Stability & Success Is Built On The &quot;CHIEF CORNERSTONE&quot;
        </Quote>
        </div>
      </section>

    </div>
  )
}






