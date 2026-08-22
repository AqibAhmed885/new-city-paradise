type Props = {
  eyebrow?: string;
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
      <div className="flex w-full">
        
        <h2
          data-intro
          className="mt-6 text-[clamp(3.4rem,6vw,4rem)] w-full text-center font-medium leading-[1] tracking-[-0.04em]"
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
