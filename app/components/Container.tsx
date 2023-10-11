import classNames from "classnames";
import { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
}

export const Container = ({ children, className }: Props): JSX.Element => {
  return (
    <div className={classNames("max-w-7xl m-auto px-4", className)}>
      {children}
    </div>
  );
};
