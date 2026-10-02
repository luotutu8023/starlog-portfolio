import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, ArrowUpRightIcon, TerminalIcon } from "@/components/icons";
import { ProjectCover } from "@/components/mecha-visuals";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { journal } from "@/lib/journal";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : { title: "作品未找到" };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const entries = journal.filter((entry) => entry.projectSlug === project.slug);

  return <>
    <a className="skip-link" href="#story">跳到作品介绍</a>
    <SiteHeader />
    <main className="project-detail shell" id="top">
      <nav className="breadcrumbs" aria-label="面包屑导航"><Link href="/">指挥舱</Link><span>/</span><Link href="/#projects">作品机库</Link><span>/</span><span aria-current="page">UNIT_{project.number}</span></nav>
      <div className="detail-intro"><div><span className="section-kicker">UNIT_{project.number} // {project.englishTitle}</span><h1>{project.title}</h1><p>{project.description}</p><div className="detail-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="detail-index"><span className="micro-label">ARCHIVE IDENTIFIER</span><strong>{project.number}<span> / {String(projects.length).padStart(3, "0")}</span></strong><span><i className="status-light" /> {project.status}</span></div></div>
      <div className="detail-cover panel"><ProjectCover project={project} large /></div>
      <div className="detail-info panel"><div><span>ARCHIVED // 首次记录</span><strong>{project.date}</strong></div><div><span>UPDATED // 最近更新</span><strong>{project.updatedAt ?? project.date}</strong></div><div><span>CATEGORY // 作品类型</span><strong>{project.category}</strong></div><div><span>REVISION // 当前版本</span><strong className="cyan">REV.{project.revision ?? "01"}</strong></div></div>
      {(project.liveUrl || project.sourceUrl) && <div className="detail-links">{project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">访问作品 <ArrowUpRightIcon /></a>}{project.sourceUrl && <a className="button button-ghost" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">查看源码 <ArrowUpRightIcon /></a>}</div>}
      <section className="detail-body section" id="story"><div className="detail-body-heading"><span className="section-kicker">MISSION BRIEF // 项目记录</span><h2>从想法，<br />到<span>实现。</span></h2><p>{project.summary}</p><span className="detail-register">BUILD / LEARN / ITERATE</span></div><div className="detail-body-content"><section className="panel"><div className="panel-heading"><span>01 // 本次实现</span><TerminalIcon /></div><h3>这次做了什么</h3><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></section><section className="panel"><div className="panel-heading"><span>02 // 下一阶段</span><ArrowRightIcon /></div><h3>继续向前</h3><ul>{project.nextSteps.map((item) => <li key={item}>{item}</li>)}</ul></section></div></section>
      {entries.length > 0 && <section className="detail-history panel"><div className="panel-heading"><span><TerminalIcon /> 迭代记录</span><small>{String(entries.length).padStart(2, "0")} ENTRIES</small></div>{entries.map((entry) => <div className="detail-history-entry" key={entry.code}><time dateTime={entry.date.replaceAll(".", "-")}>{entry.date}</time><div><span className="micro-label cyan">{entry.code}</span><h3>{entry.title}</h3><p>{entry.description}</p></div><span className="journal-badge">{entry.kind}</span></div>)}</section>}
      <div className="detail-next"><span className="micro-label">END OF ARCHIVE_{project.number}</span><h2>下一次出击，<span>再见。</span></h2><Link className="button button-primary" href="/#projects">返回作品机库 <ArrowRightIcon /></Link></div>
    </main>
    <SiteFooter />
  </>;
}
