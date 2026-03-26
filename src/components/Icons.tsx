type IconProps = {
  className?: string;
};

export function ToolIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M9 3h6l1 3h4v2h-1l-2 12H7L5 8H4V6h4l1-3Zm1.5 3h3l-.3-1h-2.4l-.3 1ZM8.7 8l1.5 10h3V8H8.7Zm6.3 10 1.5-10H15v10Z" fill="currentColor" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M11 3h2v8.2l2.9-2.9 1.4 1.4-5.3 5.3-5.3-5.3 1.4-1.4 2.9 2.9V3Zm-7 13h16v5H4v-5Zm2 2v1h12v-1H6Z" fill="currentColor" />
    </svg>
  );
}

export function DocIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M6 2h8l4 4v16H6V2Zm8 1.5V7h3.5L14 3.5ZM8 9h8v2H8V9Zm0 4h8v2H8v-2Zm0 4h6v2H8v-2Z" fill="currentColor" />
    </svg>
  );
}
