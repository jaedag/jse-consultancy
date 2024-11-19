import GridLayout from "@/components/grid-layout"
import HeroBackground from "@/components/hero-background"
import MaxWidthWrapper from "@/components/max-width-wrapper"
import ServiceCard from "@/components/service-card"
import SlideInText from "@/components/ui/slide-in-text"
import SlideRight from "@/components/ui/slide-right"

const data = [
    {
        heading: "Political",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vel cumque. Soluta tempora excepturi culpa expedita labore praesentium quibusdam, aspernatur voluptatem obcaecati beatae voluptatibus ad eius reiciendis pariatur tenetur nisi!"
    },
    {
        heading: "Economic",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vel cumque. Soluta tempora excepturi culpa expedita labore praesentium quibusdam, aspernatur voluptatem obcaecati beatae voluptatibus ad eius reiciendis pariatur tenetur nisi!"
    },
    {
        heading: "Social",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vel cumque. Soluta tempora excepturi culpa expedita labore praesentium quibusdam, aspernatur voluptatem obcaecati beatae voluptatibus ad eius reiciendis pariatur tenetur nisi!"       
    },
    {
        heading: "Technological",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vel cumque. Soluta tempora excepturi culpa expedita labore praesentium quibusdam, aspernatur voluptatem obcaecati beatae voluptatibus ad eius reiciendis pariatur tenetur nisi!"       
    },
    {
        heading: "Environmental",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vel cumque. Soluta tempora excepturi culpa expedita labore praesentium quibusdam, aspernatur voluptatem obcaecati beatae voluptatibus ad eius reiciendis pariatur tenetur nisi!"       
    },
    {
        heading: "Legal",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vel cumque. Soluta tempora excepturi culpa expedita labore praesentium quibusdam, aspernatur voluptatem obcaecati beatae voluptatibus ad eius reiciendis pariatur tenetur nisi!"       
    },
    {
        heading: "Organisational",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, vel cumque. Soluta tempora excepturi culpa expedita labore praesentium quibusdam, aspernatur voluptatem obcaecati beatae voluptatibus ad eius reiciendis pariatur tenetur nisi!"       
    },

]


export default function Advisory() {
    return (
        <section className="w-full grow">
            <HeroBackground>
                <MaxWidthWrapper>
                    <div className="text-3xl md:text-7xl font-bold text-center mb-4">
                        Advisory
                    </div>
                </MaxWidthWrapper>
            </HeroBackground>
            <MaxWidthWrapper>
                <SlideInText>
                <h1 className="text-2xl md:text-5xl font-bold text-center mt-6 md:mt-12 mb-4">Sub-Saharan Africa Affairs Specialism</h1>
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