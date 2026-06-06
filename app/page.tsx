import Image from "next/image";
import { ArrowDown, Download, ExternalLink, Mail, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { MotionDiv, Reveal } from "@/components/Motion";
import { Card, Section, Tags } from "@/components/ui";
import {
  aboutCards,
  aboutIntro,
  education,
  experiences,
  leadership,
  profile,
  profileCard,
  projectSummary,
  projects,
  skills
} from "@/data/profile";

function PointText({ text }: { text: string }) {
  return <span>{text}</span>;
}

function SectionLead({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">{children}</p>;
}

export default function Home() {
  return (
    <main className="site-bg min-h-screen overflow-hidden">
      <div className="fine-grid pointer-events-none fixed inset-0" />
      <Navbar />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 sm:px-5 sm:pt-28">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Leadership />
        <Projects />
        <Skills />
        <Contact />
        <footer className="border-t border-line py-9 text-sm text-zinc-500">
          <div className="flex flex-col justify-between gap-2 text-xs leading-6 sm:flex-row sm:text-sm">
            <span>Gao Hongfei © 2026</span>
            <span>Personal portfolio for digital trade, market research and learning-by-doing practice.</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative grid gap-8 py-8 sm:py-10 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="mb-4 inline-flex max-w-full rounded-full border border-line bg-white/[0.04] px-3 py-1 text-[11px] text-zinc-300 sm:mb-5 sm:text-xs">
          {profile.badge}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">{profile.name}</h1>
        <p className="mt-3 text-lg text-zinc-200 sm:mt-4 sm:text-2xl">{profile.enName}</p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-5 sm:text-lg">{profile.tagline}</p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-base sm:leading-8">{profile.intro}</p>

        <div className="mt-6 flex flex-col gap-2.5 text-sm text-zinc-300 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <span className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2.5 text-cyan-100 sm:rounded-2xl sm:px-4">
            <MapPin size={15} className="shrink-0" />
            意向城市：{profile.expectedCities}
          </span>
          <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200" href="#experience">
            查看经历
            <ArrowDown size={16} />
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-5 py-3 font-medium text-white transition hover:border-white/20 hover:bg-white/[0.06]" href={`mailto:${profile.email}`}>
            <Mail size={16} />
            联系我
          </a>
        </div>

        <div className="mt-6 sm:mt-8">
          <Tags items={profile.keywords} />
        </div>
      </MotionDiv>

      <Reveal delay={0.12}>
        <Card className="relative mx-auto w-full max-w-md overflow-hidden p-0">
          <div className="border-b border-line px-4 py-3 text-xs text-zinc-500 sm:px-5">Profile Snapshot</div>
          <div className="p-4 sm:p-6">
            <div className="grid gap-5 sm:grid-cols-[168px_1fr] sm:items-start">
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border border-line bg-zinc-950 sm:h-[168px] sm:w-[168px]">
                <Image src="/profile.png" alt="高鸿飞头像" fill className="object-cover object-[center_35%]" priority />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {profile.highlights.map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                    <p className="text-lg font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 space-y-2.5 text-xs sm:mt-6 sm:space-y-3 sm:text-sm">
              {profileCard.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-t border-line pt-3">
                  <span className="shrink-0 text-zinc-500">{k}</span>
                  <span className="text-right text-zinc-200">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="关于我">
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 text-sm leading-7 text-zinc-400 sm:space-y-5 sm:text-base sm:leading-8">
            {aboutIntro.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className="grid gap-4">
            {aboutCards.map((card) => (
              <Card key={card.title}>
                <h3 className="mb-3 font-semibold text-white">{card.title}</h3>
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">{card.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="教育背景">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <Reveal key={item.degree}>
            <Card className="h-full">
              <p className="text-xs text-accent sm:text-sm">{item.time}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-white sm:mt-3 sm:text-xl">{item.school}</h3>
              <p className="mt-1 text-sm text-zinc-300 sm:text-base">{item.degree}</p>
              <p className="mt-3 text-sm leading-7 text-zinc-400 sm:mt-4 sm:text-base">{item.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="实践经历">
      <div className="space-y-5">
        {experiences.map((item) => (
          <Reveal key={item.org}>
            <Card className="grid gap-5 md:grid-cols-[220px_1fr] md:gap-6">
              <div>
                <p className="text-xs text-accent sm:text-sm">{item.time}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-white sm:mt-3 sm:text-xl">{item.org}</h3>
                <p className="mt-1 text-sm text-zinc-400 sm:text-base">{item.role}</p>
                {"link" in item && item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm text-cyan-200 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-100">
                    小红书主页 <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <div className="space-y-4">
                <ul className="space-y-2.5 text-sm leading-7 text-zinc-400">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                      <PointText text={p} />
                    </li>
                  ))}
                </ul>
                <Tags items={item.tags} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="校园经历">
      <div className="grid gap-4 md:grid-cols-2">
        {leadership.map((item) => (
          <Reveal key={item.org}>
            <Card className="h-full">
              <p className="text-xs text-accent sm:text-sm">{item.time}</p>
              <h3 className="mt-2 font-semibold leading-snug text-white sm:mt-3">{item.org}</h3>
              <p className="mt-1 text-sm text-zinc-400">{item.role}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-400">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Tags items={item.tags} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="项目与竞赛">
      <Reveal>
        <Card className="mb-4">
          <p className="text-xs text-accent sm:text-sm">{projectSummary.title}</p>
          <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">{projectSummary.text}</p>
        </Card>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <Card className="h-full">
              <p className="text-xs text-accent sm:text-sm">{p.subtitle}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-white sm:mt-3 sm:text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400 sm:mt-4 sm:text-base">{p.text}</p>
              <div className="mt-5">
                <Tags items={p.tags} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="技能与工具">
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map(([title, list]) => (
          <Reveal key={title}>
            <Card className="h-full">
              <h3 className="mb-4 font-semibold text-white">{title}</h3>
              <Tags items={list} />
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="联系我">
      <Reveal>
        <Card className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
          <div>
            <SectionLead>
              如果你正在寻找数字贸易、市场调研、新媒体运营、内容策划或学生项目合作方向的实习生 / 项目成员，欢迎通过邮件联系我。
            </SectionLead>
            <div className="grid gap-2.5 pt-1 sm:flex sm:flex-wrap sm:gap-3">
              <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-center text-sm font-medium text-black transition hover:bg-zinc-200" href={`mailto:${profile.email}`}>
                <Mail size={16} /> 发送邮件
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.06]" href="/resume.png" download>
                <Download size={16} /> 下载简历
              </a>
            </div>
          </div>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-2 text-zinc-300">
              <Mail size={16} /> {profile.email}
            </p>
            <p className="flex items-center gap-2 text-zinc-300">
              <MapPin size={16} className="shrink-0" /> {profile.location}
            </p>
            <p className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-100">意向城市：{profile.expectedCities}</p>
            <p className="text-zinc-500">手机号等敏感信息可按需要单独提供。</p>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
