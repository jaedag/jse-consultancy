import GridLayout from "@/components/grid-layout"
import HeroBackground from "@/components/hero-background"
import MaxWidthWrapper from "@/components/max-width-wrapper"
import ServiceCard from "@/components/service-card"
import SlideInText from "@/components/ui/slide-in-text"
import SlideRight from "@/components/ui/slide-right"

const data = [
    {
        heading: "Operational",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vel cumque. Soluta tempora excepturi culpa expedita labore praesentium quibusdam, aspernatur voluptatem obcaecati beatae voluptatibus ad eius reiciendis pariatur tenetur nisi!"
    },
    {
        heading: "Tactical",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vel cumque. Soluta tempora excepturi culpa expedita labore praesentium quibusdam, aspernatur voluptatem obcaecati beatae voluptatibus ad eius reiciendis pariatur tenetur nisi!"
    },
    {
        heading: "Strategic",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vel cumque. Soluta tempora excepturi culpa expedita labore praesentium quibusdam, aspernatur voluptatem obcaecati beatae voluptatibus ad eius reiciendis pariatur tenetur nisi!"       
    },

]



export default function Assessment() {
    return (
        <section className="w-full grow">
            <HeroBackground>
                <MaxWidthWrapper>
                    <div className="text-3xl md:text-7xl font-bold text-center mb-4">
                        Assessment
                    </div>
                </MaxWidthWrapper>
            </HeroBackground>
            <MaxWidthWrapper>
                <SlideInText>
                <h1 className="text-2xl md:text-5xl font-bold text-center mt-6 md:mt-12 mb-4">Intelligence & Threat assessment</h1>
                </SlideInText>
                <GridLayout>
                    {data.map((item, idx) => (
                            <SlideRight key={idx}>
                            <ServiceCard heading={item.heading} description={item.description} />
                            </SlideRight>
                    ))}
                </GridLayout>
            </MaxWidthWrapper>
        </section>
    )
}