import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The LayerForge wordmark.
 *
 * Rendered as live text rather than an image. The mark is pure typography —
 * "Layer" in Blaze Orange, "Forge." in Teal Blue, a superscript ™, and a
 * letterspaced tagline — so setting it in the brand face keeps it sharp at
 * every size, costs no image request, and lets the dark-ground variant simply
 * recolour instead of needing a second knockout asset.
 *
 * It inherits `font-heading`, so it renders in Outfit today and picks up Lufga
 * automatically once the licensed files are installed.
 *
 * TO USE THE DESIGNER'S ARTWORK INSTEAD: set USE_ARTWORK to true after running
 * `npm run logo -- <source>`. The text mark stays as the fallback.
 */
const USE_ARTWORK = false;

const ARTWORK = {
  src: "/images/logo-wordmark.png",
  width: 540,
  height: 190,
} as const;

const ALT = "LayerForge — Built With Precision";

type LogoProps = {
  /**
   * Sets the overall scale. Everything inside is em-relative, so a font-size
   * utility (`text-[26px]`) drives the whole lockup — not a height.
   */
  className?: string;
  /**
   * Recolours "Forge.", the ™ and the tagline to Off-White for dark grounds.
   * "Layer" stays Blaze Orange, which holds up against Teal Blue.
   */
  onDark?: boolean;
  priority?: boolean;
  sizes?: string;
  /** Hide the "BUILT WITH PRECISION" line — useful in tight chrome. */
  showTagline?: boolean;
};

export default function Logo({
  className = "text-[26px]",
  onDark = false,
  priority = false,
  sizes = "180px",
  showTagline = true,
}: LogoProps) {
  if (USE_ARTWORK) {
    return (
      <Image
        src={ARTWORK.src}
        alt={ALT}
        width={ARTWORK.width}
        height={ARTWORK.height}
        priority={priority}
        sizes={sizes}
        className={cn("w-auto object-contain", className)}
      />
    );
  }

  const ink = onDark ? "text-brand-offwhite" : "text-primary";

  return (
    <span
      className={cn(
        "inline-flex select-none flex-col items-center font-heading leading-none",
        className,
      )}
      role="img"
      aria-label={ALT}
    >
      <span className="flex items-start font-extrabold tracking-display">
        <span className="text-cta">Layer</span>
        <span className={ink}>Forge.</span>
        <span
          className={cn(
            "ml-[0.06em] mt-[0.12em] text-[0.3em] font-bold leading-none",
            ink,
          )}
          aria-hidden="true"
        >
          ™
        </span>
      </span>

      {showTagline && (
        <span
          className={cn(
            // Tracked out to span the width of the wordmark above it.
            "mt-[0.3em] text-[0.17em] font-semibold uppercase tracking-[0.42em] indent-[0.42em]",
            onDark ? "text-brand-offwhite/80" : "text-primary/85",
          )}
          aria-hidden="true"
        >
          Built With Precision
        </span>
      )}
    </span>
  );
}
