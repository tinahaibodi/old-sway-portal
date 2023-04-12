import { InferGetStaticPropsType, NextPage } from "next";

import { PageSEO } from "@/common/PageSeo";
import { getIdeasData } from "@/data/ideas";
import { HeroSection } from "@/components/Ideas/HeroSection";
import { ProductSection } from "@/components/Ideas/ProductSection";
import { EcoSystemSection } from "@/components/Ideas/EcosystemSection";
import { HackathonSection } from "@/components/Ideas/HackathonSection";

const Ideas: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  ideasData,
}) => (
  <>
    <PageSEO
      ogTitle={ideasData.meta.ogTitle}
      ogDescription={ideasData.meta.ogDescription}
      ogImage={ideasData.meta.ogImage}
    />
    <HeroSection heroData={ideasData.heroData} />
    <ProductSection productData={ideasData.productData} />
    <EcoSystemSection ecoData={ideasData.ecoData} />
    <HackathonSection hackathonData={ideasData.hackathonData} />
  </>
);

export const getStaticProps = async () => {
  return {
    props: {
      ideasData: getIdeasData(),
    },
  };
};

export default Ideas;
