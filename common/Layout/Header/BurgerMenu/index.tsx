import { BurgerSidebar } from "@/common/Modal";
import { Flex } from "@/common/Container/styles";
import { MenuItems } from "@/common/Layout/Header";
import {
  NavigationPrimary,
  PointerImage,
} from "@/common/Layout/Header/BurgerMenu/styles";
interface BurgerMenuProps {
  isMenuOpen: boolean;
  handleClose: () => void;
}

export const BurgerMenu = ({ isMenuOpen, handleClose }: BurgerMenuProps) => (
  <div>
    <PointerImage
      src={"/assets/svg/open.svg"}
      alt="Open icon"
      width="40"
      height="30"
      onClick={handleClose}
    />
    <BurgerSidebar open={isMenuOpen} handleClose={handleClose}>
      <Flex>
        <div />
        <PointerImage
          src={"/assets/svg/close.svg"}
          alt="Close icon"
          width="30"
          height="30"
          onClick={handleClose}
        />
      </Flex>
      <NavigationPrimary>
        <MenuItems onClose={handleClose} />
      </NavigationPrimary>
    </BurgerSidebar>
  </div>
);
