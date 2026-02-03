interface AccordionIconProps {
  isOpen: boolean;
  size?: number; 
  lineWidth?: number; 
  color?: string; 
}

export default function AccordionIcon({
  isOpen,
  size = 48, 
  lineWidth = 24,
  color = "#213614"
}: AccordionIconProps) {
  return (
    <span
      className="relative flex items-center justify-center"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
     
      <span
        className="absolute"
        style={{
          width: `${lineWidth}px`,
          height: '1px',
          backgroundColor: color
        }}
      ></span>

    
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
