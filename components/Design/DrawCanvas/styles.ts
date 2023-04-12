import styled from "styled-components";

import { COLOR_GREEN } from "@/utils/colorPalette";
import { devices } from "@/utils/devices";

export const Container = styled.div`
  margin-top: 3.75rem;
  border: 1px solid ${COLOR_GREEN};
  border-radius: 40px;
  position: relative;

  @media ${devices.mobileL} {
    margin-top: 4.75rem;
  }
`;

export const HelperText = styled.div`
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: max-content;
  transform: translate(-50%, 0);

  @media ${devices.mobileL} {
    font-size: 14px;
    position: relative;
    bottom: initial;
    left: initial;
    width: auto;
    transform: initial;
    text-align: center;
    top: 35px;
  }
`;

export const CirclesContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-35px, -50%);

  @media ${devices.mobileL} {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    top: -50px;
    transform: translate(0, 0);
  }
`;

export const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ color }) => color};

  @media ${devices.mobileL} {
    width: 25px;
    height: 25px;
  }
`;
