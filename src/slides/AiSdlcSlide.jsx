import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AiSdlcSlide.module.css'
import aiSdlcImage from '../data/AI-Powered-SDLC.png'

export default function AiSdlcSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.aiSdlcSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="aiSdlc.eyebrow" className={styles.eyebrow}>SAP @ MICROSOFT</Editable>
          <Editable as="h2" id="aiSdlc.title" className={styles.title}>AI-Powered SDLC</Editable>
        </div>

        <div className={styles.figure}>
          <img src={aiSdlcImage} alt="AI-Powered SDLC" className={styles.image} />
        </div>
      </div>

      <div className="slide-footer-keywords">
        <Editable as="span" id="aiSdlc.keywords" allowEmpty fallback="" />
      </div>
      <BottomBar text={<Editable as="span" id="aiSdlc.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
