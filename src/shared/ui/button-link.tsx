import * as React from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/shared/ui/button";
import type { VariantProps } from "class-variance-authority";

type LinkProps = React.ComponentProps<typeof Link>;

export interface ButtonLinkProps extends LinkProps, VariantProps<typeof buttonVariants> {}

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
