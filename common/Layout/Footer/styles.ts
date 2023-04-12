import { Flex } from "@/common/Container/styles";
import {
  COLOR_BLACK,
  COLOR_FOOTER,
  COLOR_WHITE_LIGHT,
} from "@/utils/colorPalette";
import { devices } from "@/utils/devices";
import styled from "styled-components";

export const Container = styled.footer`
  padding: 2.8125rem 0;
  background-color: ${COLOR_FOOTER};
  margin-top: 25.9375rem;

  @media ${devices.tabletL} {
    margin: 12.875rem 0 0 0;
  }

  @media ${devices.mobileL} {
    margin: 8.875rem 0 0 0;
    padding: 2.5125rem 0;
  }
`;

export const Tooltip = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  padding: 0.8rem 1rem;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: bold;
  opacity: 0;
  pointer-events: none;
  text-transform: uppercase;
  transform: translate(-50%, -100%);
  transition: all 0.3s ease;
  background: ${COLOR_BLACK};
  color: ${COLOR_WHITE_LIGHT};
  z-index: 1;

  &:after {
    display: block;
    position: absolute;
    bottom: 1px;
    left: 50%;
    width: 0;
    height: 0;
    content: "";
    border: solid;
    border-width: 10px 10px 0 10px;
    border-color: transparent;
    border-top-color: ${COLOR_BLACK};
    transform: translate(-50%, 100%);
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  gap: 38.25px;

  a {
    position: relative;

    &:hover {
      ${Tooltip} {
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, -150%);
      }
    }
  }
`;

export const FlexContainer = styled(Flex)`
  @media ${devices.tabletM} {
    flex-direction: column;
    align-items: flex-start;
    gap: 5.125rem;
  }
`;
