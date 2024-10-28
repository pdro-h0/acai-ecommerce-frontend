import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
  children: ReactNode;
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-yellow-500 px-6 py-2 rounded-xl text-white font-extrabold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
