import { Linkedin, Twitter, Instagram } from "lucide-react";

export const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Linkedin className={className} />
);

export const TwitterIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Twitter className={className} />
);

export const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Instagram className={className} />
);

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex items-center justify-center size-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}