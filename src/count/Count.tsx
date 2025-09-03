import { Button } from "@/components/ui/button";

interface CountProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const Count = ({ count, handleIncrement, handleDecrement }: CountProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-4xl text-center">{count}</h3>
      <div className="flex gap-6 justify-center">
        <Button onClick={ handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
};

export default Count;
