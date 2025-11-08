import { ChevronUp, Search, X, ChevronDown, Star, Calendar, Clock, User } from "lucide-react";

interface IconProps {
  className?: string;
}

export const ChevronUpIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <ChevronUp className={className} />
);

export const SearchIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <Search className={className} />
);

export const CloseIcon = ({ className = "w-5 h-5" }: IconProps) => (
  <X className={className} />
);

export const ChevronDownIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <ChevronDown className={className} />
);

export const StarIcon = ({ className = "w-4 h-4", filled = false }: IconProps & { filled?: boolean }) => (
  <Star className={`${className} ${filled ? 'fill-current' : ''}`} />
);

export const CalendarIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <Calendar className={className} />
);

export const ClockIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <Clock className={className} />
);

export const UserIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <User className={className} />
);

// Scroll to top button component
export function ScrollToTopButton({ isVisible, onClick }: { isVisible: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 size-14 rounded-full bg-gradient-to-br from-red-600 to-blue-800 text-white shadow-2xl transition-all duration-300 hover:shadow-red-600/50 hover:-translate-y-1 hover:scale-110 z-50 flex items-center justify-center ${
        isVisible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-4"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
}