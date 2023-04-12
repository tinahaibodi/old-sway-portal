import { Button } from "@/common/Button";
import { Heading } from "@/common/Heading";
import { SectionDataWithCards } from "@/data/ideas";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";
import { CategoriesContainer } from "@/components/Ideas/ProductSection/styles";

export const EcoSystemSection = ({
  ecoData,
}: {
  ecoData: SectionDataWithCards;
}) => (
  <SectionContainer>
    <Heading level={2} title={ecoData.title} subtitle={ecoData.subtitle} />
    <CategoriesContainer>
      <a href={ecoData.buttonUrl} target="_blank" rel="noreferrer">
        <Button text={ecoData.buttonLabel} variant="secondary" hasArrow />
      </a>
      <HorizontalCards data={ecoData.cardsData} />
    </CategoriesContainer>
  </SectionContainer>
);
