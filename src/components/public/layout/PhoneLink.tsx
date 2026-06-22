import type { ReactNode } from "react";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/constants/business";

interface PhoneLinkProps {
  className?: string;
  children?: ReactNode;
  "aria-label"?: string;
}

export function PhoneLink({ className, children, ...rest }: PhoneLinkProps) {
  return (
    <a href={`tel:${BUSINESS_PHONE_TEL}`} className={className} {...rest}>
      {children ?? BUSINESS_PHONE}
    </a>
  );
}
