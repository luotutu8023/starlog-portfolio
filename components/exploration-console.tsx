"use client";

import { useState } from "react";
import { BoltIcon, ArrowRightIcon } from "@/components/icons";
import { explorationDirections } from "@/lib/journal";

export function ExplorationConsole() {
  const [active, setActive] = useState(0);
  const direction = explorationDirections[active];
  return <div className="exploration-console panel" id="trajectory">
    <div className="panel-heading"><span><BoltIcon /> 探索协议</span><small>NEXT OBJECTIVE</small></div>
    <div className="exploration-tabs" role="tablist" aria-label="探索方向">
      {explorationDirections.map((item, index) => <button id={`direction-tab-${item.id}`} role="tab" type="button" aria-selected={active === index} aria-controls={`direction-panel-${item.id}`} tabIndex={active === index ? 0 : -1} key={item.id} onClick={() => setActive(index)} onKeyDown={(event) => { if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) { event.preventDefault(); const next = event.key === "Home" ? 0 : event.key === "End" ? explorationDirections.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + explorationDirections.length) % explorationDirections.length; setActive(next); document.getElementById(`direction-tab-${explorationDirections[next].id}`)?.focus(); } }}>{item.number}<span>{item.label}</span></button>)}
    </div>
    <div className="exploration-content" role="tabpanel" id={`direction-panel-${direction.id}`} aria-labelledby={`direction-tab-${direction.id}`} key={direction.id}>
      <span className="micro-label cyan">{direction.english}</span><h3>{direction.title}</h3><p>{direction.description}</p>
      <ul>{direction.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}<ArrowRightIcon /></li>)}</ul>
      <div className="exploration-footer"><span className="status-light" /> PLANNED / 待探索方向</div>
    </div>
  </div>;
}
