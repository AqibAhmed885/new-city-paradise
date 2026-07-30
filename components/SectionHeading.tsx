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
        <h2 className="display mt-7 max-w-5xl text-[clamp(3.2rem,7vw,7.5rem)] leading-[0.88]">
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
