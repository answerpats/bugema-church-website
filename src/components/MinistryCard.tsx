
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MinistryProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  leader?: string;
  reverse?: boolean;
}

const MinistryCard = ({ id, title, description, imageUrl, leader, reverse = false }: MinistryProps) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-8 items-center",
      reverse && "md:flex-row-reverse"
    )}>
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-church-primary mb-4">{title}</h3>
        {leader && (
          <p className="text-church-accent font-medium mb-3">Led by: {leader}</p>
        )}
        <p className="text-gray-600 mb-6">{description}</p>
        <Button className="bg-church-primary hover:bg-church-primary/90 text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default MinistryCard;
