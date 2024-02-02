interface ButtonProps {
  text: string;
  fn?: () => void;
}

export const Button = ({ text, fn }: ButtonProps) => {
  const handleClick = () => {
    if (fn) fn();
  };

  return (
    <>
      <button className="text-purple-400" type="button" onClick={handleClick}>
        {text}
      </button>
    </>
  );
};
