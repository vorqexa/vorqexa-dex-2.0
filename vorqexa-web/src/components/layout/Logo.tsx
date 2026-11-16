import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Vorqexa"
      width={791}
      height={107}
      priority={!compact}
      className={compact ? "h-[18px] w-auto" : "h-[19px] w-auto phone:h-[22px]"}
    />
  );
}