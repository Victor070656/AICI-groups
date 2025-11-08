import { Menu, X } from "lucide-react";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function MenuToggle({ isOpen, onClick, className = "" }: MenuToggleProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 text-gray-700 hover:text-gray-900 transition-colors ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </button>
  );
}