import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "nav" | "block";
  className?: string;
  "aria-label"?: string;
};

const base =
  "inline-flex items-center justify-center rounded-[7px] border border-transparent font-semibold transition duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-mint";

const variants = {
  primary:
    "bg-mint text-on-mint hover:bg-mint hover:shadow-[0_0_0_4px_rgba(184,255,228,0.28)]",
  ghost: "border-line bg-transparent text-fg hover:border-mint hover:text-mint",
};

const sizes = {
  md: "px-[22px] py-[11px] text-[14.5px]",
  // header button: smaller on phone/tablet like the original
  nav: "px-4 py-[10px] text-[13.5px] tablet:px-[22px] tablet:py-[11px] tablet:text-[14.5px]",
  // order-book Buy/Sell buttons
  block: "flex-1 px-[10px] py-[10px] text-[12.5px] phone:text-[13.5px]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const external = /^https?:\/\//.test(href);

  if (external) {
    return (
      <a href={href} rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}