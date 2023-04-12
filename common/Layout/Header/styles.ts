import Link from "next/link";
import styled from "styled-components";

import { devices } from "@/utils/devices";

export const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.6875rem;

  & > a {
    color: inherit;
    text-decoration: none;
  }
`;

export const DesktopMenuContainer = styled.header`
  @media ${devices.tabletL} {
    ${MenuItemsContainer} {
      display: none;
    }
  }
`;

export const LogoContainer = styled(Link)`
  position: relative; ;
`;
