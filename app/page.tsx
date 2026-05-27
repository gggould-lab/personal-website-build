import Image from "next/image";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { MotionDiv, Reveal } from "@/components/Motion";
import { Card, Section, Tags } from "@/components/ui";
import { aboutCards, aboutIntro, education, experiences, leadership, profile, profileCard, projectSummary, projects, skills } from "@/data/profile";

function EmText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className="font-semibold text-white">{part.slice(2, -2)}</strong>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

function PointText({ text }: { text: string }) {
  if (text.startsWith("主页跳转：http")) {
    const url = text.replace("主页跳转：", "");
    return (
      <>
        主页跳转：<a href={url} target="_blank" rel="noreferrer" className="text-cyan-200 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-100">小红书主页</a>
      </>
    );
  }
  return <EmText text={text} />;
}

export default function Home() {
  return (
    <main className="site-bg min-h-screen overflow-hidden">
      <div className="fine-grid pointer-events-none fixed inset-0" />
      <Navbar />
      <div className="relative mx-auto max-w-6xl px-5 pt-28">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Contact />
        <footer className="border-t border-line py-10 text-sm text-zinc-500">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <span>Gao Hongfei © 2026</span>
            <span>Built with Next.js · 关于数字贸易、市场研究与学习型实践的个人网站。</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr]">
      <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="mb-5 inline-flex rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">{profile.badge}</p>
        <h1 className="text-6xl font-semibold tracking-tight text-white sm:text-7xl">{profile.name}</h1>
        <p className="mt-5 max-w-2xl text-lg text-zinc-300">{profile.tagline}</p>
        <p className="mt-6 max-w-2xl leading-8 text-zinc-400"><EmText text={profile.intro} /></p>
        <div className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
          <MapPin size={16} />
          意向城市：{profile.expectedCities}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200" href="#experience">查看实践经历</a>
          <a className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200" href="#leadership">查看校园经历</a>
          <a className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/15" href={`mailto:${profile.email}`}>
            联系我 <Mail size={16} />
          </a>
        </div>
        <div className="mt-8">
          <Tags items={profile.keywords} />
        </div>
      </MotionDiv>
      <Reveal delay={0.12}>
        <Card className="relative mx-auto max-w-sm overflow-hidden p-0">
          <div className="border-b border-line p-4 text-xs text-zinc-500">个人信息卡</div>
          <div className="p-6">
            <div className="relative mx-auto mb-6 h-64 w-64 overflow-hidden rounded-2xl border border-line bg-zinc-950">
              <Image src="/profile.png" alt="Gao Hongfei portrait" fill className="object-cover object-[center_35%]" priority />
            </div>
            <div className="space-y-3 text-sm">
              {profileCard.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-t border-line pt-3">
                  <span className="text-zinc-500">{k}</span>
                  <span className="text-right text-zinc-200">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
      <a href="#about" className="absolute bottom-5 hidden text-zinc-500 lg:block"><ArrowDown size={20} /></a>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="关于我">
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5 leading-8 text-zinc-400">
            {aboutIntro.map((text) => <p key={text}><EmText text={text} /></p>)}
          </div>
          <div className="grid gap-4">
            {aboutCards.map((card) => (
              <Card key={card.title}>
                <h3 className="mb-3 font-semibold text-white">{card.title}</h3>
                <p className="leading-7 text-zinc-400"><EmText text={card.text} /></p>
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
    <Section id="education" title="教育背景">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <Reveal key={item.degree}>
            <Card>
              <p className="text-sm text-accent">{item.time}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.school}</h3>
              <p className="mt-1 text-zinc-300">{item.degree}</p>
              <p className="mt-4 leading-7 text-zinc-400"><EmText text={item.text} /></p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="实践经历">
      <div className="space-y-5">
        {experiences.map((item) => (
          <Reveal key={item.org}>
            <Card className="grid gap-6 md:grid-cols-[220px_1fr]">
              <div>
                <p className="text-sm text-accent">{item.time}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.org}</h3>
                <p className="mt-1 text-zinc-400">{item.role}</p>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2 text-sm leading-7 text-zinc-400">
                  {item.points.map((p) => <li key={p}>· <PointText text={p} /></li>)}
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

function Projects() {
  return (
    <Section id="projects" title="学术与竞赛">
      <Reveal>
        <Card className="mb-4">
          <p className="text-sm text-accent">{projectSummary.title}</p>
          <p className="mt-3 leading-7 text-zinc-300"><EmText text={projectSummary.text} /></p>
        </Card>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <Card className={i === 0 ? "md:row-span-2" : ""}>
              <p className="text-sm text-accent">{p.subtitle}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400"><EmText text={p.text} /></p>
              <div className="mt-5"><Tags items={p.tags} /></div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Leadership() {
  return (
    <Section id="leadership" title="校园经历">
      <div className="grid gap-4 md:grid-cols-2">
        {leadership.map((item) => (
          <Reveal key={item.org}>
            <Card>
              <p className="text-sm text-accent">{item.time}</p>
              <h3 className="mt-3 font-semibold text-white">{item.org}</h3>
              <p className="mt-1 text-sm text-zinc-400">{item.role}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-400">
                {item.points.map((p) => <li key={p}>· <EmText text={p} /></li>)}
              </ul>
              <div className="mt-5"><Tags items={item.tags} /></div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="个人技能">
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map(([title, list]) => (
          <Reveal key={title}>
            <Card>
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
    <Section id="contact" title="联系我">
      <Reveal>
        <Card className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 leading-8 text-zinc-400">
            <p>如果你正在寻找数字贸易、市场调研、新媒体运营、内容策划或学生项目合作方向的实习生 / 项目成员，欢迎联系我。</p>
            <p>我也欢迎与数字贸易、国际商务、平台经济和内容运营相关的交流机会。</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200" href={`mailto:${profile.email}`}><Mail size={16} /> 发送邮件</a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10" href="/resume.png" download><Download size={16} /> 下载简历</a>
            </div>
          </div>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-2 text-zinc-300"><Mail size={16} /> {profile.email}</p>
            <p className="flex items-center gap-2 text-zinc-300"><MapPin size={16} /> {profile.location}</p>
            <p className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-100">意向城市：{profile.expectedCities}</p>
            <p className="text-zinc-500">电话可按需要提供。</p>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
