import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function MechaMark(props: IconProps) {
  return <svg viewBox="0 0 40 44" fill="none" aria-hidden="true" {...props}><path d="M20 2 37 10l-3 22-14 10L6 32 3 10 20 2Z" stroke="currentColor" strokeWidth="1.6"/><path d="m11 13 7 5 2-9 2 9 7-5-2 13-7 8-7-8-2-13Z" stroke="currentColor" strokeWidth="1.6"/><path d="m13 21 5 2-2 4-3-6Zm14 0-5 2 2 4 3-6Z" fill="currentColor"/><path d="m18 28 2-3 2 3-2 4-2-4Z" fill="#ff315b"/></svg>;
}

export function TerminalIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="M3 5h18v14H3zM7 9l3 3-3 3m6 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>;
}

export function TargetIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M12 1v4m0 14v4M1 12h4m14 0h4" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

export function GridIcon(props: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}><path d="M3 3h5v5H3zm9 0h5v5h-5zM3 12h5v5H3zm9 0h5v5h-5z" stroke="currentColor" strokeWidth="1.3"/></svg>;
}

export function ListIcon(props: IconProps) {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}><path d="M3 4h2m3 0h9M3 10h2m3 0h9M3 16h2m3 0h9" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

export function BoltIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>;
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M4.5 15.5 15 5M6.5 5H15v8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="m13.2 13.2 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M16 2.5c.9 8.4 4.1 11.6 13.5 13.5C20.1 17.9 16.9 21.1 16 29.5 15.1 21.1 11.9 17.9 2.5 16 11.9 14.1 15.1 10.9 16 2.5Z" fill="currentColor" />
      <circle cx="25.7" cy="6.3" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M10 3.5v13M3.5 10h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
