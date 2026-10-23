// Button — botón principal con micro-interacción whileTap.
// variant: "primary" (teal) | "whatsapp" (verde) | "outline".
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'whatsapp' | 'outline';
  href?: string; // si se pasa, renderiza <a> (target _blank rel noopener)
  onClick?: () => void;
  fullWidth?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  fullWidth = false,
  ariaLabel,
  className = '',
}: ButtonProps) {
  const classes =
    `${styles.button} ${styles[variant]} ${fullWidth ? styles.full : ''} ${className}`.trim();
  const motionProps = {
    whileTap: { scale: 0.96 },
    whileHover: { scale: 1.03 },
    transition: { type: 'spring' as const, stiffness: 420, damping: 22 },
    className: classes,
    'aria-label': ariaLabel,
  };

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <motion.a
        {...motionProps}
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type="button" onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
