import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Church, Clock, Link2 } from "lucide-react";
import { Shell } from "@/components/site/shell";
import { useCopy } from "@/components/site/lang";
import { UserButton } from "@/lib/auth/gates";

export const Route = createFileRoute("/")({ component: Welcome });

function Welcome() {
  const { t } = useCopy();

  const features = [
    { icon: BookOpen, title: "Clean reading", body: "The verse stays clear. Explanations sit behind Info." },
    { icon: Link2, title: "Cross-references", body: "See how one passage answers another across the whole Bible." },
    { icon: Church, title: "Three traditions", body: "Eastern Orthodox, Oriental Orthodox, and Catholic — kept distinct." },
    { icon: Clock, title: "Prayer hours", body: "Know which hour it is, and be reminded when the Church prays." },
  ];

  return (
    <Shell>
      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <p className="text-xs font-medium tracking-[0.18em] text-navy/70 uppercase">{t.eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl text-navy md:text-6xl">{t.welcomeTitle}</h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">{t.welcomeLead}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/bible" className="inline-flex min-h-10 items-center rounded-full bg-navy px-5 text-sm font-medium text-cream">
            {t.welcomeCta}
          </Link>
          <Link to="/about" className="inline-flex min-h-10 items-center rounded-full border border-line bg-paper px-5 text-sm">
            {t.welcomeSecondary}
          </Link>
        </div>
        <div className="mt-8 flex justify-center gap-4 text-sm">
          <Link to="/login" className="text-navy underline-offset-2 hover:underline">Sign in</Link>
          <Link to="/signup" className="text-navy underline-offset-2 hover:underline">Create account</Link>
          <UserButton />
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-2xl px-5 py-14 text-center">
          <h2 className="font-display text-3xl text-navy">Our mission</h2>
          <p className="mt-4 leading-relaxed text-muted">{t.aboutLead}</p>
          <blockquote className="mt-6 font-display text-xl italic text-navy">“{t.verse}”</blockquote>
          <p className="mt-2 text-sm text-gold">{t.verseRef}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14">
        <h2 className="text-center font-display text-3xl text-navy">What you can do</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f.title} className="rounded-lg border border-line bg-paper p-5">
              <f.icon className="size-5 text-navy" />
              <h3 className="mt-3 font-medium">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-navy text-cream">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <h2 className="text-center font-display text-3xl">Three churches, one Scripture</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {t.traditions.map((item) => (
              <li key={item.title} className="text-center">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-16 text-center">
        <h2 className="font-display text-3xl text-navy">Start reading</h2>
        <p className="mt-3 text-muted">Open a chapter, follow a cross-reference, or begin a plan.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/bible" className="inline-flex min-h-10 items-center rounded-full bg-navy px-5 text-sm font-medium text-cream">
            Open the Bible
          </Link>
          <Link to="/signup" className="inline-flex min-h-10 items-center rounded-full border border-line bg-paper px-5 text-sm">
            Create a free account
          </Link>
        </div>
      </section>
    </Shell>
  );
}
