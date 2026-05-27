import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './VSPSlide.module.css'

export default function VSPSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.vspSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="vsp.eyebrow" className={styles.eyebrow}>MID-2024 — THE TURNING POINT</Editable>
          <Editable as="h2" id="vsp.title" className={styles.title}>VSP to the Rescue</Editable>
          <Editable as="p" id="vsp.subtitle" className={styles.subtitle}>From copy-pasting GPT output to generating ABAP directly on the system</Editable>
        </div>

        <div className={styles.timeline}>
          {/* Phase 1: GPT era */}
          <div className={styles.phase}>
            <div className={styles.phaseMarker}>
              <span className={styles.phaseDot} />
              <span className={styles.phaseLine} />
            </div>
            <div className={styles.phaseContent}>
              <Editable as="h3" id="vsp.phase1.title" className={styles.phaseTitle}>🤖 The GPT 3.5 Era</Editable>
              <Editable as="p" id="vsp.phase1.desc" className={styles.phaseDesc}>
                Generated ABAP code with ChatGPT, copy-pasted it into the system. A good start — but clumsy, error-prone, and didn't work half the time.
              </Editable>
            </div>
          </div>

          {/* Phase 2: VSP discovery */}
          <div className={`${styles.phase} ${styles.phaseHighlight}`}>
            <div className={styles.phaseMarker}>
              <span className={`${styles.phaseDot} ${styles.phaseDotAccent}`} />
              <span className={styles.phaseLine} />
            </div>
            <div className={styles.phaseContent}>
              <Editable as="h3" id="vsp.phase2.title" className={styles.phaseTitle}>⚡ Alice Shows Me VSP</Editable>
              <Editable as="p" id="vsp.phase2.desc" className={styles.phaseDesc}>
                My colleague Alice (oisee) demos an early internal version of Vibing Steampunk — GitHub Copilot generating ABAP and deploying it directly to an SAP system. EVERYTHING changed.
              </Editable>
              <a href="https://github.com/oisee/vibing-steampunk" target="_blank" rel="noopener noreferrer" className={styles.link}>
                🔗 github.com/oisee/vibing-steampunk
              </a>
            </div>
          </div>

          {/* Phase 3: Setup */}
          <div className={styles.phase}>
            <div className={styles.phaseMarker}>
              <span className={styles.phaseDot} />
              <span className={styles.phaseLine} />
            </div>
            <div className={styles.phaseContent}>
              <Editable as="h3" id="vsp.phase3.title" className={styles.phaseTitle}>☁️ Spinning Up a System</Editable>
              <Editable as="p" id="vsp.phase3.desc" className={styles.phaseDesc}>
                Deployed a simple SAP system on Azure using the SAP Deployment Automation Framework. Connected it to VSP. Ready to go.
              </Editable>
              <a href="https://learn.microsoft.com/en-us/azure/sap/automation/deployment-framework" target="_blank" rel="noopener noreferrer" className={styles.link}>
                🔗 SAP Deployment Automation Framework
              </a>
            </div>
          </div>

          {/* Phase 4: Demo */}
          <div className={styles.phase}>
            <div className={styles.phaseMarker}>
              <span className={`${styles.phaseDot} ${styles.phaseDotFinal}`} />
            </div>
            <div className={styles.phaseContent}>
              <Editable as="h3" id="vsp.phase4.title" className={styles.phaseTitle}>🚀 And Got Going…</Editable>
              <Editable as="p" id="vsp.phase4.desc" className={styles.phaseDesc}>
                From idea to working ABAP in minutes, not days. Let me show you.
              </Editable>
              <span className={styles.demoBadge}>▶ DEMO</span>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="vsp.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
