import React from "react";
import { Text as RNText, type TextProps } from "react-native";

type AppTextProps = TextProps & {
  className?: string;
};

export default function AppText({ className, ...props }: AppTextProps) {
  const mergedClassName = className ? `font-sans ${className}` : "font-sans";

  return <RNText {...props} className={mergedClassName} />;
}
