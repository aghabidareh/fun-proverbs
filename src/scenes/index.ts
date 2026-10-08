import { lazy, type ComponentType } from "react";
import type { SceneProps } from "./types";

const files = import.meta.glob<{ default: ComponentType<SceneProps> }>(["./*.tsx", "!./parts.tsx"]);

const fileById: Record<string, string> = {
  "koh-moosh": "KohMoosh",
  "ab-havan": "AbHavan",
  "shotor-didi": "ShotorDidi",
  "dig-be-dig": "DigBeDig",
  "mar-gazide": "MarGazide",
  "ash-nakhorde": "AshNakhorde",
  "yek-dast": "YekDast",
  "bamash-bish": "BamashBish",
  "gorbe-hejle": "GorbeHejle",
  sotoon: "Sotoon",
  "aftabe-lagan": "AftabeLagan",
  "divar-moosh": "DivarMoosh",
  noushdaroo: "Noushdaroo",
  namak: "Namak",
  "ab-az-sar": "AbAzSar",
  "na-khani": "NaKhani",
  "kalagh-kabk": "KalaghKabk",
  "sang-gonde": "SangGonde",
  jooje: "Jooje",
  "yek-gol": "YekGol",
  "moosh-jaroo": "MooshJaroo",
  kharboze: "Kharboze",
  "morgh-hamsaye": "MorghHamsaye",
  "gorbe-goosht": "GorbeGoosht",
  "aftabe-lahim": "AftabeLahim",
  "khar-dom": "KharDom",
  "khar-aroosi": "KharAroosi",
  "dood-kondeh": "DoodKondeh",
  soozan: "Soozan",
  "emrooz-farda": "EmroozFarda",
  koozegar: "Koozegar",
  cheragh: "Cheragh",
  hamrang: "Hamrang",
  "zaban-sorkh": "ZabanSorkh",
  ashpaz: "Ashpaz",
  "khale-khers": "KhaleKhers",
  halim: "Halim",
  "sikh-kabab": "SikhKabab",
  gerdoo: "Gerdoo",
  "ab-dar-kooze": "AbDarKooze",
  "ab-az-ab": "AbAzAb",
  sibil: "Sibil",
  "pool-alaf": "PoolAlaf",
  digesh: "Digesh",
  "pa-deraz": "PaDeraz",
  shahnameh: "Shahnameh",
};

export const scenes: Record<string, ComponentType<SceneProps>> = Object.fromEntries(
  Object.entries(fileById)
    .filter(([, name]) => files[`./${name}.tsx`])
    .map(([id, name]) => [id, lazy(files[`./${name}.tsx`])]),
);
