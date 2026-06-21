import { useEffect, useState } from 'react'
import { BottomBar, Editable, Slide, useSlides } from '@deckio/deck-engine'
import styles from './ContextSlide.module.css'

const stops = [
  { id: 'consulting', emoji: '💼', label: 'Technical Consulting', desc: 'NetWeaver, Enterprise Portal, Duet' },
  { id: 'rig', emoji: '🚀', label: 'SAP RIG', desc: 'Left consulting behind' },
  { id: 'pm-btp', emoji: '🔌', label: 'PM SCP/HCP/BTP', desc: 'Product manager SAP API Management, API Business Hub, …' },
  { id: 'microsoft', emoji: '☁️', label: 'Microsoft PM', desc: 'Product management' },
  { id: 'fade', emoji: '😴', label: 'Skills Fading…', desc: 'Years pass. ABAP gathers dust.' },
  { id: 'spark', emoji: '⚡', label: 'The Spark', desc: 'VSP + ABAP Remote FS in VS Code' },
  { id: 'back', emoji: '🎉', label: 'Back to ABAP!', desc: 'Vibe coding reignites everything' },
]

export default function ContextSlide({ index, project }) {
  const { current } = useSlides()
  const isActive = index === current
  const [revealed, setRevealed] = useState(0)

  useEffect(() => {
    if (!isActive) setRevealed(0)
  }, [isActive])

  const handleReveal = () => {
    if (revealed < stops.length) setRevealed((n) => n + 1)
  }

  useEffect(() => {
    if (!isActive) return
    const onKey = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setRevealed((n) => Math.min(n + 1, stops.length))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setRevealed((n) => Math.max(n - 1, 0))
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isActive])

  return (
    <Slide index={index} className={styles.contextSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`} onClick={handleReveal}>
        <div className={styles.header}>
          <Editable as="p" id="context.eyebrow" className={styles.eyebrow}>MY STORY</Editable>
          <Editable as="h2" id="context.title" className={styles.title}>The Route Back to ABAP</Editable>
        </div>

        <div className={styles.transitMap}>
          <div className={styles.trackLine} />
          {stops.map((stop, i) => (
            <div
              key={stop.id}
              className={`${styles.stop} ${i === stops.length - 1 ? styles.stopFinal : ''} ${i < revealed ? styles.stopVisible : styles.stopHidden}`}
            >
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

      <div className="slide-footer-keywords">
        <Editable as="span" id="context.keywords" allowEmpty fallback="" />
      </div>
      <BottomBar text={<Editable as="span" id="context.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
