import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './JourneyFinalSlide.module.css'

const steps = [
  { id: 'mcp-tools', step: '01', title: 'More and More MCP Servers to Help', desc: 'SAP Docs Search, ABAP Linting, ADT Integration, OData MCP Proxy, CAP MCP Server, SAP Fiori MCP Server — the ecosystem kept growing.', link: 'https://github.com/marianfoo/sap-ai-mcp-servers' },
  { id: 'models', step: '02', title: 'Better and Better Models', desc: 'GPT-3.5 → GPT-4 → Claude Sonnet → Claude Opus 4.5 → 4.6 → 4.7 → GPT-5.5. Each generation: fewer hallucinations, better ABAP understanding, longer context.' },
  { id: 'abapgit', step: '03', title: 'Patterns for Using LLMs in ABAP Development', desc: 'Lars suggested developing outside the SAP system. abapGit replicated everything locally — develop and understand code locally, publish to SAP in intervals.', link: 'https://docs.heliconialabs.com/patterns-for-using-llms-in-abap-development.pdf' },
  { id: 'marian-mcp', step: '04', title: 'Marian\'s MCP Server → ARC-1', desc: 'Added Marian\'s MCP servers — SAP Docs search, ABAP-focused knowledge, ADT connectivity. Results improved even further.', link: 'https://blog.zeis.de/posts/2026-04-29-arc-1-btp/' },
  { id: 'sharing', step: '05', title: 'Sharing & Feedback Loop', desc: 'Shared with colleagues — always highlighting: vibe-coded, not enterprise-ready. Got feedback, bugs, feature requests. Addressed them using Squad + Claude.' },
]

export default function JourneyFinalSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.journeyFinalSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="journeyFinal.eyebrow" className={styles.eyebrow}>THE JOURNEY</Editable>
          <Editable as="h2" id="journeyFinal.title" className={styles.title}>Refinement & Collaboration</Editable>
        </div>

        <EditableList
          id="journeyFinal.steps"
          items={steps}
          keyOf={(i) => i.id}
          className={styles.cards}
          itemClassName={styles.card}
        >
          {(item) => (
            <>
              <span className={styles.stepNumber}>{item.step}</span>
              <Editable as="h3" id={`journeyFinal.steps.${item.id}.title`} className={styles.cardTitle}>{item.title}</Editable>
              <Editable as="p" id={`journeyFinal.steps.${item.id}.desc`} className={styles.cardDesc}>{item.desc}</Editable>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  🔗 {item.link.replace('https://github.com/', '')}
                </a>
              )}
            </>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="journeyFinal.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
