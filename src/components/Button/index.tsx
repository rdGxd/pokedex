interface ButtonProps {
  text: string;
  fn?: () => {};
  className: string;
}

export const Button = ({ text, fn, className }: ButtonProps) => {
  const handleClick = () => {
    if (fn) fn();
  };

  return (
    <div className={`${className}`}>
      <button className="text-purple-400" type="button" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};
