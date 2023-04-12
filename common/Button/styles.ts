import styled from "styled-components";

import { COLOR_BLACK, COLOR_WHITE_LIGHT } from "@/utils/colorPalette";

export const Container = styled.button<{
  variant: string;
}>`
  font-size: 14px;
  padding: 12px 44px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ variant }) =>
    variant === "primary" ? COLOR_BLACK : COLOR_WHITE_LIGHT};
  background: linear-gradient(to bottom left, #00f58c 50%, #0000 50.1%) top
      right,
    linear-gradient(to top right, #00f58c 50%, #0000 50.1%) bottom left,
    linear-gradient(to bottom right, #00f58c 50%, #0000 50.1%) top left,
    linear-gradient(to top left, #00f58c 50%, #0000 50.1%) bottom right;
  background-size: ${({ variant }) =>
    variant === "primary"
      ? "100% 100%"
      : "calc(0.6rem + 1.3 * 1px) calc(0.6rem + 1.3 * 1px)"};

  background-repeat: no-repeat;
  box-shadow: 0 0 0 200px inset var(--s, #0000), 0 0 0 1px inset #00f58c;
  clip-path: polygon(
    calc(100% - 0.6rem) 0,
    100% 0.6rem,
    100% calc(100% - 0.6rem),
    calc(100% - 0.6rem) 100%,
    0.6rem 100%,
    0 calc(100% - 0.6rem),
    0 0.6rem,
    0.6rem 0
  );

  img {
    transition: all 0.3s;
  }

  &:hover {
    img {
      transform: translate(20px, 0%);
    }
  }
`;
