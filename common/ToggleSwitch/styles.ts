import styled from "styled-components";

import {
  COLOR_LIGHT_GREEN,
  COLOR_GREEN,
  COLOR_WHITE_LIGHT,
} from "@/utils/colorPalette";

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border: 1px solid ${COLOR_LIGHT_GREEN};
  padding: 15px 10px;
  border-bottom-right-radius: 10px;
  width: max-content;
`;

export const Switch = styled.div`
  position: relative;
  width: 38px;
  height: 20px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: ${COLOR_GREEN};

    &:before {
      transform: translate(14px, -50%);
      background: ${COLOR_WHITE_LIGHT};
    }
  }
`;
