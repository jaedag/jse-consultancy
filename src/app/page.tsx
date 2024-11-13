import { ContainerScroll } from '@/components/container-scroll'
import HeroMapBackground from '@/components/hero-map-background'
import ImageCard from '@/components/image-card'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import { Quote } from '@/components/quote'
import SlideInText from '@/components/slide-in-text'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const cardData = [
  {
    title: 'Assessment',
    description: 'Intelligence & Threat assessment',
    src: '/assets/pexels-photo-5256523.webp',
    points: ['Operational', 'Tactical', 'Strategic'],
  },
  {
    title: 'Advisory',
    description: 'Sub-Saharan Africa Affairs Specialism',
    src: '/assets/free-photo.jpeg',
    points: [
      'Political',
      'Economic',
      'Social',
      'Technological',
      'Environmental',
      'Legal',
      'Organisational',
    ],
  },
  {
    title: 'Assistance',
    description: 'Consulting / supporting services',
    src: '/assets/pexels-photo-12903148.webp',
    points: [
      'Setting up Threat Assessment Team',
      'Intelligence & Security Assessment Training',
      'Evolving Global Security Landscape (country specific)',
      'Government Policies (country specific) & Impact on Business Activities',
    ],
  },
]

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
              <TextGenerateEffect
                className="text-sm md:text-2xl text-white"
                filter={false}
                duration={4}
                staggerNum={0.1}
                words="Thinking of outsourcing your company's intelligence collection & analysis to help protect your people, brand & assets for a competitive rate?"
              />
              <TextGenerateEffect
                className="text-sm md:text-4xl text-blue-500"
                filter={true}
                duration={4}
                staggerNum={0.5}
                words="Then look no further..."
              />
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
              JSE Intelligence & Security Consultancy promises to be reliable,
              dependable, attention - to - detail, flexible, competitive, and
              most importantly adaptable to suit your business&apos;s
              requirement by offering the best services. This is a
              forward-looking consulting firm with extensive network across
              various Governments Departments; Corporate World; Media; NGOs; and
              Academia in most of the challenging terrains worldwide, and
              therefore able to offer steadfast service.
            </p>
          </MaxWidthWrapper>
        </SlideInText>
        <div className="flex justify-center mt-10 md:justify-end">
          <Quote>
            MOTTO: Our Stability & Success Is Built On The &quot;CHIEF
            CORNERSTONE&quot;
          </Quote>
        </div>
      </section>
      <section className="bg-gray-800 bg-opacity-90 flex flex-col md:flex-row justify-center items-center  z-10  mt-10 py-6 gap-4">
        <span className="mr-5 text-white font-semibold text-lg">
          Membership subscription for access to Threat Assessments
        </span>
        <a href="mailto:info@jsconsultancyis.com">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Sign Up Now!
            </span>
          </button>
        </a>
      </section>
    </div>
  )
}
