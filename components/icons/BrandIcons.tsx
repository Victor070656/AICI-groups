interface BrandIconProps {
  className?: string;
  size?: number;
}

export function AICILogo({ className = "", size = 40 }: BrandIconProps) {
  return (
    <div className={`${className} text-primary`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_6_535)">
          <path
            clipRule="evenodd"
            d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_6_535">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export function BrandLogo({ className = "", showText = true }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <AICILogo size={40} />
      {showText && (
        <div>
          <h3 className="font-display text-xl font-bold text-white">AICI Group</h3>
        </div>
      )}
    </div>
  );
}