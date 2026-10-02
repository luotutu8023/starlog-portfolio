import Link from "next/link";
import { MechaMark } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link className="footer-brand" href="/"><MechaMark /><span>STARLOG <small>CREATIVE COMMAND SYSTEM</small></span></Link>
        <span className="footer-note"><i className="status-light" /> 好奇心已就位 · 持续迭代中</span>
        <span className="footer-copyright">© {new Date().getFullYear()} STARLOG / PERSONAL ARCHIVE</span>
        <a className="back-top" href="#top" aria-label="返回页面顶部">TOP ↑</a>
      </div>
    </footer>
  );
}
