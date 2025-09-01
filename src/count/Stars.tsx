type StarsProps = {
  value: number;
};

const Stars = ({ value }: StarsProps) => {
  return (
    <div>
      Stars
      <p>{value}</p>
    </div>
  );
};

export default Stars;
