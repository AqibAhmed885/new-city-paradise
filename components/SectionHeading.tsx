type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: Props) {
  return (
    <div
      className={`flex flex-col justify-between gap-8 lg:flex-row lg:items-end ${
        light ? "text-white" : "text-ink"
      }`}
    >
      <div>
        {/* <p className={`eyebrow ${light ? "text-champagne" : "text-champagne"}`}>
          {eyebrow}
        </p> */}
        <h2 className="display mt-2 max-w-5xl text-[clamp(3.8rem,7.5vw,4rem)] font-medium leading-[1.2]">
          
        </h2>
        <h2
          data-intro
          className="mt-6 text-[clamp(3.4rem,6vw,4rem)]  font-medium leading-[1] tracking-[-0.04em]"
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`max-w-md text-base leading-7 ${
            light ? "text-white/55" : "text-black/50"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
