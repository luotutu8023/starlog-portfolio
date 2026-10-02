export type ProjectCategory = "网站" | "交互实验" | "学习笔记";

export type Project = {
  slug: string;
  number: string;
  title: string;
  englishTitle: string;
  category: ProjectCategory;
  status: string;
  date: string;
  updatedAt?: string;
  revision?: string;
  summary: string;
  description: string;
  tags: string[];
  coverImage?: string;
  coverAlt?: string;
  liveUrl?: string;
  sourceUrl?: string;
  highlights: string[];
  nextSteps: string[];
};

// 新作品只需在这里添加一项。首页筛选和详情页会自动更新。
export const projects: Project[] = [
  {
    slug: "starlog-portfolio",
    number: "001",
    title: "Starlog · 创作指挥舱",
    englishTitle: "STARLOG / PORTFOLIO",
    category: "网站",
    status: "持续迭代",
    date: "2026.09",
    updatedAt: "2026.10",
    revision: "02",
    summary: "为未来的 Codex 编程作品留一个好看、好找、也方便继续生长的地方。",
    description:
      "从一张空白画布开始，搭建属于自己的创作指挥舱。以机甲驾驶舱与战术 HUD 为视觉灵感，归档 Codex 学习中的作品，也记录每次从想法到实现的过程。",
    tags: ["Next.js", "TypeScript", "CSS", "Vercel Ready"],
    highlights: [
      "参考机甲 HUD 原型，使用青红配色、切角面板和驾驶舱插画建立新的视觉系统。",
      "作品列表支持关键词搜索与分类筛选，新增内容集中维护。",
      "使用 Next.js App Router，作品详情可生成独立页面。",
      "增加作品网格与列表切换、开发日志和可切换的探索方向面板。",
    ],
    nextSteps: [
      "持续补充真实作品、截图和开发心得。",
      "上线后添加正式域名与项目演示链接。",
      "根据实际记录需求扩展标签、时间线和内容管理方式。",
    ],
  },
];

export const projectCategories: Array<"全部" | ProjectCategory> = [
  "全部",
  "网站",
  "交互实验",
  "学习笔记",
];

export const projectCategoryCodes: Record<ProjectCategory, string> = {
  网站: "WEB ARCHIVE",
  交互实验: "INTERACTION LAB",
  学习笔记: "LEARNING NOTES",
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
