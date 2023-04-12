import Image from "next/image";
import styled from "styled-components";

import { devices } from "@/utils/devices";
import { MenuItemsContainer } from "@/common/Layout/Header/styles";
import { COLOR_WHITE_LIGHT } from "@/utils/colorPalette";

export const NavigationPrimary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  ${MenuItemsContainer} {
    flex-direction: column-reverse;
    gap: 4.5rem;
    width: 100%;
    align-items: center;

    @media ${devices.desktopL} {
      gap: 3rem;
    }

    @media ${devices.tabletL} {
      gap: 1rem;
    }
  }

  div > p,
  button {
    font-size: 30px;

    @media ${devices.desktopM} {
      font-size: 24px;
    }

    @media ${devices.mobileL} {
      line-height: 140%;
    }
  }

  div > p {
    color: ${COLOR_WHITE_LIGHT};

    &:before {
      bottom: -10px;
    }
  }
`;

export const PointerImage = styled(Image)`
  cursor: pointer;
`;
