"use client";

import React from 'react';

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip-up'
  | 'flip-down'
  | 'slide-up'
  | 'slide-down';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
  offset?: number;
}

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  duration,
  className = '',
  triggerOnce = true,
  offset,
}: AnimatedSectionProps) {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-once={triggerOnce}
      data-aos-offset={offset}
      className={className}
    >
      {children}
    </div>
  );
}
