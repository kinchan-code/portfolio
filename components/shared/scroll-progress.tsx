"use client";

import { useEffect, useRef } from "react";

function readScrollProgress() {
  const scrollingElement = document.scrollingElement ?? document.documentElement;
  const { scrollTop, scrollHeight, clientHeight } = scrollingElement;
  const maxScroll = scrollHeight - clientHeight;

  if (maxScroll <= 0) {
    return 1;
  }

  // Subpixel / rubber-band: treat the true bottom as complete
  if (scrollTop + clientHeight >= scrollHeight - 2) {
    return 1;
  }

  return Math.min(1, Math.max(0, scrollTop / maxScroll));
}

export function ScrollProgress() {
  const barRef = useRef<HTMLProgressElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const bar = barRef.current;
      if (!bar) {
        return;
      }

      bar.value = readScrollProgress() * 100;
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    const resizeObserver = new ResizeObserver(onScrollOrResize);
    resizeObserver.observe(document.documentElement);
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <progress
      ref={barRef}
      max={100}
      value={0}
      aria-label="Reading progress"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 w-full appearance-none border-0 bg-transparent [&::-moz-progress-bar]:bg-brand [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-brand"
    />
  );
}
