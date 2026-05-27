import { useEffect } from 'react'
import { InlineEditProvider, Navigation, SlideErrorBoundary, SlideProvider } from '@deckio/deck-engine'
import '@deckio/deck-engine/styles/editable.css'
import project from '../deck.config.js'
import inlineEdits from './data/inline-edits.json'

// Inline-edit overrides are dev-only. Production builds render the original
// source text and ignore the override map, matching Decision 63's posture.
const overrides = import.meta.env.DEV ? inlineEdits : {}

export default function App() {
  const { accent, id, slides, theme, title } = project

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
    document.title = title
  }, [accent, title])

  return (
    <InlineEditProvider overrides={overrides} project={id}>
      <SlideProvider totalSlides={slides.length} project={id} slides={slides} theme={theme}>
        <Navigation />
        <div className="deck" data-project-id={id}>
          {slides.map((SlideComponent, index) => (
            <SlideErrorBoundary key={`${id}-slide-${index}`} index={index}>
              <SlideComponent index={index} project={project} />
            </SlideErrorBoundary>
          ))}
        </div>
      </SlideProvider>
    </InlineEditProvider>
  )
}
