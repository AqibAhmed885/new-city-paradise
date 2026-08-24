import * as React from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type HeadingWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  weight?: HeadingWeight;
  children: React.ReactNode;
}

const sizeClasses: Record<HeadingSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
};

const weightClasses: Record<HeadingWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export function Heading({
  as: Component = 'h2',
  size = 'lg',
  weight,
  className = '',
  children,
  ...props
}: HeadingProps) {
  const classes = [
    'text-white ',
    'leading-[1.2]',
    sizeClasses[size],
    // weightClasses[weight? weight : 'medium'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Heading;
