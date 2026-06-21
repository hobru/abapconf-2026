import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './DeploymentStrategySlide.module.css'

const developEnvs = [
  { id: 'pm4', glyph: '✨', name: 'PM4', detail: 'Vibe coding' },
]

const abapgitEnvs = [
  { id: 'pm4', glyph: '✨', name: 'PM4', detail: 'Vibe coding' },
  { id: 'abap-trial', glyph: '🐳', name: 'ABAP Trial', detail: 'Docker · vibe coding' },
]

const testEnvs = [
  { id: 'docker-1', glyph: '🐳', name: 'Docker #1', detail: 'Auto test deploy' },
  { id: 'docker-2', glyph: '🐳', name: 'Docker #2', detail: 'Auto test deploy' },
  { id: 'vm-1', glyph: '🖥️', name: 'VM #1', detail: 'Auto test deploy' },
  { id: 'vm-2', glyph: '🖥️', name: 'VM #2', detail: 'Auto test deploy' },
  { id: 'vm-3', glyph: '🖥️', name: 'VM #3', detail: 'Auto test deploy' },
]

export default function DeploymentStrategySlide({ index, project }) {
  return (
    <Slide index={index} className={styles.deploymentStrategySlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="deploy.eyebrow" className={styles.eyebrow}>DEPLOYMENT &amp; DEVELOPMENT STRATEGY</Editable>
          <Editable as="h2" id="deploy.title" className={styles.title}>Do you really want to vibe code in your development system?</Editable>
          <Editable as="p" id="deploy.paper.summary" className={styles.headerSummary} multiline>
            Lars Hvam (Heliconia Labs) lays out patterns for safe LLM-assisted ABAP work: develop outside your live system, replicate locally, and validate on isolated, disposable environments.
          </Editable>
          <Editable as="p" id="deploy.subtitle" className={styles.subtitle}>From Vibe Coding to Automated Test Deployment</Editable>
        </div>

        <div className={styles.flow}>
          <div className={styles.phase}>
            <div className={styles.phaseHead}>
              <Editable as="span" id="deploy.develop.tag" className={styles.phaseTag}>DEVELOP</Editable>
              <Editable as="h3" id="deploy.develop.title" className={styles.phaseTitle}>Vibe Coding</Editable>
            </div>
            <EditableList
              id="deploy.develop.envs"
              items={developEnvs}
              keyOf={(e) => e.id}
              className={styles.envStack}
              itemClassName={styles.env}
            >
              {(env) => (
                <>
                  <span className={styles.envGlyph} aria-hidden="true">{env.glyph}</span>
                  <span className={styles.envText}>
                    <Editable as="span" id={`deploy.develop.envs.${env.id}.name`} className={styles.envName}>{env.name}</Editable>
                    <Editable as="span" id={`deploy.develop.envs.${env.id}.detail`} className={styles.envDetail}>{env.detail}</Editable>
                  </span>
                </>
              )}
            </EditableList>
          </div>

          <span className={styles.flowArrow} aria-hidden="true">→</span>

          <div className={styles.phase}>
            <div className={styles.phaseHead}>
              <Editable as="span" id="deploy.abapgit.tag" className={styles.phaseTag}>MANUAL ABAPGIT TESTING</Editable>
              <Editable as="h3" id="deploy.abapgit.title" className={styles.phaseTitle}>Vibe Coding</Editable>
            </div>
            <EditableList
              id="deploy.abapgit.envs"
              items={abapgitEnvs}
              keyOf={(e) => e.id}
              className={styles.envStack}
              itemClassName={styles.env}
            >
              {(env) => (
                <>
                  <span className={styles.envGlyph} aria-hidden="true">{env.glyph}</span>
                  <span className={styles.envText}>
                    <Editable as="span" id={`deploy.abapgit.envs.${env.id}.name`} className={styles.envName}>{env.name}</Editable>
                    <Editable as="span" id={`deploy.abapgit.envs.${env.id}.detail`} className={styles.envDetail}>{env.detail}</Editable>
                  </span>
                </>
              )}
            </EditableList>
          </div>

          <span className={styles.flowArrow} aria-hidden="true">→</span>

          <div className={`${styles.phase} ${styles.phaseWide}`}>
            <div className={styles.phaseHead}>
              <Editable as="span" id="deploy.test.tag" className={styles.phaseTag}>AUTOMATED TEST DEPLOYMENT</Editable>
              <Editable as="h3" id="deploy.test.title" className={styles.phaseTitle}>2 Docker Containers · 3 VMs</Editable>
            </div>
            <EditableList
              id="deploy.test.envs"
              items={testEnvs}
              keyOf={(e) => e.id}
              className={styles.envGrid}
              itemClassName={styles.env}
            >
              {(env) => (
                <>
                  <span className={styles.envGlyph} aria-hidden="true">{env.glyph}</span>
                  <span className={styles.envText}>
                    <Editable as="span" id={`deploy.test.envs.${env.id}.name`} className={styles.envName}>{env.name}</Editable>
                    <Editable as="span" id={`deploy.test.envs.${env.id}.detail`} className={styles.envDetail}>{env.detail}</Editable>
                  </span>
                </>
              )}
            </EditableList>
          </div>
        </div>

        <div className={styles.resetStrip}>
          <span className={styles.resetGlyph} aria-hidden="true">⟳</span>
          <Editable as="p" id="deploy.reset" className={styles.resetText} multiline>
            Always reset — every environment is torn down and rebuilt from a clean baseline before each run.
          </Editable>
        </div>

        <div className={styles.paperRef}>
          <span className={styles.paperGlyph} aria-hidden="true">📄</span>
          <div className={styles.paperText}>
            <a
              href="https://docs.heliconialabs.com/patterns-for-using-llms-in-abap-development.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.paperLink}
            >
              🔗 Patterns for Using LLMs in ABAP Development
            </a>
          </div>
        </div>
      </div>

      <div className="slide-footer-keywords">
        <Editable as="span" id="deploy.keywords" allowEmpty fallback="" />
      </div>
      <BottomBar text={<Editable as="span" id="deploy.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
