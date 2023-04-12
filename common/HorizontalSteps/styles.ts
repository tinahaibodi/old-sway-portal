import styled from "styled-components";

import { GroteskScreen } from "@/public/assets/fonts/fonts";
import { COLOR_GREEN } from "@/utils/colorPalette";
import { devices } from "@/utils/devices";

export const Overflow = styled.div`
  width: 100%;
  height: 100%;
  white-space: unset;
  min-width: 1110px;
`;

export const Container = styled.div`
  margin: 7.375rem 0 -2rem 0;
  padding-bottom: 2rem;
  overflow-x: auto;
  max-width: calc(100vw - 8rem);
  width: 100%;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLOR_GREEN};
    border-radius: 4px;
  }

  @media ${devices.tabletL} {
    margin: 4.575rem 0 -2rem 0;
    max-width: calc(100vw - 4rem);
  }

  @media ${devices.mobileL} {
    margin: 4.575rem 0 -2rem 0;
    max-width: calc(100vw - 2rem);
  }
`;

export const GrayBlock = styled.div`
  background-color: #f0f0f0;
  padding: 0.4375rem 0;
`;

export const GrayBorderTop = styled.div<{
  removeLine?: boolean;
}>`
  border-top: ${({ removeLine }) =>
    removeLine ? "0.0625rem solid transparent" : "0.0625rem solid #ececec"};
  margin: 1.2rem 0;
`;

export const AbsoluteImage = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 28px);
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 57px 0 20px;
`;

export const Step = styled.div`
  display: flex;
  text-align: center;
  font-family: ${GroteskScreen.style.fontFamily};
  line-height: 26.88px;
  white-space: pre-wrap;

  @media ${devices.mobileL} {
    white-space: normal;
  }
`;

export const StepWrapper = styled.div`
  position: relative;
`;
