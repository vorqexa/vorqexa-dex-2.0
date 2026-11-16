export function SectionHead({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <div className="mb-[30px] max-w-[560px] phone:mb-[38px] tablet:mb-[52px]">
      <h2 className="font-display text-[27px] font-semibold leading-[1.2] tracking-[-0.01em] phone:text-[32px]">
        {title}
      </h2>
      <p className="mt-3.5 text-[14.5px] leading-[1.6] text-muted phone:text-[15.5px]">
        {intro}
      </p>
    </div>
  );
}
