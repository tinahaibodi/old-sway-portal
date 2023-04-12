import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { HorizontalSteps } from "@/common/HorizontalSteps";
import { HorizontalCards } from "@/common/HorizontalCards";
import { DeveloperPortalData } from "@/data/developer-portal";
import { BorderTop } from "@/components/DevPortal/InstallSection/styles";

export const InstallSection = ({
  installData,
}: {
  installData: DeveloperPortalData["installData"];
}) => (
  <SectionContainer padding="0">
    <BorderTop />
    <Heading
      level={2}
      title={installData.title}
      subtitle={installData.subtitle}
    />
    <HorizontalSteps data={installData.stepsData} />
    <HorizontalCards data={installData.cardsData} />
  </SectionContainer>
);
