"use client";

import { useEffect, useState } from "react";

interface ZohoFormProps {
  src: string;
  label?: string;
  height?: string;
}

export default function ZohoForm({ src: baseFormUrl, label = "Zoho Form", height = "900px" }: ZohoFormProps) {
  const [iframeSrc, setIframeSrc] = useState(baseFormUrl);

  useEffect(() => {
    const gclid = document.cookie.match(/(?:^|; )gclid=([^;]+)/)?.[1];
    if (gclid) {
      const sep = baseFormUrl.includes("?") ? "&" : "?";
      setIframeSrc(`${baseFormUrl}${sep}gclid=${encodeURIComponent(gclid)}`);
    }
  }, [baseFormUrl]);

  return (
    <div className="w-full overflow-hidden">
      <iframe
        aria-label={label}
        frameBorder="0"
        style={{
          minHeight: height,
          height: "auto",
          width: "100%",
          border: "none",
          transition: "all 0.5s ease",
        }}
        src={iframeSrc}
      />
    </div>
  );
}
