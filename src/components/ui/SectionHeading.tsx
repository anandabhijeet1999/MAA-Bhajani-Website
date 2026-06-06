import { FadeIn } from "./FadeIn";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = invert ? "text-white" : "text-foreground";
  const subColor = invert ? "text-zinc-300" : "text-muted-foreground";

  return (
    <FadeIn className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <div
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-brand" />
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={`font-display mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${subColor}`}>
          {subtitle}
        </p>
      ) : null}
    </FadeIn>
  );
}
