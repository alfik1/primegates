"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
};

export default function Photo({ src, alt, className, fallback }: PhotoProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, [src]);

  return (
    <div className={className}>
      {failed ? (
        fallback
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      )}
    </div>
  );
}