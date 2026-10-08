import { useEffect, useRef, useState } from "react";
import { isSoundOn, onSoundChange } from "./sound";

const FA = "۰۱۲۳۴۵۶۷۸۹";
export const toFa = (n: number | string) => String(n).replace(/\d/g, (d) => FA[+d]);

export const pickOther = <T,>(list: T[], current?: T) => {
  const pool = list.filter((x) => x !== current);
  return pool[Math.floor(Math.random() * pool.length)];
};

export function useInView<T extends Element>(margin = "100px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: margin });
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, inView] as const;
}

export function useSound() {
  const [on, setOn] = useState(isSoundOn);
  useEffect(() => onSoundChange(setOn), []);
  return on;
}
