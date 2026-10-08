export type SoundName = "squeak" | "splash" | "whoosh" | "clang" | "drum" | "whistle" | "sizzle" | "meow" | "pop";

let enabled = false;
let ctx: AudioContext | null = null;
const listeners = new Set<(on: boolean) => void>();

export const isSoundOn = () => enabled;
export function setSound(on: boolean) {
  enabled = on;
  listeners.forEach((l) => l(on));
  if (on) play("pop");
}
export function onSoundChange(fn: (on: boolean) => void) {
  listeners.add(fn);
  return () => void listeners.delete(fn);
}

function ac() {
  ctx ??= new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(type: OscillatorType, from: number, to: number, dur: number, vol = 0.15, delay = 0) {
  const a = ac();
  const t = a.currentTime + delay;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(from, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(to, 1), t + dur);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

function noise(dur: number, freq: number, vol = 0.2, delay = 0, q = 1) {
  const a = ac();
  const t = a.currentTime + delay;
  const buf = a.createBuffer(1, Math.floor(a.sampleRate * dur), a.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const src = a.createBufferSource();
  src.buffer = buf;
  const f = a.createBiquadFilter();
  f.type = "bandpass";
  f.frequency.value = freq;
  f.Q.value = q;
  const g = a.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f).connect(g).connect(a.destination);
  src.start(t);
}

export function play(name: SoundName) {
  if (!enabled) return;
  try {
    switch (name) {
      case "squeak": tone("sine", 2200, 3400, 0.08, 0.1); tone("sine", 2600, 3800, 0.07, 0.08, 0.12); break;
      case "splash": noise(0.35, 900, 0.3, 0, 0.7); noise(0.2, 2500, 0.15, 0.08); break;
      case "whoosh": noise(0.45, 600, 0.25, 0, 0.5); break;
      case "clang": tone("triangle", 820, 790, 0.6, 0.12); tone("square", 1240, 1200, 0.25, 0.04); break;
      case "drum": tone("sine", 160, 50, 0.3, 0.4); noise(0.08, 3000, 0.1); break;
      case "whistle": tone("sine", 1400, 1900, 0.18, 0.08); tone("sine", 1900, 1300, 0.25, 0.08, 0.22); break;
      case "sizzle": noise(0.6, 5000, 0.12, 0, 0.4); break;
      case "meow": tone("sawtooth", 500, 900, 0.15, 0.05); tone("sawtooth", 900, 450, 0.3, 0.05, 0.15); break;
      case "pop": tone("sine", 600, 1200, 0.07, 0.12); break;
    }
  } catch {
  }
}
