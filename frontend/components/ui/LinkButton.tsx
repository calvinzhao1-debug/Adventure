"use client";

import Button, { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';

interface LinkButtonProps extends ButtonProps {
  href: string; // Explicitly require href since it's a link
}

export default function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Button 
      component={Link} 
      href={href} 
      {...props}
    >
      {children}
    </Button>
  );
}