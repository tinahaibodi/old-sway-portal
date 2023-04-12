import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";
import { DeveloperPortalData } from "@/data/developer-portal";
import { BorderTop } from "@/components/DevPortal/InstallSection/styles";

export const ProductSection = ({
  productData,
}: {
  productData: DeveloperPortalData["productData"];
}) => (
  <SectionContainer>
    <BorderTop />
    <Heading
      level={2}
      title={productData.title}
      subtitle={productData.subtitle}
    />
    <HorizontalCards data={productData.cardsData} />
  </SectionContainer>
);
