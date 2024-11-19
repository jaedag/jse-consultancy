'use client'
import { cn } from '@/lib/utils'
import SlideInText from './ui/slide-in-text'

export default function HeroBackground({
  children, className
}: {
    children: React.ReactNode,
    className?: string
}) {
  return (
    <div className={cn("relative flex flex-col min-h-[50vh] md:h-[60vh] items-center justify-center text-white transition-bg", className )}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-black opacity-80 overflow-hidden"
        style={{
          backgroundImage: `url('/assets/hero-image.webp')`,
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
