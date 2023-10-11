import classNames from "classnames";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";

export const DoorIcon = (): JSX.Element => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 26H30V22H6V26Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5858 15.5859L4.58579 22.5859C3.80474 23.3669 3.80474 24.6333 4.58579 25.4143L11.5858 32.4143L14.4142 29.5859L8.82844 24.0001L14.4142 18.4144L11.5858 15.5859Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 8C16 6.89544 16.8954 6 18 6H42C43.1046 6 44 6.89544 44 8V40C44 41.1046 43.1046 42 42 42H18C16.8954 42 16 41.1046 16 40V34H20V38H40V10H20V14H16V8Z"
      fill="black"
    />
  </svg>
);
