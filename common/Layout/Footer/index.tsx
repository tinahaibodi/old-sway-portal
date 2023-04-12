import Image from "next/image";

import { SectionContainer } from "@/common/Container";
import { LogoContainer } from "@/common/Layout/Header/styles";
import {
  Container,
  FlexContainer,
  SocialsContainer,
  Tooltip,
} from "@/common/Layout/Footer/styles";

const FooterSocials = [
  {
    name: "Website",
    icon: "/assets/svg/socials/globe.svg",
    link: "https://www.google.com/",
  },
  {
    name: "Twitter",
    icon: "/assets/svg/socials/twitter.svg",
    link: "https://www.google.com/",
  },
  {
    name: "Discord",
    icon: "/assets/svg/socials/discord.svg",
    link: "https://www.google.com/",
  },
];

export const Footer = () => (
  <Container>
    <SectionContainer>
      <FlexContainer>
        <LogoContainer href="/">
          <Image
            src={"/assets/svg/logo.svg"}
            alt="Sway logo"
            width="174"
            height="57"
            priority
          />
        </LogoContainer>
        <SocialsContainer>
          {FooterSocials.map((social, index) => (
            <a href={social.link} target="_blank" rel="noreferrer" key={index}>
              <Image
                src={social.icon}
                alt="Globe logo"
                width="50"
                height="50"
                priority
              />
              <Tooltip>{social.name}</Tooltip>
            </a>
          ))}
        </SocialsContainer>
      </FlexContainer>
    </SectionContainer>
  </Container>
);
