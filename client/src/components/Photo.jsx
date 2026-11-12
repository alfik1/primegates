import { useState } from "react";

export default function Photo({ src, art, alt, className, fallback, hideIfMissing }) {
  const [failed, setFailed] = useState(false);

  const url = art
    ? `data:image/svg+xml;utf8,${encodeURIComponent(art)}`
    : src;

  if (!url || failed) {
    if (hideIfMissing) return null;
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div className={className}>
      <img
        src={url}
        alt={alt}
        onError={() => setFailed(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}