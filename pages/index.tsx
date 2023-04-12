import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { PageSEO } from "@/common/PageSeo";
import { HeroSection } from "@/components/DevPortal/HeroSection";
import { DevelopSection } from "@/components/DevPortal/DevelopSection";
import { ProductSection } from "@/components/DevPortal/ProductSection";
import { InstallSection } from "@/components/DevPortal/InstallSection";
import {
  DeveloperPortalData,
  getDeveloperPortalData,
} from "@/data/developer-portal";

interface StaticProps {
  developerPortalData: DeveloperPortalData;
}

const Homepage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  developerPortalData,
}) => (
  <>
    <PageSEO
      ogTitle={developerPortalData.meta.ogTitle}
      ogDescription={developerPortalData.meta.ogDescription}
      ogImage={developerPortalData.meta.ogImage}
    />
    <HeroSection heroData={developerPortalData.heroData} />
    <InstallSection installData={developerPortalData.installData} />
    <DevelopSection developData={developerPortalData.developData} />
    <ProductSection productData={developerPortalData.productData} />
  </>
);

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  return {
    props: {
      developerPortalData: getDeveloperPortalData(),
    },
  };
};

export default Homepage;
