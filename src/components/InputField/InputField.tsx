import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import styles from "./InputField.module.css";

export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  /** Figma "Size": Small / Medium / Large. */
  size?: "small" | "medium" | "large";
  /** Shows the error state with this message (Figma: "This field is required"). */
  error?: string;
}

export function InputField({ label, size = "medium", error, id, className, ...rest }: InputFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const errId = `${inputId}-error`;
  return (
    <div className={[styles.field, styles[size], className].filter(Boolean).join(" ")}>
      <label htmlFor={inputId} className={styles.label}>{label}</label>
      <input
        id={inputId}
        className={styles.input}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        {...rest}
      />
      {error && <p id={errId} className={styles.error}>{error}</p>}
    </div>
  );
}
