export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor = "primary" | "transparent";
export type ButtonVariant = "filled" | "outlined";

export type ButtonSizeClasses = {
  [key in ButtonSize]: string;
};

export type ButtonColorClasses = {
  [key in ButtonColor]: string;
};

export type ButtonVariantClasses = {
  [key in ButtonVariant]: string;
};
