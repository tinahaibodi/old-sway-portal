import Image from "next/image";

import { Container } from "@/common/Button/styles";

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
  hasArrow?: boolean;
}

export const Button = ({ text, onClick, variant, hasArrow }: ButtonProps) => (
  <Container onClick={onClick} variant={variant}>
    {text}
    {hasArrow && (
      <Image
        src={"/assets/svg/arrow.svg"}
        alt="Arrow right"
        width="8"
        height="14"
        priority
      />
    )}
  </Container>
);
