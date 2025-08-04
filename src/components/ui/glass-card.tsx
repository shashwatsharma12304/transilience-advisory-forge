import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "highlight"
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card rounded-lg transition-all duration-300",
          variant === "interactive" && "hover:bg-white/10 hover:scale-[1.02] cursor-pointer",
          variant === "highlight" && "ring-1 ring-primary/30 bg-white/10",
          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }