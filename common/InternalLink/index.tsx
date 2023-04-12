import Link from "next/link";
import { useRouter } from "next/router";

import { StyledLink } from "@/common/InternalLink/styles";

export const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <StyledLink isActive={router.pathname === href}>
        <p>{children}</p>
      </StyledLink>
    </Link>
  );
};
