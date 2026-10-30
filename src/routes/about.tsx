import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { useCopy } from "@/components/site/lang";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  const { t } = useCopy();

  return (
    <Shell>
      <div className="mx-auto max-w-2xl px-5 py-12">
        <h1 className="font-display text-4xl text-navy">{t.aboutTitle}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{t.aboutLead}</p>

        <h2 className="mt-10 font-display text-2xl text-navy">What we do</h2>
        <p className="mt-3 leading-relaxed">{t.aboutWhat}</p>
        <ul className="mt-6 space-y-3 text-sm">
          <li className="rounded-lg border border-line bg-paper px-4 py-3">
            <strong>A clean reader.</strong> The text comes first. Fathers, notes and plans open only when you ask.
          </li>
          <li className="rounded-lg border border-line bg-paper px-4 py-3">
            <strong>Cross-references.</strong> Follow a thread from one verse to another, across the Old and New Testament.
          </li>
          <li className="rounded-lg border border-line bg-paper px-4 py-3">
            <strong>The day’s saint and the hours.</strong> Icons, the menologion, and the prayer hours of the Church.
          </li>
        </ul>

        <h2 className="mt-10 font-display text-2xl text-navy">The three churches</h2>
        <ul className="mt-4 space-y-3">
          {t.traditions.map((item) => (
            <li key={item.title} className="rounded-lg border border-line bg-paper px-4 py-4">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link to="/bible" className="inline-flex min-h-10 items-center rounded-full bg-navy px-5 text-sm font-medium text-cream">
            Open the Bible
          </Link>
        </div>
      </div>
    </Shell>
  );
}
