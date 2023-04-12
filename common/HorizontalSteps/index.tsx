import Image from "next/image";
import ReactMarkdown from "react-markdown";

import {
  Container,
  GrayBlock,
  GrayBorderTop,
  Step,
  StepsContainer,
  AbsoluteImage,
  StepWrapper,
  Overflow,
} from "@/common/HorizontalSteps/styles";
import { StepsData } from "@/data/developer-portal";

export const HorizontalSteps = ({
  data,
  removeLine,
}: {
  data: StepsData[];
  removeLine?: boolean;
}) => (
  <Container>
    <Overflow>
      <StepsContainer>
        {data.map((step, index) => (
          <StepWrapper key={index}>
            <Step>
              <ReactMarkdown>{step.markdownText}</ReactMarkdown>
            </Step>
            <AbsoluteImage>
              <Image
                src={"/assets/svg/step-circle.svg"}
                width="40"
                height="40"
                alt="Circle icon"
              />
            </AbsoluteImage>
          </StepWrapper>
        ))}
      </StepsContainer>
      <GrayBorderTop removeLine={removeLine} />
      <GrayBlock />
    </Overflow>
  </Container>
);
