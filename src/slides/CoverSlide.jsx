/**
 * SAMPLE CONTENT ONLY
 * This slide contains scaffolded placeholder copy.
 * Agents must not use it as factual project context until the user replaces it.
 */
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './CoverSlide.module.css'

export default function CoverSlide() {
  return (
    <Slide index={0} className={styles.cover}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <Editable as="p" id="cover.eyebrow" className={styles.eyebrow}>abapConf 2026</Editable>
          <h1>
            <Editable as="span" id="cover.titleBefore">Back to ABAP:</Editable> <Editable as="span" id="cover.titleHighlight" className={styles.highlight}>How Vibe Coding Brought a Lapsed Developer Back to Life</Editable>
          </h1>
          <Editable as="p" id="cover.subtitle" multiline className={styles.subtitle}>
            V5: Back to ABAP: How Vibe Coding Brought a Lapsed Developer Back to Life
          </Editable>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Speaker</span>
              <a href="https://www.linkedin.com/in/holger-bruchelt/" target="_blank" rel="noopener noreferrer" className={styles.metaValue}>Holger Bruchelt</a>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>Product Management SAP Integration, Microsoft</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Event</span>
              <a href="https://abapconf.org/abapconf2026/sessions/v5/" target="_blank" rel="noopener noreferrer" className={styles.metaValue}>abapConf 2026</a>
            </div>
          </div>
        </div>

        <div className={styles.watermark} aria-hidden="true">
          <img src="/deckio.png" alt="" className={styles.watermarkIcon} />
          <span className={styles.watermarkText}>DECKIO</span>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="cover.footer">cool-deck</Editable>} />
    </Slide>
  )
}
