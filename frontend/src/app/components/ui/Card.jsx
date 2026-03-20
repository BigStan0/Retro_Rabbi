import React from 'react'

// Root Card Wrapper
export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border ${className}`}>
      {children}
    </div>
  );
};

// Header Section
export const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 ${className}`}>
      {children}
    </div>
  );
};

// Title
export const CardTitle = ({ children, className = "" }) => {
  return (
    <h4 className={`leading-none ${className}`}>
      {children}
    </h4>
  );
};

// Description
export const CardDescription = ({ children, className = "" }) => {
  return (
    <p className={`text-muted-foreground ${className}`}>
      {children}
    </p>
  );
};

// Action (e.g. buttons/icons)
export const CardAction = ({ children, className = "" }) => {
  return (
    <div className={`col-start-2 row-span-2 row-start-1 self-start justify-self-end ${className}`}>
      {children}
    </div>
  );
};

// Content
export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`px-6 [&:last:pb-6 ${className}`}>
      {children}
    </div>
  );
};

// Footer
export const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center px-6 pb-6 [.border-t]:pt-6 ${className}`}>
      {children}
    </div>
  );
};