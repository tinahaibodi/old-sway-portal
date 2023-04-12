import { applyDataOverrides } from "@/utils/applyOverride";
import {
  CardsAndStepsData,
  HeaderData,
  MetaData,
} from "@/data/developer-portal";

import DESIGN_DATA from "@/data/design/design.json";

export type DesignData = {
  meta: MetaData;
  heroData: HeaderData;
  designSystemData: Omit<CardsAndStepsData, "stepsData">;
};

export const getDesignData = () => applyDataOverrides(DESIGN_DATA);
