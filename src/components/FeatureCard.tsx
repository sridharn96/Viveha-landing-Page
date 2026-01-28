import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  learnMore?: boolean;
  imageSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ icon: Icon, title, description, learnMore = true, imageSrc, className, style }: FeatureCardProps) => {
  return (
    <div className={`bg-card glass-card rounded-xl p-6 card-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-border/50 group ${className}`} style={style}>
      {imageSrc && (
        <div className="mb-6 -mx-6 -mt-6 overflow-hidden rounded-t-xl">
          <img src={imageSrc} alt={title} className="w-full h-auto object-cover" />
        </div>
      )}
      <div className="w-12 h-12 rounded-lg bg-coral-light flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      {learnMore && (
        <a href="#" className="text-sm font-medium text-primary hover:text-coral-dark transition-colors inline-flex items-center gap-1">
          Learn more <span>→</span>
        </a>
      )}
    </div>
  );
};

export default FeatureCard;
