"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MechaMark, TerminalIcon } from "@/components/icons";

const navigation = [
  { id: "command", label: "指挥舱", english: "COMMAND" },
  { id: "projects", label: "作品机库", english: "HANGAR" },
  { id: "journal", label: "开发日志", english: "INTEL" },
  { id: "about", label: "关于本站", english: "PROFILE" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [active, setActive] = useState("command");

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-15% 0px -55% 0px", threshold: [0, .1, .5] });
    navigation.forEach(({ id }) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, [pathname]);

  return <header className="site-header">
    <div className="shell header-inner">
      <Link className="brand" href="/" aria-label="Starlog 创作指挥舱，返回首页"><span className="brand-mark"><MechaMark /></span><span className="brand-name">STARLOG<span className="brand-slash"> //</span><small>CREATIVE COMMAND SYSTEM</small></span></Link>
      <nav className="main-nav" aria-label="主导航">{navigation.map((item) => <Link key={item.id} href={`/#${item.id}`} className={(pathname === "/" ? active : "projects") === item.id ? "is-active" : ""} onClick={() => setActive(item.id)} aria-current={(pathname === "/" ? active : "projects") === item.id ? "location" : undefined}><span>{item.label}</span><small>{item.english}</small></Link>)}</nav>
      <div className="header-status"><TerminalIcon /><span>ARCHIVE SYSTEM<small><i className="status-light" /> READY TO EXPLORE</small></span></div>
    </div>
  </header>;
}
