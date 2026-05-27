# 工作备注：网站基本框架搭建

本次完成了个人介绍网站的基础框架搭建，项目定位为“个人介绍 + 经历展示 + 项目展示 + 联系入口”的单页个人网站。

已完成内容：

- 使用 Next.js App Router、React、TypeScript、Tailwind CSS 搭建项目。
- 完成深色极简风格首页，参考 Vercel / Linear 的清爽、克制、科技感视觉方向。
- 拆分 Navbar、动效、通用卡片等组件。
- 将个人信息、教育经历、实践经历、项目经历、校园经历、技能和联系方式集中到 `data/profile.ts`，方便后续编辑。
- 使用 `public/profile.png` 作为个人照片入口，预留 `public/resume.pdf` 作为简历下载入口。
- 完成基础响应式布局和 Framer Motion 轻量动效。
- 避免展示身份证号和完整手机号，文案保持真实、克制、学生成长型表达。

后续可继续优化：

- 上传正式 PDF 简历到 `public/resume.pdf`。
- 根据新实习、项目或竞赛经历更新 `data/profile.ts`。
- 接入 Vercel 部署，并绑定自定义域名。
