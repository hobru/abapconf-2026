import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './ArchitectureSlide.module.css'

export default function ArchitectureSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.architectureSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="arch.eyebrow" className={styles.eyebrow}>ARCHITECTURE</Editable>
          <Editable as="h2" id="arch.title" className={styles.title}>System Overview</Editable>
        </div>

        <div className={styles.flow}>
          <div className={styles.flowBox}>
            <Editable as="h3" id="arch.box1.title" className={styles.boxTitle}>Copilot Studio</Editable>
            <Editable as="span" id="arch.box1.sub" className={styles.boxSub}>AI Orchestration</Editable>
          </div>
          <span className={styles.arrow}>→</span>
          <div className={styles.flowBox}>
            <Editable as="h3" id="arch.box2.title" className={styles.boxTitle}>Azure APIM</Editable>
            <Editable as="span" id="arch.box2.sub" className={styles.boxSub}>Auth & Gateway</Editable>
          </div>
          <span className={styles.arrow}>→</span>
          <div className={styles.flowBox}>
            <Editable as="h3" id="arch.box3.title" className={styles.boxTitle}>ABAP MCP Server</Editable>
            <Editable as="span" id="arch.box3.sub" className={styles.boxSub}>Tools & Logic</Editable>
          </div>
        </div>

        <div className={styles.notes}>
          <Editable as="p" id="arch.note1" className={styles.note}>APIM handles authentication and enterprise gateway concerns</Editable>
          <Editable as="p" id="arch.note2" className={styles.note}>ABAP MCP Server focuses on functionality — separation of concerns</Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="arch.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
