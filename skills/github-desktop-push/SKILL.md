---
name: github-desktop-push
description: Use when this portfolio project needs to publish local website changes through GitHub Desktop instead of PowerShell. Covers checking build status, keeping generated folders out of commits, committing clear snapshots, and pushing to GitHub so Vercel can redeploy.
---

# GitHub Desktop Push

Use this workflow for `D:\Programmes\个人介绍网站` when the user wants to update the live Vercel site but prefers GitHub Desktop over PowerShell.

## Before Push

1. Keep content edits in `data/profile.ts` when possible.
2. Run `npm.cmd run build` before publishing meaningful changes.
3. Do not commit `node_modules/`, `.next/`, `.npm-cache/`, `.env*`, or raw research/source folders unless the user explicitly asks.
4. Treat `竞赛内容/` as local source material, not a deploy asset.

## GitHub Desktop Steps

1. Open GitHub Desktop.
2. Choose the repository `个人介绍网站`.
3. Check the changed files list.
4. Leave deploy/source code files selected, such as `app/`, `components/`, `data/`, `public/`, config files, and work notes.
5. Uncheck local-only folders such as `竞赛内容/` if they appear.
6. Write a short commit summary, for example `Update mobile layout`.
7. Click `Commit to <current branch>`.
8. Click `Push origin`.

## After Push

Vercel should redeploy automatically from GitHub. Check the Vercel deployment status, then verify:

- `https://www.gao-hongfei-portfolio.website/`
- Mobile viewport on a real phone or browser device toolbar.
