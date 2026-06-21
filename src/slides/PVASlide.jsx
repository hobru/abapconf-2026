import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './PVASlide.module.css'

export default function PVASlide({ index, project }) {
  return (
    <Slide index={index} className={styles.pvaSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="pva.eyebrow" className={styles.eyebrow}>THE PROBLEM — FIRST STEPS WITH AGENTS</Editable>
          <Editable as="h2" id="pva.title" className={styles.title}>Great Tools, Wrong Data, Missing Services</Editable>
          <Editable as="p" id="pva.subtitle" className={styles.subtitle}>Power Virtual Agents + Teams worked — but only for very specific demos</Editable>
        </div>

        <div className={styles.layout}>
          {/* Left: What worked */}
          <div className={styles.column}>
            <div className={styles.sectionCard}>
              <Editable as="h3" id="pva.works.title" className={styles.sectionTitle}>✅ What Worked</Editable>
              <div className={styles.items}>
                <Editable as="p" id="pva.works.1" className={styles.item}>PVA bots in Teams — chat with SAP data</Editable>
                <Editable as="p" id="pva.works.2" className={styles.item}>Power Automate → SAP connector → RFCs/BAPIs</Editable>
                <Editable as="p" id="pva.works.3" className={styles.item}>GWSAMPLE & SFLIGHT for generic scenarios</Editable>
              </div>
              <a href="https://github.com/mimergel/Chat_with_your_SAP_Data" target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
                🔗 Example: Chat_with_your_SAP_Data
              </a>
              <a href="https://youtu.be/dbzW2aSuZnw?si=XLEujbuojDh0hvTs&t=768" target="_blank" rel="noopener noreferrer" className={styles.demoBadge}>▶ DEMO</a>
            </div>
          </div>

          {/* Right: The real problems */}
          <div className={styles.column}>
            <div className={styles.sectionCard}>
              <Editable as="h3" id="pva.problem.title" className={styles.sectionTitle}>❌ The Real Problems</Editable>
              <div className={styles.items}>
                <div className={styles.problemItem}>
                  <span className={styles.problemIcon}>🎯</span>
                  <Editable as="p" id="pva.problem.1" className={styles.problemText}>Customers wanted THEIR data & services — not GWSAMPLE</Editable>
                </div>
                <div className={styles.problemItem}>
                  <span className={styles.problemIcon}>⏰</span>
                  <Editable as="p" id="pva.problem.2" className={styles.problemText}>Creating specific OData services & demo data took forever</Editable>
                </div>
                <div className={styles.problemItem}>
                  <span className={styles.problemIcon}>🙅</span>
                  <Editable as="p" id="pva.problem.3" className={styles.problemText}>ABAP dev colleagues? Busy. Always busy.</Editable>
                </div>
                <div className={styles.problemItem}>
                  <span className={styles.problemIcon}>📉</span>
                  <Editable as="p" id="pva.problem.4" className={styles.problemText}>Doing it myself? Harder every year — too far out of touch</Editable>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.punchline}>
          <Editable as="p" id="pva.punchline" className={styles.punchlineText}>
            I needed a way to quickly create ABAP artifacts again — without a 3-month refresher course…
          </Editable>
        </div>
      </div>

      <div className="slide-footer-keywords">
        <Editable as="span" id="pva.keywords">SEGW</Editable>
      </div>
      <BottomBar text={<Editable as="span" id="pva.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
