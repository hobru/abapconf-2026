import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './WhatsNextSlide.module.css'

const items = [
  { id: 'arc1', title: 'ARC-1 MCP Server', desc: 'From Marian and team — very interesting. Open question: impact of new API Policy.' },
  { id: 'sap-official', title: 'SAP Official MCP Server', desc: 'Announced at Sapphire — works with VS Code and Eclipse. Not tested in detail yet, but promising.' },
  { id: 'ms-sap', title: 'Microsoft SAP Development', desc: 'Microsoft is a large SAP customer. Already modernized with Azure DevOps. AI-assisted development is the next evolution.' },
]

export default function WhatsNextSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.whatsNextSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="whatsNext.eyebrow" className={styles.eyebrow}>OUTLOOK</Editable>
          <Editable as="h2" id="whatsNext.title" className={styles.title}>What's Next</Editable>
        </div>

        <EditableList
          id="whatsNext.items"
          items={items}
          keyOf={(i) => i.id}
          className={styles.cards}
          itemClassName={styles.card}
        >
          {(item) => (
            <>
              <Editable as="h3" id={`whatsNext.items.${item.id}.title`} className={styles.cardTitle}>{item.title}</Editable>
              <Editable as="p" id={`whatsNext.items.${item.id}.desc`} className={styles.cardDesc}>{item.desc}</Editable>
            </>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="whatsNext.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
