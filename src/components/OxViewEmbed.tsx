"use client";

import { useEffect, useRef } from "react";

const OXVIEW_BASE_URL = "https://sulcgroup.github.io/oxdna-viewer/";

function buildOxViewPreloadUrl() {
  const pageUrl = new URL(window.location.href);
  const pagePath = pageUrl.pathname.endsWith("/") ? pageUrl.pathname : `${pageUrl.pathname}/`;
  const baseUrl = `${pageUrl.origin}${pagePath}`;

  const configurationUrl = new URL("example/oxview-output.dat", baseUrl).toString();
  const topologyUrl = new URL("example/oxview-output.top", baseUrl).toString();

  return `${OXVIEW_BASE_URL}?configuration=${encodeURIComponent(configurationUrl)}&topology=${encodeURIComponent(topologyUrl)}`;
}

export function OxViewEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = buildOxViewPreloadUrl();
    }
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={OXVIEW_BASE_URL}
      title="Embedded oxView"
      style={{ width: "100%", minHeight: "440px", border: 0 }}
      loading="eager"
      allow="fullscreen"
    />
  );
}
