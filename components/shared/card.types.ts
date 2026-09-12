import type { StaticImageData } from "next/image";

interface CardLink {
  name: string;
  path: string;
}

interface CardTechnology {
  name: string;
}

export interface CardInfo {
  date?: string;
  images?: StaticImageData[];
  title?: string;
  path?: string;
  company?: string;
  description?: string;
  highlights?: string[];
  links?: CardLink[];
  technologies?: CardTechnology[];
}

export interface CardProps {
  info: CardInfo;
}
