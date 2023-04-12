import styled from "styled-components";

import { devices } from "@/utils/devices";

export const CategoriesContainer = styled.div`
  margin: 2.8125rem 0;

  a {
    text-decoration: none;
  }
`;

export const CategoriesFlexWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 2.8125rem 0;

  @media ${devices.tabletL} {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  flex: 1 1 auto;
  background: rgba(0, 0, 0, 0.98);
  border: 1px solid #333333;
  padding: 28px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    width: 1px;
    left: 32%;
    height: 90%;
    background: #494949;
    position: absolute;
  }
  @media ${devices.tabletL} {
    padding: 0;

    &:after {
      display: none;
    }
  }
`;

export const RightContainer = styled.div`
  flex: 5 1 auto;
  background: rgba(0, 0, 0, 0.98);
  border: 1px solid #333333;
`;

export const ProductsDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  img {
    flex: 0.5 1 auto;
  }

  div {
    flex: 1 1 auto;
  }

  div {
    h3 {
      font-size: 18px;
      margin-bottom: 4px;
    }

    p {
      font-size: 14px;
    }
  }

  @media ${devices.tabletL} {
    padding: 0 38px;
    min-height: 98px;
    border-bottom: 1px solid #333333;

    img,
    div {
      flex: initial;
    }
  }
`;

export const ProductsIdeasContainer = styled.div`
  padding: 0 38px;
  min-height: 98px;
  border-bottom: 1px solid #333333;
  display: flex;
  align-items: center;
  gap: 60px;
`;
