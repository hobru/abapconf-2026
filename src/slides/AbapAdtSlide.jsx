import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AbapAdtSlide.module.css'
import abapAdtImage from '../data/ABAP-ADT.png'

export default function AbapAdtSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.abapAdtSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="abapAdt.eyebrow" className={styles.eyebrow}>SAP @ MICROSOFT</Editable>
          <Editable as="h2" id="abapAdt.title" className={styles.title}>ABAP in ADT</Editable>
        </div>

        <div className={styles.figure}>
          <img src={abapAdtImage} alt="ABAP in ADT" className={styles.image} />
        </div>
      </div>

      <div className="slide-footer-keywords">
        <Editable as="span" id="abapAdt.keywords" allowEmpty fallback="" />
      </div>
      <BottomBar text={<Editable as="span" id="abapAdt.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
