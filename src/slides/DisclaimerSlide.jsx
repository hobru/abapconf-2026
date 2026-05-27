import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './DisclaimerSlide.module.css'

export default function DisclaimerSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.disclaimerSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="disclaimer.eyebrow" className={styles.eyebrow}>⚠️ DISCLAIMER</Editable>
          <Editable as="h2" id="disclaimer.title" className={styles.title}>Before We Start…</Editable>
        </div>

        <div className={styles.comicStrip}>
          {/* Panel 1: The past */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelNumber}>1</span>
              <Editable as="span" id="disclaimer.panel1.title" className={styles.panelTitle}>The Timeline</Editable>
            </div>
            <div className={styles.speechBubble}>
              <span className={styles.character}>🧑‍💻</span>
              <div className={styles.bubble}>
                <Editable as="p" id="disclaimer.panel1.text" className={styles.bubbleText}>
                  My journey started BEFORE the SAP API Policy was released!
                </Editable>
              </div>
            </div>
          </div>

          {/* Panel 2: On-prem */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelNumber}>2</span>
              <Editable as="span" id="disclaimer.panel2.title" className={styles.panelTitle}>The Setup</Editable>
            </div>
            <div className={styles.speechBubble}>
              <span className={styles.character}>🏢</span>
              <div className={styles.bubble}>
                <Editable as="p" id="disclaimer.panel2.text" className={styles.bubbleText}>
                  All done against on-prem systems — S/4HANA and even ECC. My understanding: this was allowed.
                </Editable>
              </div>
            </div>
          </div>

          {/* Panel 3: The future */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelNumber}>3</span>
              <Editable as="span" id="disclaimer.panel3.title" className={styles.panelTitle}>What's Next</Editable>
            </div>
            <div className={styles.speechBubble}>
              <span className={styles.character}>🔮</span>
              <div className={styles.bubble}>
                <Editable as="p" id="disclaimer.panel3.text" className={styles.bubbleText}>
                  Now exploring the official SAP MCP Server, ABAP tools for VS Code, and Arc-1 from Marian!
                </Editable>
              </div>
            </div>
          </div>
        </div>

        {/* Links bar */}
        <div className={styles.links}>
          <a className={styles.link} href="https://help.sap.com/doc/sap-api-policy/latest/en-US/API_Policy_latest.pdf" target="_blank" rel="noopener noreferrer">
            <span className={styles.linkIcon}>📄</span>
            <Editable as="span" id="disclaimer.link.policy">SAP API Policy (PDF)</Editable>
          </a>
          <a className={styles.link} href="https://marianfoo.github.io/arc-1/deployment/" target="_blank" rel="noopener noreferrer">
            <span className={styles.linkIcon}>🧩</span>
            <Editable as="span" id="disclaimer.link.arc1">Arc-1 by Marian</Editable>
          </a>
        </div>

        {/* Personal project note */}
        <div className={styles.note}>
          <Editable as="p" id="disclaimer.note" className={styles.noteText}>
            💡 The first part of this talk features a personal project — not linked to Microsoft. At the end, we'll take a look at how ABAP development works at Microsoft.
          </Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="disclaimer.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
