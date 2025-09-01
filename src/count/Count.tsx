import { Button } from "@/components/ui/button";

interface CountProps {
  count: number;
  handleIncrement: (value: number) => void;
  handleDecrement: (value: number) => void;
}

const Count = ({ count, handleIncrement, handleDecrement }: CountProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-4xl text-center">{count}</h3>
      <div className="flex gap-6 justify-center">
        <Button onClick={() => handleIncrement(1)}>Increment</Button>
        <Button onClick={() => handleDecrement(1)}>Decrement</Button>
      </div>
    </div>
  );
};

export default Count;
