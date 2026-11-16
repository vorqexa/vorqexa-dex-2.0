import Image from "next/image";
import { chainLogoSrc } from "@/lib/chain-logo";

export function ChainLogo({
  slug,
  short,
  size,
}: {
  slug: string;
  short: string;
  size: number;
}) {
  const src = chainLogoSrc(slug);

  if (src) {
    return (
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        unoptimized
        className="flex-none rounded-full object-contain"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex flex-none items-center justify-center rounded-full border border-line bg-base font-mono font-medium text-mint"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.3) }}
    >
      {short}
    </span>
  );
}
