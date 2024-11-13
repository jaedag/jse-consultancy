"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <div
    className="h-auto flex items-center justify-center relative p-2 md:p-20"
    ref={containerRef}
    >
      <div
        className="py-5 md:pb-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
        >
        <Heading translate={translate} titleComponent={titleComponent} />
          {children}
      </div>
    </div>
  );
};

export const Heading = ({ translate , titleComponent }: { translate: MotionValue<number>; titleComponent: React.ReactNode }) => {

  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

