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
  "inline-flex items-center justify-center whitespace-nowrap rounded-control border border-transparent font-semibold " +
  "transition duration-200 ease-out cursor-pointer active:translate-y-px";

const variants = {
  primary:
    "bg-mint text-on-mint hover:-translate-y-px hover:shadow-[0_0_0_4px_rgba(182,250,208,0.28)]",
  ghost: "border-line bg-transparent text-fg hover:border-mint hover:text-mint",
};

const sizes = {
  md: "min-h-11 px-[22px] text-[14.5px]",
  nav: "min-h-10 px-4 text-[13.5px] tablet:min-h-11 tablet:px-[22px] tablet:text-[14.5px]",
  block: "min-h-11 flex-1 px-2.5 text-[12.5px] phone:text-[13.5px]",
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
  if (/^https?:\/\//.test(href)) {
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
