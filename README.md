# Starlog 创作指挥舱

一个以机甲驾驶舱和战术 HUD 为主题的中文个人作品站，用 Next.js App Router、React 和 TypeScript 构建，可直接作为 Vercel 项目部署。设计参考「机甲风网站原型」文件夹中的原型、配色与插画资料。

## 本地运行

需要 Node.js 20.9 或更新版本。

```bash
npm install
npm run dev
```

打开 <http://localhost:3000>。正式构建使用 `npm run build`。

## 添加作品

编辑 `lib/projects.ts` 中的 `projects` 数组，复制现有条目并修改 `slug`、标题、分类、`date`（首次记录，`YYYY.MM` 格式）、`updatedAt`（最近更新）、`revision`（版本编号）、描述、标签及详情内容。首页的搜索、分类、作品数量和 `/projects/[slug]` 详情页会自动使用这些数据，并按最近更新时间从新到旧排列。作品支持网格与列表切换；按 `/` 可聚焦搜索框。

如果有真实截图，把图片放进 `public/`，在作品条目里填写 `coverImage: "/文件名.png"` 和 `coverAlt`。有线上演示或源码时，可以填写 `liveUrl`、`sourceUrl`；详情页会自动显示链接。不填写封面时，页面使用机甲驾驶员主题插画。

## 开发日志与探索方向

编辑 `lib/journal.ts` 的 `journal` 数组添加真实迭代记录。`projectSlug` 对应作品条目的 `slug`，记录会出现在首页和对应作品详情页。`explorationDirections` 维护右侧探索协议面板中的三个方向。

主题图片已复制到 `public/images/`，使用本地资源，无需依赖原型中的 CDN 脚本或远程图片服务。站点尊重系统的减少动态效果偏好。

目前收录的是本站自身；「探索方向」展示未来计划，不作为已完成作品。

## 部署到 Vercel

将此目录推送到 Git 仓库，在 [Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs) 中导入仓库，框架选择 Next.js（通常会自动识别），然后点击 Deploy。本站目前不需要环境变量或外部服务。后续绑定域名后，可按需要补充站点地址、真实项目链接和分享图。
