import type { CSSProperties } from "react";

const PALETTES = [
  ["#8b7cf6", "#f0b429", "#fbf4ec"],
  ["#3f7a52", "#8b7cf6", "#fbf4ec"],
  ["#f0b429", "#c4544a", "#fbf4ec"],
  ["#8b7cf6", "#3f7a52", "#fbf4ec"],
] as const;

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function meshGradient(seed: string): CSSProperties {
  const [a, b, base] = PALETTES[hashString(seed) % PALETTES.length];
  return {
    backgroundColor: base,
    backgroundImage: [
      `radial-gradient(at 15% 20%, ${a} 0%, transparent 55%)`,
      `radial-gradient(at 85% 10%, ${b} 0%, transparent 50%)`,
      `radial-gradient(at 50% 100%, ${a} 0%, transparent 60%)`,
    ].join(", "),
  };
}
