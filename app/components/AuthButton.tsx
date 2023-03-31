"use client";

import { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
}

export const AuthButton = ({ children, ...props }: Props): JSX.Element => {
  return (
    <button
      className="pl-3 px-6 py-2 flex items-center gap-2 bg-white rounded-full border-2 border-gray-600 text-xl md:text-2xl hover:bg-gray-100"
      {...props}
    >
      {children}
    </button>
  );
};
