import Link, { LinkProps } from "next/link";
import { button } from "./Button";

interface Props extends LinkProps {
  variant?: "default";
  children: React.ReactNode;
  target?: "_blank";
}

export const LinkButton = ({ variant, children, ...rest }: Props) => {
  return (
    <Link className={button({ variant })} {...rest}>
      {children}
    </Link>
  );
};
