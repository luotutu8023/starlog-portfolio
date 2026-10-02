"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon, GridIcon, ListIcon, MechaMark, PlusIcon, SearchIcon } from "@/components/icons";
import { ProjectCover } from "@/components/mecha-visuals";
import { projectCategories, projectCategoryCodes, type Project } from "@/lib/projects";

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("全部");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      const target = event.target;
      const isTyping = target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));
      if (event.key === "/" && !isTyping && !event.metaKey && !event.ctrlKey && !event.altKey) { event.preventDefault(); searchRef.current?.focus(); }
      if (event.key === "Escape" && document.activeElement === searchRef.current) searchRef.current?.blur();
    }
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const filtered = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase();
    return projects.filter((project) => {
      const searchable = [project.title, project.englishTitle, project.summary, project.category, ...project.tags].join(" ").toLocaleLowerCase();
      return (category === "全部" || project.category === category) && (!keyword || searchable.includes(keyword));
    }).sort((a, b) => (b.updatedAt ?? b.date).localeCompare(a.updatedAt ?? a.date) || b.number.localeCompare(a.number));
  }, [category, projects, query]);

  return <div className="project-explorer">
    <div className="explorer-toolbar">
      <div className="filter-list" role="group" aria-label="筛选作品分类">{projectCategories.map((item) => <button className={`filter-button ${category === item ? "is-active" : ""}`} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} key={item}>{item}<span>{String(item === "全部" ? projects.length : projects.filter((project) => project.category === item).length).padStart(2, "0")}</span></button>)}</div>
      <label className="search-field"><SearchIcon /><span className="sr-only">搜索作品</span><input ref={searchRef} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索作品 / 技术关键词" /><kbd>/</kbd></label>
      <div className="view-controls" role="group" aria-label="作品展示方式"><button type="button" aria-label="网格视图" aria-pressed={view === "grid"} className={view === "grid" ? "is-active" : ""} onClick={() => setView("grid")}><GridIcon /></button><button type="button" aria-label="列表视图" aria-pressed={view === "list"} className={view === "list" ? "is-active" : ""} onClick={() => setView("list")}><ListIcon /></button></div>
    </div>
    <div className="result-heading" aria-live="polite"><span><i className="status-light" /> 检索到 <strong>{String(filtered.length).padStart(2, "0")}</strong> 件作品</span><span>ORDER BY / 最近更新</span></div>
    {filtered.length ? <div className={`project-grid ${view === "list" ? "list-view" : ""}`}>
      {filtered.map((project) => <Link className="project-card panel" href={`/projects/${project.slug}`} key={project.slug}>
        <ProjectCover project={project} />
        <div className="project-card-content"><div className="project-meta"><span className="project-category">{project.category} / {projectCategoryCodes[project.category]}</span><span>{project.updatedAt ?? project.date}</span></div><div className="project-title-row"><h3>{project.title}</h3><span className="card-arrow"><ArrowUpRightIcon /></span></div><p>{project.summary}</p><div className="project-bottom"><div className="tag-list">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-status"><i className="status-light" /> {project.status}</span></div></div>
      </Link>)}
      {view === "grid" && category === "全部" && !query.trim() && <a className="future-card panel" href="#trajectory"><div className="future-header"><span>UNIT_002 // AWAITING ASSEMBLY</span><PlusIcon /></div><div className="future-blueprint" aria-hidden="true"><div /><MechaMark /><span>+</span></div><div className="future-copy"><span className="micro-label">NEXT CREATIVE MISSION</span><h3>下一个想法，<br />等待<span>启动。</span></h3><p>新作品将在这里归档。先看看接下来想探索的方向。</p></div><span className="future-action">查看探索协议 <ArrowUpRightIcon /></span><span className="hazard-stripe" aria-hidden="true" /></a>}
    </div> : <div className="empty-state panel" role="status"><SearchIcon /><span className="micro-label">NO MATCHING UNIT</span><h3>这个分类还没有匹配的作品</h3><p>换个关键词或分类试试，新的记录会陆续进入机库。</p><button className="button button-ghost" type="button" onClick={() => { setQuery(""); setCategory("全部"); }}>查看全部作品 <ArrowUpRightIcon /></button></div>}
  </div>;
}
