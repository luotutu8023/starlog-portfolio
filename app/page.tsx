import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, BoltIcon, MechaMark, PlusIcon, TargetIcon, TerminalIcon } from "@/components/icons";
import { ExplorationConsole } from "@/components/exploration-console";
import { RadarVisual } from "@/components/mecha-visuals";
import { ProjectExplorer } from "@/components/project-explorer";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { journal } from "@/lib/journal";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const categoryCount = new Set(projects.map((project) => project.category)).size;
  const latest = [...projects].sort((a, b) => (b.updatedAt ?? b.date).localeCompare(a.updatedAt ?? a.date))[0];

  return <>
    <a className="skip-link" href="#main-content">跳到主要内容</a>
    <SiteHeader />
    <main className="shell" id="main-content">
      <div id="top" />
      <section className="command-section" id="command" aria-labelledby="hero-title">
        <div className="system-rail"><span><i className="status-light" /> PERSONAL DEVELOPMENT ARCHIVE</span><span>SECTOR_01 <i /> CODEX × CURIOSITY</span><span className="rail-version">INTERFACE REV.02</span></div>
        <div className="command-grid">
          <div className="command-stage panel">
            <Image className="hero-image" src="/images/pilot-ace.png" alt="机甲驾驶员坐在青红霓虹驾驶舱中，远处是未来城市与机甲" fill priority sizes="(max-width: 1000px) 100vw, 70vw" />
            <div className="hero-image-shade" aria-hidden="true" />
            <div className="stage-top"><span><TargetIcon /> CREATIVE COMMAND // 创作指挥舱</span><span>UNIT_01</span></div>
            <div className="hero-copy">
              <span className="hero-eyebrow"><i /> IDEAS LOADED. READY TO BUILD.</span>
              <h1 id="hero-title">从第一行代码，<br />到下一次<span>出击。</span></h1>
              <p>欢迎来到我的创作指挥舱。这里归档我与 Codex 一起完成的作品，记录灵感、尝试，以及每次向前的迭代。</p>
              <div className="hero-actions"><Link className="button button-primary" href="#projects">进入作品机库 <ArrowUpRightIcon /></Link><Link className="button button-ghost" href="#journal">阅读开发日志 <ArrowRightIcon /></Link></div>
            </div>
            <div className="stage-bottom"><span><BoltIcon /> CURIOSITY: ALWAYS ARMED</span><span>BUILD / LEARN / REPEAT</span></div>
            <span className="stage-register" aria-hidden="true">+</span>
          </div>

          <aside className="operator-panel panel" aria-label="个人创作档案摘要">
            <div className="panel-heading"><span>OPERATOR_01</span><small>LEARNING MODE</small></div>
            <div className="operator-insignia"><Image src="/images/mecha-emblem.png" alt="青红霓虹机甲部队徽章" fill sizes="230px" /></div>
            <div className="operator-name"><span className="micro-label">CALLSIGN // 创作者</span><strong>STARLOG<span>_</span></strong><p>好奇心驱动 · 作品持续装载</p></div>
            <div className="operator-stats"><div><span>归档作品</span><strong>{String(projects.length).padStart(2, "0")}</strong></div><div><span>当前版本</span><strong>02<span> / REV</span></strong></div></div>
            <div className="operator-footer"><MechaMark /><span>从零开始<br /><strong>持续迭代中</strong></span><i className="status-light" /></div>
          </aside>

          <aside className="overview-panel panel" aria-label="探索状态">
            <div className="panel-heading"><span><TargetIcon /> 探索雷达</span><small>IDEA SCAN</small></div>
            <RadarVisual />
            <div className="radar-caption"><span>TRACKING 03 DIRECTIONS</span><span className="cyan">∞ POSSIBILITIES</span></div>
            <div className="overview-current"><span className="micro-label">CURRENT FOCUS // 当前记录</span><Link href={`/projects/${latest.slug}`}>{latest.title}<ArrowUpRightIcon /></Link><div><span className="status-light" /> {latest.status}<span>REV.{latest.revision ?? "01"}</span></div></div>
            <a className="overview-link" href="#trajectory">查看探索协议 <ArrowRightIcon /></a>
          </aside>
        </div>
        <div className="telemetry-strip">
          <div><span>01 / ARCHIVED</span><strong>{String(projects.length).padStart(2, "0")} <small>作品已归档</small></strong></div>
          <div><span>02 / CATEGORIES</span><strong>{String(categoryCount).padStart(2, "0")} <small>作品分类</small></strong></div>
          <div><span>03 / NEXT OBJECTIVES</span><strong>03 <small>探索方向</small></strong></div>
          <div><span>04 / LATEST TRANSMISSION</span><strong className="telemetry-date">{journal[0].date} <small>最近更新</small></strong></div>
        </div>
      </section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading"><div><span className="section-kicker">01 // PROJECT HANGAR</span><h2 id="projects-title">作品<span>机库</span><small>把想法，装配成现实。</small></h2></div><span className="section-index">{String(projects.length).padStart(3, "0")} UNIT(S) <PlusIcon /></span></div>
        <ProjectExplorer projects={projects} />
      </section>

      <section className="section journal-section" id="journal" aria-labelledby="journal-title">
        <div className="section-heading"><div><span className="section-kicker">02 // DEVELOPMENT INTEL</span><h2 id="journal-title">开发<span>日志</span><small>过程也值得被记录。</small></h2></div><span className="section-index">{String(journal.length).padStart(2, "0")} TRANSMISSIONS <TerminalIcon /></span></div>
        <div className="journal-grid"><div className="journal-list panel"><div className="panel-heading"><span><TerminalIcon /> 最近的记录</span><small>CHRONOLOGICAL LOG</small></div>{journal.map((entry, index) => <Link className="journal-entry" key={entry.code} href={`/projects/${entry.projectSlug}#story`}><div className="journal-entry-top"><time dateTime={entry.date.replaceAll(".", "-")}>{entry.date}</time><span className={index === 0 ? "journal-badge is-new" : "journal-badge"}>{entry.kind}</span></div><span className="journal-code">{entry.code}</span><h3>{entry.title}<ArrowUpRightIcon /></h3><p>{entry.description}</p></Link>)}<div className="journal-end"><span className="status-light" /> 每一次迭代，都是新的记录。<span>END OF LOG_</span></div></div><ExplorationConsole /></div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="about-panel panel"><div className="about-ident"><MechaMark /><span>PERSONAL ARCHIVE<br /><strong>CREATOR_01</strong></span><span className="about-serial">EST.2026</span></div><div className="about-copy"><span className="section-kicker">03 // BEHIND THE COMMAND</span><h2 id="about-title">好奇心就位。<br /><span>继续创造。</span></h2><p>这里是我的公开创作档案。我会收集用 Codex 学习编程时完成的项目，写下遇到的问题、做过的选择，以及下一步的想法。</p><p>不需要一次就完美。每完成一个作品，就比出发时走得更远一点。</p><div className="about-principles"><span>01 / 动手实践</span><span>02 / 理解过程</span><span>03 / 持续迭代</span></div></div><div className="about-callout"><span className="micro-label">NEXT MISSION</span><h3>下一件作品，<br />正在装载。</h3><Link className="text-link" href="#projects">返回作品机库 <ArrowUpRightIcon /></Link><span className="hazard-stripe" aria-hidden="true" /></div></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
