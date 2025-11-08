import { ChevronRight, ArrowRight, ExternalLink } from "lucide-react";

interface IconProps {
  className?: string;
}

export const ChevronRightIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <ChevronRight className={className} />
);

export const ArrowRightIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <ArrowRight className={className} />
);

export const ExternalLinkIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <ExternalLink className={className} />
);

interface LinkWithArrowProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function LinkWithArrow({ href, children, className = "" }: LinkWithArrowProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 group ${className}`}
    >
      {children}
      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}