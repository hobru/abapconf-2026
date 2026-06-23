import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './TempHubSlide.module.css'
import tempHubImage from '../data/Temp-Hub.png'

export default function TempHubSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.tempHubSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="tempHub.eyebrow" className={styles.eyebrow}>SAP @ MICROSOFT</Editable>
          <Editable as="h2" id="tempHub.title" className={styles.title}>Tempo Hub</Editable>
        </div>

        <div className={styles.figure}>
          <img src={tempHubImage} alt="Template Hub" className={styles.image} />
        </div>
      </div>

      <div className="slide-footer-keywords">
        <Editable as="span" id="tempHub.keywords" allowEmpty fallback="" />
      </div>
      <BottomBar text={<Editable as="span" id="tempHub.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
