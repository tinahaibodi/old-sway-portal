import styled from "styled-components";

import { devices } from "@/utils/devices";
import { COLOR_BLACK, COLOR_GREEN } from "@/utils/colorPalette";

export const AnimateSlideBurger = styled.div`
  &.burgerslide-transition-enter {
    transform: translateX(100%);
  }
  &.burgerslide-transition-enter-active {
    transform: translateX(0);
    transition: transform 450ms ease;
  }
  &.burgerslide-transition-exit {
    transform: translateX(0);
  }
  &.burgerslide-transition-exit-active {
    transform: translateX(100%);
    transition: transform 450ms ease;
  }
`;

export const BurgerSidebarWrapper = styled(AnimateSlideBurger)`
  width: 36vw;
  height: 100%;
  display: block;
  top: 0;
  right: 0;
  position: absolute;

  @media ${devices.macBookPro} {
    width: 55vw;
  }

  @media ${devices.tabletL} {
    width: 100vw;
  }
`;

export const BurgerSidebarOverlay = styled.div<{
  shouldShow: boolean;
}>`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 999;
  visibility: ${(p) => (p.shouldShow ? "visible" : "hidden")};
  transition: visibility 0.4s;
`;

export const BurgerSidebarContainer = styled.div<{
  shouldShow: boolean;
}>`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  background-color: ${COLOR_BLACK};
  width: 100%;
  height: 100vh;
  padding: 2.5rem 5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 3px 3px 25px ${COLOR_GREEN};
  gap: 1.5rem;

  @media ${devices.mobileL} {
    max-width: 100vw;
    overflow-y: auto;
    padding: 2.75rem 1.3rem 2.5rem 1rem;
  }
`;
