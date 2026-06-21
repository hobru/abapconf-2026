import CoverSlide from './src/slides/CoverSlide.jsx'
import DisclaimerSlide from './src/slides/DisclaimerSlide.jsx'
import AboutMyselfSlide from './src/slides/AboutMyselfSlide.jsx'
import ContextSlide from './src/slides/ContextSlide.jsx'
import JourneyEarlySlide from './src/slides/JourneyEarlySlide.jsx'
import PVASlide from './src/slides/PVASlide.jsx'
import VSPSlide from './src/slides/VSPSlide.jsx'
import JourneyLateSlide from './src/slides/JourneyLateSlide.jsx'
import JourneyFinalSlide from './src/slides/JourneyFinalSlide.jsx'
import DeploymentStrategySlide from './src/slides/DeploymentStrategySlide.jsx'
import InsightsSlide from './src/slides/InsightsSlide.jsx'
import AdoDevOpsSlide from './src/slides/AdoDevOpsSlide.jsx'
import AiSdlcSlide from './src/slides/AiSdlcSlide.jsx'
import AbapAdtSlide from './src/slides/AbapAdtSlide.jsx'
import TempHubSlide from './src/slides/TempHubSlide.jsx'
import ThankYouSlide from './src/slides/ThankYouSlide.jsx'

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
    AboutMyselfSlide,
    ContextSlide,
    JourneyEarlySlide,
    PVASlide,
    VSPSlide,
    JourneyLateSlide,
    DeploymentStrategySlide,
    JourneyFinalSlide,
    InsightsSlide,
    AdoDevOpsSlide,
    AiSdlcSlide,
    AbapAdtSlide,
    TempHubSlide,
    ThankYouSlide,
  ],
}
