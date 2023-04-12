import { Container, Subtitle } from "@/common/Heading/styles";

export const Heading = ({
  level,
  title,
  subtitle,
}: {
  level: number;
  title: string;
  subtitle: string;
}) => {
  const CustomTitle = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Container>
      <CustomTitle>{title}</CustomTitle>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
