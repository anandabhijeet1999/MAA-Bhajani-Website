import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.55l.4-3h-2.95V8.65c0-.86.24-1.45 1.49-1.45H17V4.5c-.27-.04-1.21-.12-2.3-.12-2.28 0-3.84 1.39-3.84 3.94V10.5H8.3v3h2.56V21h2.64Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.4" cy="6.6" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.5 3.7a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM3 8.7h3v11.6H3V8.7Zm5.4 0h2.88v1.58h.04c.4-.76 1.39-1.58 2.86-1.58 3.06 0 3.62 2 3.62 4.6v6h-3v-5.32c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.39-2.05 2.82V20.3h-3V8.7Z" />
    </svg>
  );
}
