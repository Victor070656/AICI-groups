import { MapPin, Phone, Mail } from "lucide-react";

interface ContactItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function ContactItem({ icon, children }: ContactItemProps) {
  return (
    <li className="flex items-start gap-3">
      <div className="text-accent mt-0.5 flex-shrink-0">
        {icon}
      </div>
      <span className="font-sans text-sm text-gray-400">{children}</span>
    </li>
  );
}

export const LocationIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <MapPin className={className} />
);

export const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Phone className={className} />
);

export const EmailIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Mail className={className} />
);