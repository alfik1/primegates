import { useState } from "react";

// src = real photo (shown first). art = built-in drawing (shown if the photo is missing).
export default function Photo({ src, art, alt = "", className = "", fallback = null, hideIfMissing = false }) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <div className={`photo ${className}`}>
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      </div>
    );
  }
  if (art) {
    return <div className={`photo ${className}`} role="img" aria-label={alt} dangerouslySetInnerHTML={{ __html: art }} />;
  }
  if (hideIfMissing) return null;
  return <div className={`photo ${className}`}>{fallback}</div>;
}