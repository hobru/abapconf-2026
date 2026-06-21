import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AdoDevOpsSlide.module.css'
import adoDevOpsImage from '../data/ADO-DevOps.png'

export default function AdoDevOpsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.adoDevOpsSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="adoDevOps.eyebrow" className={styles.eyebrow}>SAP @ MICROSOFT</Editable>
          <Editable as="h2" id="adoDevOps.title" className={styles.title}>SAP in Azure DevOps</Editable>
        </div>

        <div className={styles.figure}>
          <img src={adoDevOpsImage} alt="SAP in Azure DevOps" className={styles.image} />
        </div>
      </div>

      <div className="slide-footer-keywords">
        <Editable as="span" id="adoDevOps.keywords" allowEmpty fallback="" />
      </div>
      <BottomBar text={<Editable as="span" id="adoDevOps.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
