import { useEffect, useState } from 'react'
import { Player } from '@remotion/player'
import { DURATION, FPS, HEIGHT, OrbitComposition, WIDTH } from './OrbitComposition'

/** Looping hero animation. Shows a still frame when the visitor prefers reduced motion. */
export default function OrbitPlayer() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <Player
      key={reduced ? 'still' : 'motion'}
      component={OrbitComposition}
      durationInFrames={DURATION}
      fps={FPS}
      compositionWidth={WIDTH}
      compositionHeight={HEIGHT}
      autoPlay={!reduced}
      loop
      initialFrame={reduced ? 20 : 0}
      controls={false}
      clickToPlay={false}
      doubleClickToFullscreen={false}
      spaceKeyToPlayOrPause={false}
      acknowledgeRemotionLicense
      style={{ width: '100%', height: '100%' }}
    />
  )
}
