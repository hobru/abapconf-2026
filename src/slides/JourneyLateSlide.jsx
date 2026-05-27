import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './JourneyLateSlide.module.css'

const steps = [
  { id: 'first-prototype', step: '01', title: 'First Prototype with VSP', desc: 'Started with VS Code, switched to Claude Code, then to GitHub Copilot CLI. Went from simple OData services to full SAP Fiori screens — just for the fun of it.' },
  { id: 'apim', step: '02', title: 'Azure APIM — Enterprise Ready', desc: 'Making it real: throttling, authentication, network connectivity from my laptop to the SAP system behind a firewall via VNet peering. Azure API Management tied it all together.' },
  { id: 'mcp-bridge', step: '03', title: 'MCP Bridge for OData', desc: 'Alice releases odata_mcp_go — now ALL OData services are available as MCP Servers. Game-changer for connectivity.', link: 'https://github.com/oisee/odata_mcp_go' },
  { id: 'mcp-abap-idea', step: '04', title: 'MCP Server on SAP — The Idea', desc: 'Why stop at OData? Build an MCP Server that runs directly on the SAP system — with access to tables, BAPIs, and more.' },
]

export default function JourneyLateSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.journeyLateSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="journeyLate.eyebrow" className={styles.eyebrow}>THE JOURNEY</Editable>
          <Editable as="h2" id="journeyLate.title" className={styles.title}>From Idea to Prototype</Editable>
        </div>

        <EditableList
          id="journeyLate.steps"
          items={steps}
          keyOf={(i) => i.id}
          className={styles.cards}
          itemClassName={styles.card}
        >
          {(item) => (
            <>
              <span className={styles.stepNumber}>{item.step}</span>
              <Editable as="h3" id={`journeyLate.steps.${item.id}.title`} className={styles.cardTitle}>{item.title}</Editable>
              <Editable as="p" id={`journeyLate.steps.${item.id}.desc`} className={styles.cardDesc}>{item.desc}</Editable>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  🔗 {item.link.replace('https://github.com/', '')}
                </a>
              )}
            </>
          )}
        </EditableList>

        <div className={styles.punchline}>
          <Editable as="p" id="journeyLate.punchline" className={styles.punchlineText}>
            I need help. Get me a <a href="https://github.com/bradygaster/squad" target="_blank" rel="noopener noreferrer" className={styles.punchlineLink}>Squad</a>…
          </Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="journeyLate.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
