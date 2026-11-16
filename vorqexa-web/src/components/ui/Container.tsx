import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1180px] px-4 phone:px-[22px] tablet:px-[26px] desktop:px-8 ${className}`}
    >
      {children}
    </div>
  );
}