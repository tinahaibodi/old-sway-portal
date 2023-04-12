import { Heading } from "@/common/Heading";
import { DrawCanvas } from "@/components/Design/DrawCanvas";
import { SectionContainer } from "@/common/Container";
import { HeaderData } from "@/data/developer-portal";

export const HeroSection = ({ heroData }: { heroData: HeaderData }) => (
  <SectionContainer>
    <Heading level={1} title={heroData.title} subtitle={heroData.subtitle} />
    <DrawCanvas />
  </SectionContainer>
);
