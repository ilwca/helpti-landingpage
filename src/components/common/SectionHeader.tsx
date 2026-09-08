import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({ title, description, titleClassName, descriptionClassName }: SectionHeaderProps) => (
  <div className="text-center mb-16">
    <h2 className={cn("font-display text-3xl md:text-4xl font-bold mb-4", titleClassName)}>
      {title}
    </h2>
    <p className={cn("text-lg max-w-2xl mx-auto", descriptionClassName)}>
      {description}
    </p>
  </div>
);

export default SectionHeader;
