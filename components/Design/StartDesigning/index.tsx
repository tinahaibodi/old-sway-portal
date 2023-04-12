import { Heading } from "@/common/Heading";
import { DesignData } from "@/data/design";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";
import { BorderBottom } from "@/components/DevPortal/InstallSection/styles";

export const StartDesigning = ({
  designSystemData,
}: {
  designSystemData: DesignData["designSystemData"];
}) => (
  <SectionContainer>
    <Heading
      level={2}
      title={designSystemData.title}
      subtitle={designSystemData.subtitle}
    />
    <HorizontalCards data={designSystemData.cardsData} />
    <BorderBottom />
  </SectionContainer>
);
