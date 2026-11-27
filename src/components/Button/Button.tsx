import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "primary-light" | "secondary" | "tertiary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma "Type": Primary, Primary light, Secondary, Tertiary. */
  variant?: ButtonVariant;
  /** Figma "... with icon" types. */
  icon?: ReactNode;
  /** Figma "... icon only" types (primary / secondary only). Requires `icon` and `aria-label`. */
  iconOnly?: boolean;
}

/** TEMP placeholder: replace with the real "Icons lines / arrow right" SVG from Figma. */
export const ArrowRightIcon = () => (
  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" aria-hidden="true">
    <path d="M0 8.5h18M11 1l7.5 7.5L11 16" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function Button({
  variant = "primary",
  icon,
  iconOnly = false,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const cls = [
    styles.button,
    styles[variant],
    iconOnly ? styles.iconOnly : "",
    "ib-label-medium",
    className,
  ].filter(Boolean).join(" ");
  return (
    <button type={type} className={cls} {...rest}>
      <span className={styles.inner}>
        {!iconOnly && <span className={styles.label}>{children}</span>}
        {icon}
      </span>
    </button>
  );
}
