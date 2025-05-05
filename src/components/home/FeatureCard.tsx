
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="pt-6">
      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
        <Icon name={icon} className="text-primary" size={24} />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default FeatureCard;
