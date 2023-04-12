import { applyDataOverrides } from "@/utils/applyOverride";

import DEVELOPER_PORTAL_DATA from "@/data/developer-portal/developer-portal.json";

export type DeveloperPortalData = {
  meta: MetaData;
  heroData: DeveloperPortalHeroData;
  installData: CardsAndStepsData;
  developData: CardsAndStepsData;
  productData: Omit<CardsAndStepsData, "stepsData">;
};

export interface MetaData {
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface HeaderData {
  title: string;
  subtitle: string;
}

export interface StepsData {
  markdownText: string;
}

export interface CardsData {
  markdownText: string;
  href: string;
  leftSvg?: string;
  backgroundImage?: string;
}

export interface DeveloperPortalHeroData extends HeaderData {
  videoSrc: string;
}

export interface CardsAndStepsData extends HeaderData {
  stepsData: StepsData[];
  cardsData: CardsData[];
}

export const getDeveloperPortalData = () => {
  return applyDataOverrides(DEVELOPER_PORTAL_DATA);
};
