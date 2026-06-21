import { useEffect, useState } from 'react'
import { BottomBar, Editable, Slide, useSlides, useOrderedItems } from '@deckio/deck-engine'
import styles from './JourneyEarlySlide.module.css'

const steps = [
  { id: 'power-platform', step: '01', title: 'Power Platform Discovery', desc: 'Started building apps & automations with low-code. Found the SAP ERP Connector — RFCs & BAPIs, just like that!', links: [{ href: 'https://learn.microsoft.com/en-us/power-platform/sap/connect/sap-erp-connector', label: '📖 SAP ERP Connector' }] },
  { id: 'odata-love', step: '02', title: 'OData — Now from the Other Side', desc: 'Already loved OData from my SAP days. Now consuming it via HTTP + Custom Connector in Power Platform. SEGW services, finally put to good use!', links: [{ href: 'https://community.sap.com/t5/technology-blog-posts-by-members/beauty-of-odata/ba-p/13384175', label: '📖 Beauty of OData' }, { href: 'https://learn.microsoft.com/en-us/power-platform/sap/connect/sap-odata-connector', label: '📖 SAP OData Connector' }] },
  { id: 'best-friends', step: '03', title: 'SFLIGHT & GWSAMPLE — Best Friends', desc: 'Built apps, built automations. These demo services were my daily companions for everything Power Platform + SAP.' },
  { id: 'pain', step: '04', title: 'The Demo Grind', desc: 'Customer presentations = weeks of prep. Finding the right BAPI, building the right OData service, creating good demo data… every single time.' },
]

export default function JourneyEarlySlide({ index, project }) {
  const { current } = useSlides()
  const isActive = index === current
  const ordered = useOrderedItems('journeyEarly.steps', steps, (i) => i.id)
  const [revealed, setRevealed] = useState(0)

  useEffect(() => {
    if (!isActive) setRevealed(0)
  }, [isActive])

  const handleReveal = () => {
    setRevealed((n) => Math.min(n + 1, steps.length))
  }

  useEffect(() => {
    if (!isActive) return
    const onKey = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setRevealed((n) => Math.min(n + 1, steps.length))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setRevealed((n) => Math.max(n - 1, 0))
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isActive])

  return (
    <Slide index={index} className={styles.journeyEarlySlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`} onClick={handleReveal}>
        <div className={styles.header}>
          <Editable as="p" id="journeyEarly.eyebrow" className={styles.eyebrow}>~10 YEARS AGO</Editable>
          <Editable as="h2" id="journeyEarly.title" className={styles.title}>The Power Platform Era</Editable>
          <Editable as="p" id="journeyEarly.subtitle" className={styles.subtitle}>The Power Platform era — connecting to SAP the low-code way</Editable>
        </div>

        <div className={styles.cards}>
          {ordered.map((item, i) => (
            <div
              key={item.id}
              className={`${styles.card} ${i < revealed ? styles.cardVisible : styles.cardHidden}`}
            >
              <span className={styles.stepNumber}>{item.step}</span>
              <Editable as="h3" id={`journeyEarly.steps.${item.id}.title`} className={styles.cardTitle}>{item.title}</Editable>
              <Editable as="p" id={`journeyEarly.steps.${item.id}.desc`} className={styles.cardDesc}>{item.desc}</Editable>
              {item.links && (
                <div className={styles.cardLinks}>
                  {item.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="slide-footer-keywords">
        <Editable as="span" id="journeyEarly.keywords">BAPI_FLIGHT_GETLIST | BAPI SALESORDER CREATEFROMDAT1 | /n/IWFND/MAINT_SERVICE | GWSAMPLE | GWCLIENT</Editable>
      </div>
      <BottomBar text={<Editable as="span" id="journeyEarly.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
