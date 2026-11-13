"use client";
import { useEffect, useRef, useState } from "react";

type Props = { src: string; poster?: string };

/* Background video for the hero banner.
   Plays automatically (muted + looped). It is skipped for visitors who
   prefer reduced motion or have "data saver" turned on. */
export default function HeroVideo({ src, poster }: Props) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && !nav.connection?.saveData) setShow(true);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; // browsers only allow autoplay when muted
    v.play().catch(() => {});
  }, [show]);

  if (!show) return null;

  return (
    <video
      ref={ref}
      className="hero-video"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}