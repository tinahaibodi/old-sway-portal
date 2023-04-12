import { InferGetStaticPropsType, NextPage } from "next";

import { PageSEO } from "@/common/PageSeo";
import { getDesignData } from "@/data/design";
import { HeroSection } from "@/components/Design/HeroSection";
import { StartDesigning } from "@/components/Design/StartDesigning";

const Design: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  designData,
}) => (
  <>
    <PageSEO
      ogTitle={designData.meta.ogTitle}
      ogDescription={designData.meta.ogDescription}
      ogImage={designData.meta.ogImage}
    />
    <HeroSection heroData={designData.heroData} />
    <StartDesigning designSystemData={designData.designSystemData} />
  </>
);

export const getStaticProps = async () => {
  return {
    props: {
      designData: getDesignData(),
    },
  };
};

export default Design;
