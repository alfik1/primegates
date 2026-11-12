"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  src?: string; // real photo (shown first)
  art?: string; // built-in drawing (shown if the photo is missing)
  alt?: string;
  className?: string;
  fallback?: ReactNode; // shown if neither exists
};

export default function Photo({ src, art, alt = "", className = "", fallback = null }: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (src && !failed) {
    return (
      <div className={`photo ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={ref} src={src} alt={alt} onError={() => setFailed(true)} />
      </div>
    );
  }
  if (art) {
    return <div className={`photo ${className}`} role="img" aria-label={alt} dangerouslySetInnerHTML={{ __html: art }} />;
  }
  return <div className={`photo ${className}`}>{fallback}</div>;
}