import Image from "next/image";
import type { Project } from "@/lib/projects";

export function RadarVisual() {
  return (
    <div className="radar" aria-hidden="true">
      <div className="radar-sweep" />
      <svg viewBox="0 0 220 220" fill="none">
        <circle cx="110" cy="110" r="92" stroke="currentColor" strokeDasharray="2 5" opacity=".3" />
        <circle cx="110" cy="110" r="66" stroke="currentColor" opacity=".35" />
        <circle cx="110" cy="110" r="35" stroke="currentColor" opacity=".5" />
        <path d="M110 8v204M8 110h204" stroke="currentColor" opacity=".25" />
        <path d="m60 66 81 21-13 64-68-85Z" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".3" strokeDasharray="3 5" />
        <circle className="radar-blip" cx="60" cy="66" r="4" fill="currentColor" />
        <circle cx="141" cy="87" r="3" fill="#ff315b" />
        <circle cx="128" cy="151" r="3" fill="currentColor" />
        <text x="31" y="57" fill="currentColor" fontSize="9">WEB_01</text>
        <text x="149" y="81" fill="#ff8aa2" fontSize="9">AI_LAB</text>
        <text x="139" y="158" fill="currentColor" fontSize="9">EXP_03</text>
      </svg>
      <span className="radar-center" />
    </div>
  );
}

export function ProjectCover({ project, large = false }: { project: Project; large?: boolean }) {
  const src = project.coverImage ?? "/images/pilot-ace.png";
  return (
    <div className={`project-cover ${large ? "project-cover-large" : ""} ${project.coverImage ? "custom-cover" : "default-cover"}`}>
      <Image src={src} alt={project.coverAlt ?? "霓虹驾驶舱内的机甲驾驶员，作为作品档案主题插画"} fill sizes={large ? "(max-width: 1440px) 100vw, 1360px" : "(max-width: 700px) 100vw, 65vw"} priority={large} />
      <div className="cover-grid" aria-hidden="true" />
      <div className="cover-top"><span>UNIT // {project.number}</span><span>PORTFOLIO ARCHIVE</span></div>
      {!project.coverImage && <div className="cover-title" aria-hidden="true"><span>CREATIVE SYSTEM</span><strong>STARLOG<span>_</span></strong><small>BUILD. ITERATE. MAKE IT REAL.</small></div>}
      <div className="cover-bottom"><span>{project.englishTitle}</span><span>REV.{project.revision ?? "01"}</span></div>
      <span className="cover-cross" aria-hidden="true">+</span>
    </div>
  );
}
