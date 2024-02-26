import { Card } from "@/components/ui/card";
import { Percent, Target } from "lucide-react";

interface OpenEndedPercentageProps {
  percentage: number;
}

const OpenEndedPercentage: React.FC<OpenEndedPercentageProps> = ({ percentage }) => {
  return (
    <Card className="flex flex-row items-center p-2">
      <Target size={30} />
      <span className="ml-3 text-2xl opacity-75">{percentage}</span>
      <Percent className="" size={25} />
    </Card>
  );
}

export default OpenEndedPercentage
