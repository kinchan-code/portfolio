"use client";

import {
  useEffect,
  useRef,
  type PointerEvent,
  type ReactNode,
} from "react";

import {
  useMediaQuery,
  usePrefersReducedMotion,
} from "@/hooks/use-media-query.hooks";
import { cn } from "@/lib/utils";

interface TiltProps {
  children: ReactNode;
  className?: string;
  maxTiltDeg?: number;
  scale?: number;
}

const TILT_MEDIA = "(hover: hover) and (pointer: fine)";

export function Tilt({
  children,
  className,
  maxTiltDeg = 7,
  scale = 1.02,
}: Readonly<TiltProps>) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const canTilt = useMediaQuery(TILT_MEDIA);
  const enabled = canTilt && !shouldReduceMotion;
  const frameRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  const reset = () => {
    const node = frameRef.current;
    if (!node) {
      return;
    }

    node.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = frameRef.current;
    if (!node) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * (maxTiltDeg * 2);
    const rotateX = (0.5 - y) * (maxTiltDeg * 2);

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      node.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    });
  };

  return (
    <div
      className={cn("perspective-midrange", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      <div
        ref={frameRef}
        className="transform-3d will-change-transform motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out"
        style={{
          transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
