import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/bible")({ component: Bible });

const chapters = [
  {
    id: "gen1",
    title: "Genesis 1",
    verses: [
      { n: 1, text: "In the beginning God created the heaven and the earth." },
      { n: 2, text: "And the earth was without form, and void; and darkness was upon the face of the deep." },
      { n: 3, text: "And God said, Let there be light: and there was light." },
    ],
    refs: [
      { from: "Gen 1:1", to: "John 1:1", note: "The Word was in the beginning." },
      { from: "Gen 1:3", to: "2 Cor 4:6", note: "Light shining out of darkness." },
    ],
  },
  {
    id: "john15",
    title: "John 15",
    verses: [
      { n: 1, text: "I am the true vine, and my Father is the husbandman." },
      { n: 5, text: "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit." },
    ],
    refs: [
      { from: "John 15:5", to: "Isa 5:7", note: "The vineyard of the Lord." },
      { from: "John 15:1", to: "Ps 80:8", note: "Thou hast brought a vine out of Egypt." },
    ],
  },
  {
    id: "matt5",
    title: "Matthew 5",
    verses: [
      { n: 3, text: "Blessed are the poor in spirit: for theirs is the kingdom of heaven." },
      { n: 14, text: "Ye are the light of the world. A city that is set on an hill cannot be hid." },
    ],
    refs: [
      { from: "Matt 5:3", to: "Isa 61:1", note: "Good tidings to the meek." },
      { from: "Matt 5:14", to: "Isa 60:1", note: "Arise, shine; for thy light is come." },
    ],
  },
];

function Bible() {
  const [id, setId] = useState(chapters[0].id);
  const chapter = chapters.find((c) => c.id === id) ?? chapters[0];

  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-5 py-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {chapters.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setId(c.id)}
              className={
                c.id === id
                  ? "rounded-full bg-navy px-4 py-2 text-sm text-cream"
                  : "rounded-full border border-line bg-paper px-4 py-2 text-sm"
              }
            >
              {c.title}
            </button>
          ))}
        </div>

        <article className="rounded-lg border border-line bg-paper">
          <header className="border-b border-line px-5 py-3 text-sm text-muted">{chapter.title}</header>
          <div className="divide-y divide-line/60">
            {chapter.verses.map((v) => (
              <p key={v.n} className="flex gap-3 px-5 py-4 leading-relaxed">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded bg-cream-deep text-xs font-medium text-navy">
                  {v.n}
                </span>
                <span>{v.text}</span>
              </p>
            ))}
          </div>
        </article>

        <section className="mt-6">
          <h2 className="text-sm font-medium tracking-wide text-navy uppercase">Cross-references</h2>
          <ul className="mt-3 space-y-2">
            {chapter.refs.map((r) => (
              <li key={r.to} className="rounded-lg border border-line bg-paper px-4 py-3 text-sm">
                <span className="font-medium text-navy">{r.from}</span>
                <span className="mx-2 text-muted">→</span>
                <span className="font-medium">{r.to}</span>
                <p className="mt-1 text-muted">{r.note}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Shell>
  );
}
