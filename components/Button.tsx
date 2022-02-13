import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<any> & {
  chidren?: ReactNode;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-5 py-1 rounded text-white transition ease bg-blue-500 hover:bg-blue-600 focus:outline-none active:bg-blue-700 active:shadow active:scale-95 shadow-lg shadow-blue-500/50 ${props.className}`}
    ></button>
  );
}
