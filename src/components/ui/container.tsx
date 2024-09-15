import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

export function Container({
  children,
  className,
  ...rest
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn("max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
