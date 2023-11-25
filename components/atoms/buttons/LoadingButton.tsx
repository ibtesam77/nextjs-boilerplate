import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { FaSpinner } from "react-icons/fa";
import Button, { ButtonProps } from "./Button";

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const LoadingButton: FC<LoadingButtonProps> = ({
  isLoading = false,
  className = "",
  children,
  ...buttonProps
}) => {
  return (
    <Button
      {...buttonProps}
      disabled={isLoading}
      className={twMerge("flex items-center gap-2", className)}
    >
      {isLoading && <FaSpinner className="animate-spin" size={20} />}
      {children}
    </Button>
  );
};

export default LoadingButton;
