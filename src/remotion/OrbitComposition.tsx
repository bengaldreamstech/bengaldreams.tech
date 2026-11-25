import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import { toBnDigits } from '../lib/bn'
import { ventures, type Venture } from '../lib/ventures'

export const WIDTH = 800
export const HEIGHT = 960
export const FPS = 30
/** Frames each venture stays in the spotlight. */
export const FRAMES_PER_VENTURE = 75
export const DURATION = FRAMES_PER_VENTURE * ventures.length

const FONT = `'Purno', 'Noto Sans Bengali', sans-serif`
const TAU = Math.PI * 2
const CX = 400
const CY = 390
const RX = 300
const RY = 205

export function OrbitComposition() {
  const frame = useCurrentFrame()
  const t = frame / DURATION
  const active = Math.floor(frame / FRAMES_PER_VENTURE) % ventures.length

  const nodes = ventures.map((venture, i) => {
    const angle = (i / ventures.length) * TAU + t * TAU - Math.PI / 2
    const depth = (Math.sin(angle) + 1) / 2
    return {
      venture,
      i,
      x: CX + Math.cos(angle) * RX,
      y: CY + Math.sin(angle) * RY,
      depth,
    }
  })

  return (
    <AbsoluteFill
      style={{
        fontFamily: FONT,
        background: 'radial-gradient(120% 90% at 50% 35%, #24594a 0%, #17392f 55%, #10291f 100%)',
        overflow: 'hidden',
      }}
    >
      <DotGrid />
      <OrbitRings t={t} cx={CX} cy={CY} rx={RX} ry={RY} />
      <Fireflies frame={frame} />
      {nodes
        .filter((n) => n.depth < 0.5)
        .map((n) => (
          <VentureChip
            key={n.venture.slug}
            venture={n.venture}
            x={n.x}
            y={n.y}
            depth={n.depth}
            isActive={n.i === active}
          />
        ))}
      <Sun frame={frame} cx={CX} cy={CY} />
      {nodes
        .filter((n) => n.depth >= 0.5)
        .map((n) => (
          <VentureChip
            key={n.venture.slug}
            venture={n.venture}
            x={n.x}
            y={n.y}
            depth={n.depth}
            isActive={n.i === active}
          />
        ))}
      {ventures.map((v, i) => (
        <Sequence
          key={v.slug}
          from={i * FRAMES_PER_VENTURE}
          durationInFrames={FRAMES_PER_VENTURE}
          layout="none"
        >
          <VentureCard index={i} />
        </Sequence>
      ))}
    </AbsoluteFill>
  )
}

function DotGrid() {
  return (
    <AbsoluteFill
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(246,241,231,0.09) 1px, transparent 0)',
        backgroundSize: '26px 26px',
        maskImage: 'radial-gradient(70% 60% at 50% 40%, black 30%, transparent 100%)',
      }}
    />
  )
}

function OrbitRings({
  t,
  cx,
  cy,
  rx,
  ry,
}: {
  t: number
  cx: number
  cy: number
  rx: number
  ry: number
}) {
  return (
    <svg width={WIDTH} height={HEIGHT} style={{ position: 'absolute', inset: 0 }}>
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill="none"
        stroke="rgba(214,166,90,0.35)"
        strokeWidth={1.5}
        strokeDasharray="4 10"
        strokeDashoffset={-t * 280}
      />
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx * 0.62}
        ry={ry * 0.62}
        fill="none"
        stroke="rgba(156,183,165,0.22)"
        strokeWidth={1}
        strokeDasharray="2 8"
        strokeDashoffset={t * 200}
      />
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx * 1.24}
        ry={ry * 1.24}
        fill="none"
        stroke="rgba(156,183,165,0.12)"
        strokeWidth={1}
      />
    </svg>
  )
}

function Fireflies({ frame }: { frame: number }) {
  const dots = Array.from({ length: 18 }, (_, i) => i)
  return (
    <>
      {dots.map((i) => {
        const phase = (frame / DURATION) * TAU * (1 + (i % 3))
        const left = ((i * 137) % 800) + Math.sin(phase + i) * 18
        const top = ((i * 211) % 720) + 60 + Math.cos(phase + i * 1.7) * 14
        const glow = (Math.sin(phase * 2 + i) + 1) / 2
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left,
              top,
              width: 4,
              height: 4,
              borderRadius: 4,
              background: '#e8c88a',
              opacity: 0.15 + glow * 0.45,
              boxShadow: '0 0 10px rgba(232,200,138,0.7)',
            }}
          />
        )
      })}
    </>
  )
}

function Sun({ frame, cx, cy }: { frame: number; cx: number; cy: number }) {
  const scale = 1 + Math.sin((frame / DURATION) * TAU * 4) * 0.025
  const drift = ((frame % 150) / 150) * 80
  return (
    <div
      style={{
        position: 'absolute',
        left: cx - 105,
        top: cy - 105,
        width: 210,
        height: 210,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 38%, #f6f1e7 0%, #ede5d5 70%)',
        boxShadow:
          '0 0 0 10px rgba(246,241,231,0.06), 0 0 0 26px rgba(246,241,231,0.035), 0 30px 60px -20px rgba(0,0,0,0.5)',
        overflow: 'hidden',
        transform: `scale(${scale})`,
      }}
    >
      <svg width={210} height={210} viewBox="0 0 210 210">
        <circle cx="105" cy="98" r="42" fill="#c06a4d" />
        <circle cx="105" cy="98" r="42" fill="url(#sunGlow)" />
        <defs>
          <radialGradient id="sunGlow" cx="0.4" cy="0.35" r="0.7">
            <stop offset="0" stopColor="#e9a37f" stopOpacity="0.9" />
            <stop offset="1" stopColor="#c06a4d" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            transform={`translate(${-drift * (i % 2 ? -1 : 1) - 80} 0)`}
            d={wavePath(118 + i * 18, 6 - i)}
            fill="none"
            stroke={i === 0 ? '#1f4d40' : i === 1 ? '#2f6b5a' : '#9cb7a5'}
            strokeWidth={i === 0 ? 7 : 6}
            strokeLinecap="round"
          />
        ))}
        <rect x="0" y="168" width="210" height="42" fill="#ede5d5" />
      </svg>
      <div
        style={{
          position: 'absolute',
          bottom: 22,
          width: '100%',
          textAlign: 'center',
          color: '#14342b',
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: 0.3,
        }}
      >
        BengalDreams
      </div>
    </div>
  )
}

function wavePath(y: number, amplitude: number): string {
  let d = `M 0 ${y}`
  for (let x = 0; x <= 400; x += 40) d += ` Q ${x + 20} ${y - amplitude} ${x + 40} ${y}`
  return d
}

function VentureChip({
  venture,
  x,
  y,
  depth,
  isActive,
}: {
  venture: Venture
  x: number
  y: number
  depth: number
  isActive: boolean
}) {
  const Icon = venture.icon
  const scale = 0.72 + depth * 0.34 + (isActive ? 0.1 : 0)
  const opacity = 0.45 + depth * 0.55
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 18px 10px 10px',
        borderRadius: 999,
        background: isActive ? '#f6f1e7' : 'rgba(246,241,231,0.1)',
        border: `1.5px solid ${isActive ? '#d6a65a' : 'rgba(246,241,231,0.18)'}`,
        boxShadow: isActive
          ? '0 18px 40px -12px rgba(214,166,90,0.55)'
          : '0 10px 30px -18px rgba(0,0,0,0.6)',
        whiteSpace: 'nowrap',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 999,
          background: isActive ? venture.tone : 'rgba(246,241,231,0.14)',
          display: 'grid',
          placeItems: 'center',
          color: '#f6f1e7',
        }}
      >
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <span style={{ fontSize: 19, fontWeight: 700, color: isActive ? '#14342b' : '#f6f1e7' }}>
        {venture.category}
      </span>
    </div>
  )
}

function VentureCard({ index }: { index: number }) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const venture = ventures[index]

  const enter = spring({ frame, fps, config: { damping: 200 } })
  const exit = interpolate(frame, [61, 75], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  })
  const progress = interpolate(frame, [0, 75], [0, 1], { extrapolateRight: 'clamp' })

  return (
    <div
      style={{
        position: 'absolute',
        left: 56,
        right: 56,
        bottom: 56,
        padding: '26px 30px',
        borderRadius: 28,
        background: 'rgba(246,241,231,0.96)',
        color: '#1d2a26',
        boxShadow: '0 30px 60px -30px rgba(0,0,0,0.6)',
        opacity: enter * (1 - exit),
        transform: `translateY(${(1 - enter) * 26 - exit * 12}px)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 17,
          color: '#52615b',
        }}
      >
        <span>{venture.brand}</span>
        <span style={{ color: '#c06a4d', fontWeight: 700 }}>
          {toBnDigits(index + 1)} / {toBnDigits(ventures.length)}
        </span>
      </div>
      <div
        style={{
          fontSize: 34,
          fontWeight: 700,
          color: '#14342b',
          marginTop: 6,
          lineHeight: 1.35,
        }}
      >
        {venture.name}
      </div>
      <div style={{ fontSize: 20, marginTop: 6, lineHeight: 1.6 }}>{venture.tagline}</div>
      <div
        style={{
          marginTop: 18,
          height: 4,
          borderRadius: 4,
          background: '#dde7de',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: venture.tone,
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  )
}
