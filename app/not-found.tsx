import Link from "next/link";
import { ArrowRightIcon, TargetIcon } from "@/components/icons";

export default function NotFound() {
  return <main className="not-found shell"><TargetIcon /><span className="micro-label cyan">404 // UNIT NOT FOUND</span><h1>这个坐标暂时没有作品。</h1><p>可能是链接写错了，回到指挥舱继续探索吧。</p><Link className="button button-primary" href="/">返回指挥舱 <ArrowRightIcon /></Link></main>;
}
