import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './JourneyEarlySlide.module.css'

const steps = [
  { id: 'power-platform', step: '01', title: 'Power Platform Discovery', desc: 'Started building apps & automations with low-code. Found the SAP ERP Connector — RFCs & BAPIs, just like that!' },
  { id: 'odata-love', step: '02', title: 'OData — Now from the Other Side', desc: 'Already loved OData from my SAP days. Now consuming it via HTTP + Custom Connector in Power Platform. SEGW services, finally put to good use!', link: 'https://community.sap.com/t5/technology-blog-posts-by-members/beauty-of-odata/ba-p/13384175' },
  { id: 'best-friends', step: '03', title: 'SFLIGHT & GWSAMPLE — Best Friends', desc: 'Built apps, built automations. These demo services were my daily companions for everything Power Platform + SAP.' },
  { id: 'pain', step: '04', title: 'The Demo Grind', desc: 'Customer presentations = weeks of prep. Finding the right BAPI, building the right OData service, creating good demo data… every single time.' },
]

export default function JourneyEarlySlide({ index, project }) {
  return (
    <Slide index={index} className={styles.journeyEarlySlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="journeyEarly.eyebrow" className={styles.eyebrow}>~7 YEARS AGO</Editable>
          <Editable as="h2" id="journeyEarly.title" className={styles.title}>The Power Platform Era</Editable>
          <Editable as="p" id="journeyEarly.subtitle" className={styles.subtitle}>The Power Platform era — connecting to SAP the low-code way</Editable>
        </div>

        <EditableList
          id="journeyEarly.steps"
          items={steps}
          keyOf={(i) => i.id}
          className={styles.cards}
          itemClassName={styles.card}
        >
          {(item) => (
            <>
              <span className={styles.stepNumber}>{item.step}</span>
              <Editable as="h3" id={`journeyEarly.steps.${item.id}.title`} className={styles.cardTitle}>{item.title}</Editable>
              <Editable as="p" id={`journeyEarly.steps.${item.id}.desc`} className={styles.cardDesc}>{item.desc}</Editable>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  📖 Beauty of OData
                </a>
              )}
            </>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="journeyEarly.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
