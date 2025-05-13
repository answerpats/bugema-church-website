
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  alignLeft?: boolean;
  small?: boolean;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  children,
  alignLeft = false,
  small = false
}: HeroProps) => {
  return (
    <div 
      className={cn(
        "relative w-full flex items-center justify-center bg-church-primary bg-opacity-60 bg-cover bg-center",
        small ? "py-16 md:py-24" : "py-24 md:py-48"
      )}
      style={
        backgroundImage
          ? { backgroundImage: `linear-gradient(rgba(26, 46, 76, 0.7), rgba(26, 46, 76, 0.7)), url(${backgroundImage})` }
          : {}
      }
    >
      <div className="container mx-auto px-4">
        <div className={cn("max-w-3xl", alignLeft ? "" : "mx-auto text-center")}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-white opacity-90 mb-8">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
