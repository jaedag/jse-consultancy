import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type Card = {
    src: string;
    title: string;
    description: string;
    points?: string[];
  };
export default function ImageCard ({
    card,
  }: {
    card: Card;
  }){
   
    return (
        <div
          className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 min-w-32 overflow-hidden flex flex-col items-start justify-start relative z-10 cursor-pointer shadow-lg"
        >
          <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/80 via-transparent to-transparent z-30 pointer-events-none" />
          <div className="relative z-40 p-8 group">
            <p
              className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
            >
              {card.title}
            </p>
            <p
              className="text-white text-sm md:text-base font-medium font-sans text-left"
            >
              {card.description}
            </p>
          </div>
          {card.points && 
              <ul className="peer text-white text-sm md:text-base font-medium font-sans text-left z-10 mt-auto bg-black/50 p-4 w-full h-[50%]">{card.points.map((point, idx) => <li key={idx}>• {point}</li>) }</ul>
          }
          <BlurImage
            src={card.src}
            alt={card.title}
                fill
            className="object-cover absolute z-10 inset-0 object-center transition duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm"
            />
        </div>
    );
};
  
export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
  }: ImageProps) => {

    return (
      <Image
        className={cn(
          "transition duration-300",
          className
        )}
        src={src}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        blurDataURL={typeof src === "string" ? src : undefined}
        alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
      />
    );
  };