import { Heading } from "@/common/Heading";
import { IdeasHeroData } from "@/data/ideas";
import { SectionContainer } from "@/common/Container";
import { ContentWrapper } from "@/components/DevPortal/HeroSection/styles";

export const HeroSection = ({ heroData }: { heroData: IdeasHeroData }) => (
  <SectionContainer>
    <Heading
      level={1}
      title={heroData.title}
      subtitle={heroData.subtitle}
    />
    <ContentWrapper>
      <video preload="auto" playsInline autoPlay muted loop>
        <source src={heroData.videoSrc} type="video/mp4" />
      </video>
    </ContentWrapper>
  </SectionContainer>
);
