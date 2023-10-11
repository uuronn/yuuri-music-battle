"use client";

import classNames from "classnames";
import { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<"button"> {
  index: number;
  title: string;
}

export const AnswerButton = ({
  index,
  title,
  className,
  ...props
}: Props): JSX.Element => {
  const alphabet =
    index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D";

  return (
    <button
      className={classNames(
        "w-[280px] px-4 py-3 bg-gray-100 rounded-md border-2 border-black font-medium text-center relative hover:bg-gray-200 md:text-xl",
        className
      )}
      {...props}
    >
      <span className="text-xl font-semibold absolute left-[16px]">
        {alphabet}.&nbsp;
      </span>
      {title}
    </button>
  );
};
