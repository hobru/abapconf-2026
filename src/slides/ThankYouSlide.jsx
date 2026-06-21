import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './ThankYouSlide.module.css'
import portraitImage from '../data/HolgerBruchelt.png'

const contacts = [
  { id: 'email', icon: '✉️', label: 'Holger.Bruchelt@Microsoft.com', href: 'mailto:Holger.Bruchelt@Microsoft.com' },
  { id: 'bluesky', icon: '🦋', label: '@hobru', href: 'https://bsky.app/profile/hobru' },
  { id: 'linkedin', icon: '💼', label: 'linkedin.com/in/holger-bruchelt', href: 'https://www.linkedin.com/in/holger-bruchelt/' },
  { id: 'youtube', icon: '▶️', label: 'youtube.com/SAPonAzure', href: 'https://youtube.com/SAPonAzure' },
]

export default function ThankYouSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.thankYouSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.portraitCol}>
          <img src={portraitImage} alt="Holger Bruchelt" className={styles.portrait} />
        </div>

        <div className={styles.infoCol}>
          <Editable as="h2" id="thankYou.title" className={styles.title}>Thank You</Editable>
          <Editable as="p" id="thankYou.subtitle" className={styles.subtitle}>Let's stay in touch</Editable>
          <Editable as="h3" id="thankYou.name" className={styles.name}>Holger Bruchelt</Editable>

          <div className={styles.contacts}>
            {contacts.map((c) => (
              <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer" className={styles.contact}>
                <span className={styles.contactIcon}>{c.icon}</span>
                <Editable as="span" id={`thankYou.contact.${c.id}`} className={styles.contactText}>{c.label}</Editable>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="slide-footer-keywords">
        <Editable as="span" id="thankYou.keywords" allowEmpty fallback="" />
      </div>
      <BottomBar text={<Editable as="span" id="thankYou.footer">abapConf 2026</Editable>} />
    </Slide>
  )
}
