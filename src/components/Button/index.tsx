"use client";

interface ButtonProps {
  text: string;
  fn?: () => void;
}

export const Button = async ({ text, fn }: ButtonProps) => {
  const handleClick = async () => {
    if (fn) fn();
  };

  return (
    <>
      <button onClick={handleClick} className="text-purple-400" type="button">
        {text}
      </button>
    </>
  );
};
