import Image from "next/image";
import ReactMarkdown from "react-markdown";

import {
  CardsContainer,
  Anchor,
  CardWrapper,
  Card,
  ImageContainer,
} from "@/common/HorizontalCards/styles";
import { CardsData } from "@/data/developer-portal";

export const HorizontalCards = ({ data }: { data: CardsData[] }) => (
  <CardsContainer>
    {data.map((card, index) => (
      <CardWrapper backgroundImage={card.backgroundImage} key={index}>
        <Anchor href={card.href} target="_blank" rel="noreferrer">
          <Card>
            <ReactMarkdown>{card.markdownText}</ReactMarkdown>
          </Card>
          <ImageContainer>
            {card.leftSvg ? (
              <Image
                src={`/assets/svg/${card.leftSvg}.svg`}
                width="50"
                height="50"
                alt={`${card.leftSvg} icon`}
              />
            ) : (
              <div />
            )}
            <Image
              src={"/assets/svg/arrow-right.svg"}
              width="29"
              height="33"
              alt={`${card.leftSvg} icon`}
            />
          </ImageContainer>
        </Anchor>
      </CardWrapper>
    ))}
  </CardsContainer>
);
