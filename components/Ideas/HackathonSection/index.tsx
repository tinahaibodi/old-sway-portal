import { Button } from "@/common/Button";
import { Heading } from "@/common/Heading";
import { SectionDataWithCards } from "@/data/ideas";
import { SectionContainer } from "@/common/Container";
import { HorizontalCards } from "@/common/HorizontalCards";
import { CategoriesContainer } from "@/components/Ideas/ProductSection/styles";

export const HackathonSection = ({
  hackathonData,
}: {
  hackathonData: SectionDataWithCards;
}) => (
  <SectionContainer padding="3.71875rem 0 0 0">
    <Heading
      level={2}
      title={hackathonData.title}
      subtitle={hackathonData.subtitle}
    />
    <CategoriesContainer>
      <a href={hackathonData.buttonUrl} target="_blank" rel="noreferrer">
        <Button text={hackathonData.buttonLabel} variant="secondary" hasArrow />
      </a>
      <HorizontalCards data={hackathonData.cardsData} />
    </CategoriesContainer>
  </SectionContainer>
);
