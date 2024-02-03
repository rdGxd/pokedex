interface ButtonProps {
  text: string;
  fn?: () => {};
}

export const Button = ({ text, fn }: ButtonProps) => {
  const handleClick = () => {
    if (fn) fn();
  };

  return (
    <div className="bg-black w-full flex justify-around">
      <button className="text-purple-400" type="button" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};
