/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[13px] text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[0_10px_25px_rgba(29,78,216,0.3)] hover:bg-[#1741b8]",
        secondary:
          "border border-[var(--primary)] bg-white text-[var(--primary)] hover:bg-[#eef4ff]",
        ghost: "hover:bg-[var(--muted)] text-[var(--foreground)]",
      },
      size: {
        default: "h-12 px-5",
        sm: "h-10 px-4 rounded-[11px]",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };

