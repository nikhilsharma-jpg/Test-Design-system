import type { ReactNode } from "react";
import styles from "./TeamMemberCard.module.css";

export interface TeamMemberCardProps {
  /** Person's name. Figma content limit: max 10 words. */
  name: string;
  role: string;
  /** Photo URL. Figma layer: "Photo (replace fill with image)". */
  photoSrc?: string;
  photoAlt?: string;
  /** Text under the "WOW Moment" label. Figma content limit: max 70 words. */
  wowMoment?: string;
  aimsTo?: string;
  philosophy?: string;
  /** Social icons (e.g. LinkedIn, X) rendered in the Socials row. */
  socials?: ReactNode;
  className?: string;
}

export function TeamMemberCard({
  name,
  role,
  photoSrc,
  photoAlt = "",
  wowMoment,
  aimsTo,
  philosophy,
  socials,
  className,
}: TeamMemberCardProps) {
  return (
    <article className={[styles.card, className].filter(Boolean).join(" ")}>
      {/* TODO: "Top Background Shape" SVG from Figma (asset download was blocked) */}
      <div className={styles.content}>
        <div className={styles.photo}>
          {photoSrc ? <img src={photoSrc} alt={photoAlt} /> : null}
        </div>
        <div className={styles.body}>
          <div className={styles.nameBlock}>
            <h3 className={`ib-headline-web-medium ${styles.name}`}>{name}</h3>
            <p className={`ib-title-large ${styles.role}`}>{role}</p>
          </div>

          {wowMoment && (
            <section className={styles.section}>
              <div className={styles.labelRow}>
                <span className={styles.wow}>
                  W<span className={styles.wowO}>O</span>W
                </span>
                <span className="ib-headline-mobile-small">Moment</span>
              </div>
              <p className={`ib-body-small ${styles.text}`}>{wowMoment}</p>
            </section>
          )}

          {aimsTo && (
            <section className={`${styles.section} ${styles.sectionSpaced}`}>
              <h4 className={`ib-headline-mobile-small ${styles.heading}`}>Aims to</h4>
              <p className={`ib-body-small ${styles.text}`}>{aimsTo}</p>
            </section>
          )}

          {philosophy && (
            <section className={`${styles.section} ${styles.sectionSpaced}`}>
              <h4 className={`ib-headline-mobile-small ${styles.heading}`}>Philosophy</h4>
              <p className={`ib-body-small ${styles.text}`}>{philosophy}</p>
            </section>
          )}

          {socials && <div className={styles.socials}>{socials}</div>}
        </div>
      </div>
      {/* TODO: "Background / Bottom" SVG from Figma (asset download was blocked) */}
    </article>
  );
}
