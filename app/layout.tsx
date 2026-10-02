import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Starlog 创作指挥舱 · Codex 作品档案",
    template: "%s | Starlog 创作指挥舱",
  },
  description: "以机甲驾驶舱为灵感的个人创作档案。归档 Codex 编程作品，记录开发过程与每一次迭代。",
  keywords: ["Codex", "作品集", "Next.js", "编程学习", "Starlog"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
