import styled from "styled-components";

import { devices } from "@/utils/devices";
import { COLOR_GREEN, COLOR_WHITE_LIGHT } from "@/utils/colorPalette";

export const StyledLink = styled.div<{
  isActive: boolean;
}>`
  p {
    display: block;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 16px;
    max-width: max-content;
    color: ${({ isActive }) => (isActive ? COLOR_GREEN : COLOR_WHITE_LIGHT)};

    &:before {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: -8px;
      height: 3px;
      background-color: ${COLOR_GREEN};
      transition: transform 500ms ease-in-out;
      transform-origin: left;
      transform: scaleX(0);
      display: block;
    }

    &:hover {
      color: ${COLOR_GREEN};
    }
    &:hover:before,
    &:focus:before {
      transform: scaleX(1);
    }
  }
`;
