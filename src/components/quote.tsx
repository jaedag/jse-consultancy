"use client";
import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import SlideInText from "./slide-in-text";

export function Quote({ children }: { children: React.ReactNode }) {
    return (
        <MaxWidthWrapper>
            <blockquote className="p-4 mb-4 border-l-4 border-gray-300">
                <svg
                className="mb-4 h-8 w-8 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <SlideInText>
                    <div style={{ width: "100%", backgroundColor: "rgba(240, 240, 240, 0.5)", color: "#666", fontStyle: "italic", padding: "10px 20px", borderLeft: "4px solid rgba(200, 200, 200, 0.7)", fontSize: "1.2em", opacity: 0.8 }}>
                    {children}
                    </div>
                </SlideInText>
            </blockquote>
        </MaxWidthWrapper>
  );
}



