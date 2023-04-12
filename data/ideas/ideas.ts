import { applyDataOverrides } from "@/utils/applyOverride";
import { CardsData, HeaderData, MetaData } from "@/data/developer-portal";

import IDEAS_DATA from "@/data/ideas/ideas.json";

export type IdeasData = {
  meta: MetaData;
  heroData: IdeasHeroData;
  productData: IdeasProductData;
  ecoData: SectionDataWithCards;
  hackathonData: SectionDataWithCards;
};

export interface IdeasHeroData extends HeaderData {
  videoSrc: string;
}

export interface SectionData {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonUrl: string;
}

export interface IdeasProductData extends SectionData {
  productsList: ProductsList[];
  ideasList: ProductsList[];
}

export interface SectionDataWithCards extends SectionData {
  cardsData: CardsData[];
}

export interface ProductsList {
  title: string;
  description: string;
  svgIcon: string;
  href: string;
}

export const getIdeasData = () => applyDataOverrides(IDEAS_DATA);
