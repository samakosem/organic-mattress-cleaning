import Link from "next/link";
import Image from "next/image";

const LOGO_SRC = "/images/logo.webp";
/** Real intrinsic size of the source file — keeps Next/Image crisp, no distortion. */
const LOGO_INTRINSIC_SIZE = 1254;

interface BrandLogoProps {
  /** Render on a dark background (footer) — wraps logo in a white card so the white-bg square reads cleanly. */
  onDark?: boolean;
  /** Pixel height to render at. Header uses a slightly taller value since the logo is a square lockup with baked-in text. */
  size?: number;
}

export function BrandLogo({ onDark = false, size = 48 }: BrandLogoProps) {
  const image = (
    <Image
      src={LOGO_SRC}
      alt="Organic Mattress Cleaning"
      width={LOGO_INTRINSIC_SIZE}
      height={LOGO_INTRINSIC_SIZE}
      priority
      className="object-contain"
      style={{ height: size, width: size }}
    />
  );

  return (
    <Link href="/" className="inline-flex items-center shrink-0">
      {onDark ? (
        <span className="rounded-xl bg-white p-1 shadow-sm">{image}</span>
      ) : (
        image
      )}
    </Link>
  );
}
