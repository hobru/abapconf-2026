import CoverSlide from './src/slides/CoverSlide.jsx'
import DisclaimerSlide from './src/slides/DisclaimerSlide.jsx'
import ContextSlide from './src/slides/ContextSlide.jsx'
import JourneyEarlySlide from './src/slides/JourneyEarlySlide.jsx'
import PVASlide from './src/slides/PVASlide.jsx'
import VSPSlide from './src/slides/VSPSlide.jsx'
import JourneyLateSlide from './src/slides/JourneyLateSlide.jsx'
import JourneyFinalSlide from './src/slides/JourneyFinalSlide.jsx'
import ArchitectureSlide from './src/slides/ArchitectureSlide.jsx'
import RepoSlide from './src/slides/RepoSlide.jsx'
import InsightsSlide from './src/slides/InsightsSlide.jsx'
import WhatsNextSlide from './src/slides/WhatsNextSlide.jsx'
import { GenericThankYouSlide as ThankYouSlide } from '@deckio/deck-engine'

export default {
  id: 'cool-deck',
  title: 'V5: Back to ABAP: How Vibe Coding Brought a Lapsed Developer Back to Life',
  subtitle: 'How Vibe Coding Brought a Lapsed Developer Back to Life',
  description: 'How AI-assisted vibe coding with VSP and ABAP Remote Filesystem reignited a lapsed ABAP developer - from simple reports to full prototype solutions, plus a look at SAP development inside Microsoft IT.',
  icon: '♠',
  accent: '#6366f1',
  theme: 'dark',
  appearance: 'dark',
  order: 1,
  slides: [
    CoverSlide,
    DisclaimerSlide,
    ContextSlide,
    JourneyEarlySlide,
    PVASlide,
    VSPSlide,
    JourneyLateSlide,
    JourneyFinalSlide,
    ArchitectureSlide,
    RepoSlide,
    InsightsSlide,
    WhatsNextSlide,
    ThankYouSlide,
  ],
}
