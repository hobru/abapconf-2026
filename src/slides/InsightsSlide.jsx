import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './InsightsSlide.module.css'

const insights = [
  { id: 'iterative', title: 'Iterative Spec ↔ Code Loop', desc: 'Not a pure spec — iterate: write something → see results → identify issues → enhance spec → next version. Spec and code co-evolve.' },
  { id: 'domain', title: 'Domain Knowledge + AI', desc: 'Past ABAP experience was sufficient to guide Claude. You don\'t need to write the code — you need to understand and steer it.' },
  { id: 'solo-agile', title: 'One-person Agile', desc: 'AI enables solo agile sprints. No coordination overhead. Rapid iteration cycles that previously required a full team.' },
  { id: 'vibe-arch', title: 'Vibe-coding ≠ Bad Architecture', desc: 'Claude produced proper separation of concerns, interfaces, test classes, and error handling — structured output despite unstructured process.' },
]

export default function InsightsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.insightsSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="insights.eyebrow" className={styles.eyebrow}>LEARNINGS</Editable>
          <Editable as="h2" id="insights.title" className={styles.title}>Key Insights</Editable>
        </div>

        <EditableList
          id="insights.items"
          items={insights}
          keyOf={(i) => i.id}
          className={styles.cards}
          itemClassName={styles.card}
        >
          {(item) => (
            <>
              <Editable as="h3" id={`insights.items.${item.id}.title`} className={styles.cardTitle}>{item.title}</Editable>
              <Editable as="p" id={`insights.items.${item.id}.desc`} className={styles.cardDesc}>{item.desc}</Editable>
            </>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="insights.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
