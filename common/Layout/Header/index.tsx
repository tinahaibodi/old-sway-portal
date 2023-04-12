import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/common/Button";
import { Flex } from "@/common/Container/styles";
import { SectionContainer } from "@/common/Container";
import { BurgerMenu } from "@/common/Layout/Header/BurgerMenu";
import {
  LogoContainer,
  MenuItemsContainer,
  DesktopMenuContainer,
} from "@/common/Layout/Header/styles";
import { InternalLink } from "@/common/InternalLink";

export const MenuItems = ({ onClose }: { onClose?: () => void }) => (
  <MenuItemsContainer onClick={onClose}>
    <Link href="/">
      <Button text="Sway Developer Portal" variant="primary" />
    </Link>
    <InternalLink href={"/ideas"}>Ideas</InternalLink>
    <InternalLink href={"/design"}>Design</InternalLink>
  </MenuItemsContainer>
);

export const Header = () => {
  const [isMenuOpen, setIsMenOpen] = useState<boolean>(false);

  return (
    <SectionContainer padding="3.875rem 0" layout>
      <Flex>
        <LogoContainer href="/">
          <Image
            src={"/assets/svg/logo.svg"}
            alt="Sway logo"
            width="174"
            height="57"
            priority
          />
        </LogoContainer>
        <DesktopMenuContainer>
          <MenuItems />
        </DesktopMenuContainer>
        <BurgerMenu
          isMenuOpen={isMenuOpen}
          handleClose={() => setIsMenOpen(!isMenuOpen)}
        />
      </Flex>
    </SectionContainer>
  );
};
