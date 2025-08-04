interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        src="/lovable-uploads/21397cef-3656-4564-b42e-f095c96e270d.png" 
        alt="Transilience.ai" 
        className="w-full h-full object-contain animate-float"
      />
    </div>
  );
};