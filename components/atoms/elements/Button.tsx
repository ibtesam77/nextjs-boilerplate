"use client";

import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { FaSpinner } from "react-icons/fa";
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  ButtonColorClasses,
  ButtonSizeClasses,
  ButtonVariantClasses,
} from "@/types/button";

const BUTTON_SIZE_CLASSES: ButtonSizeClasses = {
  small: "py-2 px-4 xs:py-1 xs:px-2 xs:text-sm",
  medium: "py-3 px-6 xs:py-2 xs:px-4 xs:text-md",
  large: "py-4 px-8 xs:py-3 xs:px-6 xs:text-lg",
};

const BUTTON_COLOR_CLASSES: ButtonColorClasses = {
  primary: "text-white bg-blue-600 hover:bg-blue",
  transparent: "text-blue bg-transparent hover:bg-blue hover:text-white",
};

const BUTTON_VARIANT_CLASSES: ButtonVariantClasses = {
  filled: "border border-transparent",
  outlined: "border-opacity-20 border border-blue-100",
};

const BUTTON_ACTIVE_CLASSES: string = "text-white bg-blue";

const BUTTON_DISABLED_CLASSES: string = "cursor-not-allowed";

const BUTTON_LOADING_CLASSES: string = "flex gap-2 items-center";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  active?: boolean;
  isLoading?: boolean;
}

export default function Button({
  size = "medium",
  color = "primary",
  variant = "filled",
  active = false,
  isLoading = false,
  className = "",
  children,
  ...buttonProps
}: ButtonProps) {
  const buttonSizesClasses = useMemo(() => BUTTON_SIZE_CLASSES[size], [size]);
  const buttonColorClasses = useMemo(
    () => (active ? BUTTON_ACTIVE_CLASSES : BUTTON_COLOR_CLASSES[color]),
    [color, active]
  );
  const buttonVariantClasses = useMemo(
    () => BUTTON_VARIANT_CLASSES[variant],
    [variant]
  );
  const buttonDisabledClasses = useMemo(
    () => (buttonProps.disabled ? BUTTON_DISABLED_CLASSES : ""),
    [buttonProps.disabled]
  );
  const buttonLoadingClasses = useMemo(
    () => (isLoading ? BUTTON_LOADING_CLASSES : ""),
    [isLoading]
  );

  return (
    <button
      {...buttonProps}
      className={twMerge(
        buttonSizesClasses,
        buttonColorClasses,
        buttonVariantClasses,
        buttonDisabledClasses,
        buttonLoadingClasses,
        className
      )}
    >
      {isLoading && <FaSpinner className="animate-spin" size={20} />}
      {children}
    </button>
  );
}
