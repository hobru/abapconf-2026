import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import domHeroImage from '../data/dom.png'
import domEastImage from '../data/dom-east.png'
import domWestImage from '../data/dom-west.png'
import domEsat2Image from '../data/dom-esat2.png'
import domFrontImage from '../data/dom-front.png'
import domInnenImage from '../data/dom-innen.png'
import gedkircheImage from '../data/gedkirche.png'
import pilgerImage from '../data/pilger.png'
import poertelImage from '../data/poertel.png'
import styles from './AboutMyselfSlide.module.css'

const askTopics = [
  { id: 'speyer', text: 'The history of Speyer and…' },
  { id: 'sap', text: 'SAP' },
  { id: 'copilot', text: 'Copilot' },
  { id: 'power-platform', text: 'Power Platform (& SAP)' },
  { id: 'm365', text: 'M365 (& SAP)' },
  { id: 'security-sso', text: 'Security / SSO (& SAP)' },
  { id: 'integration', text: 'Integration' },
]

export default function AboutMyselfSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.aboutMyselfSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.floatingPhotos} aria-hidden="true">
          <img src={domEastImage} alt="" className={`${styles.floatPhoto} ${styles.floatPhoto1}`} />
          <img src={domWestImage} alt="" className={`${styles.floatPhoto} ${styles.floatPhoto2}`} />
          <img src={gedkircheImage} alt="" className={`${styles.floatPhoto} ${styles.floatPhoto3}`} />
          <img src={pilgerImage} alt="" className={`${styles.floatPhoto} ${styles.floatPhoto4}`} />
          <img src={poertelImage} alt="" className={`${styles.floatPhoto} ${styles.floatPhoto5}`} />
          <img src={domFrontImage} alt="" className={`${styles.floatPhoto} ${styles.floatPhoto6}`} />
          <img src={domInnenImage} alt="" className={`${styles.floatPhoto} ${styles.floatPhoto7}`} />
          <img src={domEsat2Image} alt="" className={`${styles.floatPhoto} ${styles.floatPhoto8}`} />
        </div>

        <div className={styles.header}>
          <div>
            <Editable as="p" id="aboutMyself.eyebrow" className={styles.eyebrow}>
              WHO IS SPEAKING
            </Editable>
            <Editable as="h2" id="aboutMyself.title" className={styles.title}>
              About myself.
            </Editable>
          </div>
          <img src={domHeroImage} alt="Main profile visual" className={styles.heroPhoto} />
        </div>

        <div className={styles.contentArea}>
          <div className={styles.profilePanel}>
            <Editable as="h3" id="aboutMyself.name" className={styles.identityLine}>
              Holger Bruchelt
            </Editable>
            <Editable as="p" id="aboutMyself.role" className={styles.identityLine}>
              Product Manager
            </Editable>
            <Editable as="p" id="aboutMyself.handle" className={styles.handle}>
              @hobru
            </Editable>
            <Editable as="p" id="aboutMyself.experience1" className={styles.metaLine}>
              10+ years at <span className={styles.sapHighlight}>SAP</span>
            </Editable>
            <Editable as="p" id="aboutMyself.experience2" className={styles.metaLine}>
              (almost) 10 years at <span className={styles.msHighlight}>Microsoft</span>
            </Editable>
            <Editable as="p" id="aboutMyself.integration" className={styles.metaLine}>
              always integration!
            </Editable>
            <div className={styles.funFact}>
              <Editable as="span" id="aboutMyself.funFact.label">
                Fun fact:{' '}
              </Editable>
              <a
                href="https://www.discoverspeyer.de/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.funFactLink}
              >
                <Editable as="span" id="aboutMyself.funFact.linkLabel">
                  Tourguide in Speyer
                </Editable>
              </a>
            </div>

            <Editable as="h3" id="aboutMyself.askTitle" className={styles.askTitle}>
              Ask me about…
            </Editable>
            <EditableList
              id="aboutMyself.askTopics"
              items={askTopics}
              keyOf={(topic) => topic.id}
              className={styles.askList}
              itemClassName={styles.askItem}
            >
              {(topic) => (
                <Editable as="span" id={`aboutMyself.askTopics.${topic.id}`} className={styles.askItemText}>
                  {topic.text}
                </Editable>
              )}
            </EditableList>
          </div>
        </div>
      </div>

      <div className="slide-footer-keywords">
        <Editable as="span" id="aboutMyself.keywords" allowEmpty fallback="" />
      </div>
      <BottomBar text={<Editable as="span" id="aboutMyself.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
