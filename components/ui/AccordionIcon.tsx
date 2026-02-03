interface AccordionIconProps {
  isOpen: boolean;
  size?: number; // Size in pixels for both width and height
  lineWidth?: number; // Width of the lines
  color?: string; // Color of the icon
}

export default function AccordionIcon({
  isOpen,
  size = 48, // Default 48px (w-12 h-12)
  lineWidth = 24, // Default 24px (w-6)
  color = "#213614"
}: AccordionIconProps) {
  return (
    <span
      className="relative flex items-center justify-center"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Horizontal line (always visible) */}
      <span
        className="absolute"
        style={{
          width: `${lineWidth}px`,
          height: '1px',
          backgroundColor: color
        }}
      ></span>

      {/* Vertical line (rotates to horizontal on open) */}
      <span
        className={`absolute transition-transform duration-300 ${isOpen ? "-rotate-90" : "rotate-0"
          }`}
        style={{
          width: '1px',
          height: `${lineWidth}px`,
          backgroundColor: color
        }}
      ></span>
    </span>
  );
}
