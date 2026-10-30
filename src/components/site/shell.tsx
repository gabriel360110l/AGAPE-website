import { Link, useRouterState } from "@tanstack/react-router";
import { Cross, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useCopy } from "./lang";

export function Shell({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  const { t, toggle } = useCopy();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div className={dark ? "min-h-dvh bg-navy text-cream" : "min-h-dvh bg-cream text-ink"}>
      <header className="sticky top-0 z-20 bg-navy text-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-md bg-cream/10">
              <Cross className="size-4" strokeWidth={2} />
            </span>
            <span className="text-base font-semibold tracking-wide">AGAPE</span>
          </Link>
          <nav className="hidden items-center gap-1 text-sm md:flex">
            {t.nav.map((item) => {
              const active = path === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    active
                      ? "rounded-md bg-cream/15 px-3 py-2 font-medium"
                      : "rounded-md px-3 py-2 text-cream/80 transition hover:bg-cream/10 hover:text-cream"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              className="rounded-md border border-cream/20 px-2.5 py-1.5 text-xs font-medium tracking-wide"
              aria-label={t.switchLabel}
            >
              {t.other}
            </button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md md:hidden"
              aria-expanded={open}
              aria-label="Menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-cream/10 px-5 py-2 md:hidden">
            {t.nav.map((item) => (
              <Link key={item.to} to={item.to} className="block py-3 text-base">
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>

      <main key={path} className="slide-in">
        {children}
      </main>
    </div>
  );
}
