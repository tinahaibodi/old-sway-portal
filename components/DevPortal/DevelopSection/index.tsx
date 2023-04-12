import { useState } from "react";

import { Heading } from "@/common/Heading";
import { ToggleSwitch } from "@/common/ToggleSwitch";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";
import { HorizontalSteps } from "@/common/HorizontalSteps";
import { DeveloperPortalData } from "@/data/developer-portal";
import { BorderTop } from "@/components/DevPortal/InstallSection/styles";
import {
  ToggleContainer,
  FlexContainer,
} from "@/components/DevPortal/DevelopSection/styles";

export const DevelopSection = ({
  developData,
}: {
  developData: DeveloperPortalData["developData"];
}) => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => setChecked(!checked);

  return (
    <SectionContainer>
      <BorderTop />
      <Heading
        level={2}
        title={developData.title}
        subtitle={developData.subtitle}
      />
      <ToggleContainer>
        <ToggleSwitch checked={checked} handleChange={handleChange} />
        <FlexContainer>
          <p>DeFi application builders</p>
          <span>NFT application builders</span>
        </FlexContainer>
      </ToggleContainer>
      <HorizontalSteps data={developData.stepsData} removeLine />
      <HorizontalCards data={developData.cardsData} />
    </SectionContainer>
  );
};
