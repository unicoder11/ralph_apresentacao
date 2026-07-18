"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";

export type DeckSlide = { id: string; node: ReactNode };

export default function Deck({
  slides,
  footerLabel,
}: {
  slides: DeckSlide[];
  footerLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => Math.min(total - 1, Math.max(0, i + delta)));
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " ", "PageDown", "Enter"].includes(e.key)) {
        e.preventDefault();
        go(1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        setIndex(0);
      } else if (e.key === "End") {
        setIndex(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, total]);

  return (
    <main className="relative h-dvh w-full select-none overflow-hidden bg-navy-darker">
      {/* current slide — keyed so entrance animations replay */}
      <div key={slides[index].id} className="h-full w-full">
        {slides[index].node}
      </div>

      {/* click zones for prev / next */}
      <button
        aria-label="Slide anterior"
        onClick={() => go(-1)}
        className="absolute inset-y-0 left-0 z-10 w-[18%] cursor-w-resize opacity-0"
      />
      <button
        aria-label="Próximo slide"
        onClick={() => go(1)}
        className="absolute inset-y-0 right-0 z-10 w-[18%] cursor-e-resize opacity-0"
      />

      {/* progress bar */}
      <div className="absolute inset-x-0 top-0 z-20 h-1 bg-white/10">
        <div
          className="h-full bg-coral transition-all duration-500 ease-out"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      {/* footer chrome */}
      <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-[7vw] pb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
        <span>{footerLabel}</span>
        <div className="pointer-events-auto flex items-center gap-4">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            className="rounded-full border border-white/15 px-3 py-1.5 text-white/60 transition hover:border-coral hover:text-white disabled:opacity-30"
            aria-label="Anterior"
          >
            ←
          </button>
          <span className="tabular-nums tracking-widest">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={() => go(1)}
            disabled={index === total - 1}
            className="rounded-full border border-white/15 px-3 py-1.5 text-white/60 transition hover:border-coral hover:text-white disabled:opacity-30"
            aria-label="Próximo"
          >
            →
          </button>
        </div>
        <span className="hidden sm:block">← → ou espaço para navegar</span>
      </footer>
    </main>
  );
}
