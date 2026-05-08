import React from "react";

interface ResponsiveContainerProps {
  children: React.ReactNode;
}

export default function ResponsiveContainer({
  children,
}: ResponsiveContainerProps) {
  return (
    <div className="responsive-container">
      {children}
    </div>
  );
}
