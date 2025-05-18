import React from "react";
import { cn } from "@/lib";

interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Wrapper = ({ className, children, id }: Props) => {
  return (
    <section
      className={cn(
        "h-full mx-auto w-full lg:max-w-screen-xl px-4 lg:px-20",
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
};

export default Wrapper;
