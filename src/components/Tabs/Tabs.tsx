import type { ButtonHTMLAttributes } from "react";
import styles from "./Tabs.module.css";

export type TabSize = "sm" | "md" | "lg";

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  size?: TabSize;
}

export function Tab({ selected = false, size = "md", className, children, ...rest }: TabProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      className={[styles.tab, styles[size], selected ? styles.selected : "", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface TabsProps {
  items: { id: string; label: string; disabled?: boolean }[];
  value: string;
  onChange: (id: string) => void;
  size?: TabSize;
  className?: string;
}

export function Tabs({ items, value, onChange, size = "md", className }: TabsProps) {
  return (
    <div role="tablist" className={[styles.list, className].filter(Boolean).join(" ")}>
      {items.map((it) => (
        <Tab key={it.id} size={size} selected={it.id === value} disabled={it.disabled} onClick={() => onChange(it.id)}>
          {it.label}
        </Tab>
      ))}
    </div>
  );
}
