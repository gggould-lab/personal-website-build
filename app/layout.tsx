import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gao Hongfei | Personal Portfolio",
  description: "A personal website about digital trade, market research, and learning by doing."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
