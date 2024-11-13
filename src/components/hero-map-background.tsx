'use client'
import SlideInText from './slide-in-text'

export default function HeroMapBackground({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col min-h-[50vh] md:h-[60vh] items-center justify-center text-white transition-bg mt-[4rem]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-black opacity-80 overflow-hidden"
        style={{
          backgroundImage: `url('/assets/nasa-1.jpg')`,
          zIndex: -2,
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-black  overflow-hidden"
        style={{
          opacity: 0.6,
          zIndex: -1,
        }}
      ></div>
      <SlideInText>{children}</SlideInText>
    </div>
  )
}
