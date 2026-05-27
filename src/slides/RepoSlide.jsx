import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './RepoSlide.module.css'

const features = [
  { id: 'interfaces', title: 'Proper Interfaces', desc: 'zif_mcp_* — clean separation of concerns' },
  { id: 'wizard', title: 'Tool Wizard', desc: 'zmcp_tool_wizard — guided BAPI registration' },
  { id: 'cockpit', title: 'Tool Cockpit', desc: 'zmcp_tool_cockpit — admin/management UI' },
  { id: 'wrappers', title: 'Three Wrapper Types', desc: 'FM/BAPI, OData, Table' },
  { id: 'security', title: 'Security Layer', desc: 'Auth checker, auth provider, authorization object, CORS' },
  { id: 'tests', title: 'Test Classes', desc: 'Tests for 6 key components + custom exception class' },
]

export default function RepoSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.repoSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="repo.eyebrow" className={styles.eyebrow}>THE CODE</Editable>
          <Editable as="h2" id="repo.title" className={styles.title}>What the Repo Shows</Editable>
          <Editable as="p" id="repo.subtitle" className={styles.subtitle}>~90 files with surprisingly mature architecture for a vibe-coded project</Editable>
        </div>

        <EditableList
          id="repo.features"
          items={features}
          keyOf={(i) => i.id}
          className={styles.cards}
          itemClassName={styles.card}
        >
          {(item) => (
            <>
              <Editable as="h3" id={`repo.features.${item.id}.title`} className={styles.cardTitle}>{item.title}</Editable>
              <Editable as="p" id={`repo.features.${item.id}.desc`} className={styles.cardDesc}>{item.desc}</Editable>
            </>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="repo.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
