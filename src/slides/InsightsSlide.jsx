import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './InsightsSlide.module.css'
import sapAtMsftImage from '../data/SAP-at-MSFT.png'

export default function InsightsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.insightsSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="insights.eyebrow" className={styles.eyebrow}>SAP @ MICROSOFT</Editable>
          <Editable as="h2" id="insights.title" className={styles.title}>From <span className={styles.highlightMy}>my</span> journey to <span className={styles.highlightWhite}>SAP at</span> <span className={styles.highlightSap}>Microsoft</span></Editable>
        </div>

        <div className={styles.figure}>
          <img src={sapAtMsftImage} alt="SAP at Microsoft" className={styles.image} />
        </div>
      </div>

      <div className="slide-footer-keywords">
        <Editable as="span" id="insights.keywords" allowEmpty fallback="" />
      </div>
      <BottomBar text={<Editable as="span" id="insights.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
