import styled from "styled-components";

import { devices } from "@/utils/devices";
import { COLOR_BLUE, COLOR_GRAY } from "@/utils/colorPalette";

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin: 3.6875rem 0 -3.6875rem 0;

  @media ${devices.tabletL} {
    margin: 3.6875rem 0 0 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  p {
    font-size: 18px;
    color: ${COLOR_BLUE};
  }

  span {
    font-size: 14px;
    color: ${COLOR_GRAY};
  }
`;
