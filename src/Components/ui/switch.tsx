import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils"; // adjust path if needed

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, checked, ...props }, ref) => {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      checked={checked}
      className={cn(
        "peer inline-flex h-4 w-9 shrink-0 cursor-pointer items-center rounded-full",
        "transition-colors duration-300 ease-in-out focus:outline-none",
        checked ? "bg-gray-300" : "bg-gray-600",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-3 w-3 rounded-full shadow-lg",
          "transition-transform duration-300 ease-in-out",
          checked ? "bg-white" : "bg-black",
          "translate-x-1 data-[state=checked]:translate-x-5"
        )}
      />
    </SwitchPrimitive.Root>
  );
});

Switch.displayName = "Switch";

export { Switch };
