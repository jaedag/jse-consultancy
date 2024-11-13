'use client'
import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import SlideInText from './slide-in-text'

export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <MaxWidthWrapper>
      <blockquote>
        <SlideInText>
          <div className="w-full bg-gray-200/50 text-gray-600 italic p-2.5 pl-5 border-l-4 border-gray-300/70 text-lg opacity-80">
            {children}
          </div>
        </SlideInText>
      </blockquote>
    </MaxWidthWrapper>
  )
}
