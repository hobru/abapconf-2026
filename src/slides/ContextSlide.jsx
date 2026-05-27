import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './ContextSlide.module.css'

const stops = [
  { id: 'consulting', emoji: '💼', label: 'Technical Consulting', desc: 'NetWeaver, Enterprise Portal, Duet' },
  { id: 'rig', emoji: '🚀', label: 'SAP RIG', desc: 'Left consulting behind' },
  { id: 'microsoft', emoji: '☁️', label: 'Microsoft PM', desc: 'Product management' },
  { id: 'fade', emoji: '😴', label: 'Skills Fading…', desc: 'Years pass. ABAP gathers dust.' },
  { id: 'spark', emoji: '⚡', label: 'The Spark', desc: 'VSP + ABAP Remote FS in VS Code' },
  { id: 'back', emoji: '🎉', label: 'Back to ABAP!', desc: 'Vibe coding reignites everything' },
]

export default function ContextSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.contextSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="context.eyebrow" className={styles.eyebrow}>MY STORY</Editable>
          <Editable as="h2" id="context.title" className={styles.title}>The Route Back to ABAP</Editable>
        </div>

        <div className={styles.transitMap}>
          <div className={styles.trackLine} />
          {stops.map((stop, i) => (
            <div key={stop.id} className={`${styles.stop} ${i === stops.length - 1 ? styles.stopFinal : ''}`}>
              <div className={styles.station}>
                <span className={styles.stationDot} />
                <span className={styles.stationEmoji}>{stop.emoji}</span>
              </div>
              <div className={styles.stopInfo}>
                <Editable as="span" id={`context.stop.${stop.id}.label`} className={styles.stopLabel}>{stop.label}</Editable>
                <Editable as="span" id={`context.stop.${stop.id}.desc`} className={styles.stopDesc}>{stop.desc}</Editable>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="context.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
