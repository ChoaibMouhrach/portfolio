import { cva } from "class-variance-authority";
import Link, { LinkProps } from "next/link";

export const button = cva(
  [
    "py-2",
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "font-semibold",
    "tracking-wide",
    "px-4",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-gray-700 rounded-md hover:bg-gray-800 animation duration-200",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type Props =
  | {
      children: React.ReactNode;
      variant?: "default";
      download?: boolean;
    } & React.ComponentProps<"button">;

export const Button = ({ children, variant, ...rest }: Props) => {
  return (
    <button type="submit" className={button({ variant })} {...rest}>
      {children}
    </button>
  );
};
