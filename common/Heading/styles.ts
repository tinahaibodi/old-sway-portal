import styled from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { devices } from "@/utils/devices";
import { COLOR_GREEN } from "@/utils/colorPalette";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8125rem;

  h1 {
    font-size: 100px;
    line-height: 85px;
    font-weight: 400;
  }

  h2 {
    font-size: 70px;
    line-height: 59.5px;
    font-weight: 400;
  }

  @media ${devices.tabletL} {
    gap: 1.75rem;

    h1 {
      font-size: 70px;
      line-height: 65px;
    }

    h2 {
      font-size: 55px;
      line-height: 45px;
    }
  }

  @media ${devices.mobileL} {
    gap: 1.25rem;

    h1 {
      font-size: 45px;
      line-height: 55px;
    }

    h2 {
      font-size: 35px;
      line-height: 45px;
    }
  }
`;

export const Subtitle = styled(ReactMarkdown)`
  font-size: 38.5px;
  font-weight: 400;

  p {
    color: ${COLOR_GREEN};
    line-height: 42.5px;
    white-space: pre-wrap;
  }

  @media ${devices.tabletL} {
    font-size: 32px;
  }

  @media ${devices.mobileL} {
    font-size: 25px;

    p {
      line-height: 35.5px;
      white-space: normal;
    }
  }
`;
