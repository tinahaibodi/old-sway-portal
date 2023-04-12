import Image from "next/image";

import { Button } from "@/common/Button";
import { Heading } from "@/common/Heading";
import { IdeasProductData } from "@/data/ideas";
import { SectionContainer } from "@/common/Container";
import {
  CategoriesContainer,
  CategoriesFlexWrapper,
  LeftContainer,
  ProductsDataContainer,
  ProductsIdeasContainer,
  RightContainer,
} from "@/components/Ideas/ProductSection/styles";

export const ProductSection = ({
  productData
}: {
  productData: IdeasProductData
}) => (
  <SectionContainer>
    <Heading
      level={2}
      title={productData.title}
      subtitle={productData.subtitle}
    />
    <CategoriesContainer>
      <a href={productData.buttonUrl} target="_blank" rel="noreferrer">
        <Button text={productData.buttonLabel} variant="secondary" hasArrow />
      </a>
      <CategoriesFlexWrapper>
        <LeftContainer>
          {productData.productsList.map((product, index) => (
            <ProductsDataContainer key={index}>
              <Image
                src={`/assets/svg/products/${product.svgIcon}.svg`}
                width="51"
                height="51"
                alt={`${product.svgIcon} icon`}
              />
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </ProductsDataContainer>
          ))}
        </LeftContainer>
        <RightContainer>
          {productData.ideasList.map((product, index) => (
            <ProductsIdeasContainer key={index}>
              <Image
                src={`/assets/svg/products/${product.svgIcon}.svg`}
                width="51"
                height="51"
                alt={`${product.svgIcon} icon`}
              />
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </ProductsIdeasContainer>
          ))}
        </RightContainer>
      </CategoriesFlexWrapper>
    </CategoriesContainer>
  </SectionContainer>
);
