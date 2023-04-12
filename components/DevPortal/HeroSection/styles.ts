import styled from "styled-components";

import { devices } from "@/utils/devices";
import { COLOR_FOOTER, COLOR_GREEN } from "@/utils/colorPalette";

export const ContentWrapper = styled.div`
  max-height: 100%;
  width: 100%;
  height: 442px;
  margin-top: 2.8125rem;
  border: 1px solid ${COLOR_GREEN};
  border-radius: 40px;
  background-color: #00010d;
  animation: videoBackgroundRgba 10s ease infinite;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15x);
    background: linear-gradient(270deg, ${COLOR_GREEN}, ${COLOR_FOOTER});
    background-size: 100% 100%;
    border-radius: 40px;
    animation: animateGlow 10s ease infinite;

    @media ${devices.mobileL} {
      -webkit-filter: blur(10px);
      -moz-filter: blur(10px);
      -ms-filter: blur(10px);
      filter: blur(10px);
    }
  }

  @keyframes animateGlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes videoBackgroundRgba {
    0% {
      color: ${COLOR_FOOTER};
    }
    50% {
      color: ${COLOR_GREEN};
    }
    100% {
      color: ${COLOR_FOOTER};
    }
  }

  video {
    width: 100%;
    height: 99%;
    border-radius: 40px;
  }

  @media ${devices.mobileL} {
    height: auto;
  }
`;
