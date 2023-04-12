import styled from "styled-components";

import { COLOR_FOOTER, COLOR_GREEN } from "@/utils/colorPalette";
import { GroteskScreen } from "@/public/assets/fonts/fonts";
import { devices } from "@/utils/devices";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 27px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 4.5625rem;
  max-height: 550px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;

    @media ${devices.tabletL} {
      width: 4px;
    }
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLOR_GREEN};
    border-radius: 4px;
  }
`;

export const CardWrapper = styled.div<{ backgroundImage?: string }>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  border: 1px solid ${COLOR_GREEN};
  padding: 18px 35px 28px 21px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  max-width: 280px;
  width: calc(100% - 1rem);
  height: 248px;
  cursor: pointer;
  transition: filter 0.3s ease-in-out;
  background-repeat: ${({ backgroundImage }) => backgroundImage && "no-repeat"};
  background-size: ${({ backgroundImage }) => backgroundImage && "cover"};
  background-image: ${({ backgroundImage }) =>
    backgroundImage && `url(/assets/png/${backgroundImage}.png)`};

  &:hover {
    filter: drop-shadow(3px 3px ${COLOR_FOOTER});
  }

  @media ${devices.tabletL} {
    max-width: calc(100% - 1rem);
  }
`;

export const Anchor = styled.a`
  height: 100%;
  display: grid;
  text-decoration: none;
`;

export const Card = styled.div`
  white-space: pre-wrap;
  font-size: 32px;
  line-height: 33.6px;

  p {
    font-family: ${GroteskScreen.style.fontFamily};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  justify-content: space-between;
`;
