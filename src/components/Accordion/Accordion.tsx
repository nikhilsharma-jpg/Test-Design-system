import { useId, useState } from "react";
import type { ReactNode } from "react";
import styles from "./Accordion.module.css";

export interface AccordionProps {
  title: string;
  children?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Accordion({ title, children, defaultOpen = false, open, onOpenChange, className }: AccordionProps) {
  const [inner, setInner] = useState(defaultOpen);
  const isOpen = open ?? inner;
  const panelId = useId();
  const toggle = () => {
    onOpenChange?.(!isOpen);
    if (open === undefined) setInner(!isOpen);
  };
  return (
    <div className={[styles.accordion, className].filter(Boolean).join(" ")}>
      <button type="button" className={`ib-label-medium ${styles.header}`} aria-expanded={isOpen} aria-controls={panelId} onClick={toggle}>
        <span>{title}</span>
        {/* TEMP: CSS-drawn plus/minus; replace with Figma "Icons lines" plus/minus if exact glyphs are needed */}
        <span className={`${styles.icon} ${isOpen ? styles.minus : styles.plus}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <div id={panelId} role="region" className={`ib-body-small ${styles.content}`}>{children}</div>
      )}
    </div>
  );
}
