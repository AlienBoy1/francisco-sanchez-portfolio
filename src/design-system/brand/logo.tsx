import Image from "next/image";
import { cn } from "@/lib/utils";

export const brandAssets = {
  isotipo: "/media/isotipo.webp",
  hero: "/media/herosection-v3.webp",
  favicon: "/favicon.webp",
} as const;

type BrandMarkProps = {
  className?: string;
  title?: string;
  priority?: boolean;
};

/** Official FS isotipo from media/isotipo → public/media/isotipo.webp */
export function BrandMark({
  className,
  title = "Francisco Sánchez",
  priority = false,
}: BrandMarkProps) {
  return (
    <Image
      src={brandAssets.isotipo}
      alt={title}
      width={64}
      height={64}
      priority={priority}
      className={cn("shrink-0 rounded-[22%] object-cover", className)}
    />
  );
}

type BrandLogoProps = {
  className?: string;
  showWordmark?: boolean;
  compact?: boolean;
};

/** Horizontal logo for navigation. */
export function BrandLogo({
  className,
  showWordmark = true,
  compact = false,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark priority className={cn(compact ? "h-8 w-8" : "h-9 w-9")} />
      {showWordmark ? (
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="font-display text-foreground truncate text-[0.7rem] font-semibold tracking-[0.14em] uppercase sm:text-xs">
            Francisco Sánchez
          </span>
          <span className="text-brand truncate font-mono text-[0.55rem] tracking-[0.18em] uppercase">
            Software Engineer
          </span>
        </span>
      ) : null}
    </span>
  );
}
