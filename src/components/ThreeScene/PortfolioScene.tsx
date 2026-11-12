import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { FaLaravel, FaReact } from 'react-icons/fa'
import { SiFlutter, SiMysql, SiSupabase } from 'react-icons/si'
import * as THREE from 'three'

const stack = [
  { label: 'React', Icon: FaReact, color: 'text-cyan-200' },
  { label: 'Laravel', Icon: FaLaravel, color: 'text-red-300' },
  { label: 'Flutter', Icon: SiFlutter, color: 'text-sky-300' },
  { label: 'MySQL', Icon: SiMysql, color: 'text-blue-200' },
  { label: 'Supabase', Icon: SiSupabase, color: 'text-emerald-300' },
]

const nodePositions = [
  [-1.25, 0.72, 0.12],
  [1.28, 0.55, -0.1],
  [0.96, -0.92, 0.18],
  [-1.12, -0.72, -0.12],
] as const

function Connection({ from, to, color }: { from: readonly number[]; to: readonly number[]; color: string }) {
  const start = useMemo(() => new THREE.Vector3(...from), [from])
  const end = useMemo(() => new THREE.Vector3(...to), [to])
  const middle = useMemo(() => start.clone().lerp(end, 0.5), [start, end])
  const length = useMemo(() => start.distanceTo(end), [start, end])
  const quaternion = useMemo(
    () => new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), end.clone().sub(start).normalize()),
    [start, end],
  )

  return (
    <mesh position={middle} quaternion={quaternion}>
      <cylinderGeometry args={[0.012, 0.012, length, 10]} />
      <meshBasicMaterial color={color} transparent opacity={0.32} />
    </mesh>
  )
}

function ParticleField() {
  const positions = useMemo(() => {
    const points = new Float32Array(190 * 3)
    for (let index = 0; index < points.length; index += 3) {
      const radius = 1.8 + Math.random() * 1.9
      const theta = Math.random() * Math.PI * 2
      const height = (Math.random() - 0.5) * 3.8
      points[index] = Math.cos(theta) * radius
      points[index + 1] = height
      points[index + 2] = Math.sin(theta) * radius * 0.5 - 0.65
    }
    return points
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#A5F3FC" size={0.025} sizeAttenuation transparent opacity={0.62} depthWrite={false} />
    </points>
  )
}

function DeveloperCommandCenter() {
  const group = useRef<THREE.Group>(null)
  const scanner = useRef<THREE.Mesh>(null)
  const satellites = useRef<THREE.Group>(null)
  const reducedMotion = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])

  useFrame(({ clock, pointer }) => {
    if (!group.current) return
    const time = clock.elapsedTime
    const targetX = reducedMotion ? 0 : pointer.y * 0.16
    const targetY = reducedMotion ? -0.22 : -0.22 + pointer.x * 0.24
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.04)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.04)

    if (!reducedMotion && satellites.current) satellites.current.rotation.z = time * 0.32
    if (!reducedMotion && scanner.current) {
      scanner.current.rotation.z = -time * 0.72
      scanner.current.position.y = Math.sin(time * 1.25) * 0.12
    }
  })

  return (
    <group ref={group} rotation={[0, -0.22, 0]} scale={1.08}>
      <ParticleField />
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.8]}>
        <ringGeometry args={[1.88, 1.9, 96]} />
        <meshBasicMaterial color="#2563EB" transparent opacity={0.35} />
      </mesh>
      <mesh ref={scanner} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.72]}>
        <ringGeometry args={[1.54, 1.56, 96, 1, 0, Math.PI * 0.76]} />
        <meshBasicMaterial color="#67E8F9" transparent opacity={0.85} />
      </mesh>

      <group ref={satellites}>
        <mesh rotation={[0.95, 0.18, 0.55]}>
          <torusGeometry args={[1.5, 0.018, 12, 128]} />
          <meshBasicMaterial color="#06B6D4" transparent opacity={0.72} />
        </mesh>
        <mesh rotation={[0.4, 1.02, -0.32]}>
          <torusGeometry args={[1.27, 0.014, 12, 128]} />
          <meshBasicMaterial color="#8B5CF6" transparent opacity={0.64} />
        </mesh>
        {nodePositions.map((position, index) => (
          <group key={position.join()} position={position}>
            <mesh>
              <sphereGeometry args={[0.092, 20, 20]} />
              <meshBasicMaterial color={index % 2 ? '#C4B5FD' : '#A5F3FC'} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.13, 0.145, 32]} />
              <meshBasicMaterial color={index % 2 ? '#8B5CF6' : '#06B6D4'} transparent opacity={0.8} />
            </mesh>
          </group>
        ))}
        {nodePositions.map((position, index) => <Connection key={position.join()} from={[0, 0, 0]} to={position} color={index % 2 ? '#A78BFA' : '#38BDF8'} />)}
      </group>

      <mesh rotation={[0.2, 0.52, 0.08]}>
        <icosahedronGeometry args={[0.56, 2]} />
        <meshPhysicalMaterial color="#0EA5E9" emissive="#06B6D4" emissiveIntensity={0.55} roughness={0.18} metalness={0.72} clearcoat={1} />
      </mesh>
      <mesh scale={1.25} rotation={[0.2, 0.52, 0.08]}>
        <icosahedronGeometry args={[0.56, 2]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.07} wireframe />
      </mesh>
      <pointLight position={[0, 0.4, 2.4]} intensity={18} color="#38BDF8" distance={5} />
      <pointLight position={[-1.8, -0.8, 1.2]} intensity={8} color="#8B5CF6" distance={4} />
    </group>
  )
}

export function PortfolioScene() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-3xl border border-cyan-200/15 bg-slate-950/70 p-4 shadow-[0_25px_90px_rgba(8,145,178,.2)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(6,182,212,.26),transparent_28rem),radial-gradient(circle_at_15%_85%,rgba(139,92,246,.22),transparent_24rem)]" />
      <div className="relative rounded-2xl border border-white/10 bg-[#081426]/90 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-cyan-200">Developer Command Center</p>
            <p className="mt-1 text-xs text-slate-400">Interactive systems • practical solutions</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-black text-cyan-100">
            <span className="size-2 animate-pulse rounded-full bg-cyan-200 shadow-[0_0_12px_#67E8F9]" /> Available
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#050816]/80 sm:min-h-[360px]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,.04),transparent_18%,transparent_82%,rgba(6,182,212,.08))]" />
            <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-cyan-100/80 backdrop-blur">Live build signal</div>
            <div className="pointer-events-none absolute bottom-4 right-4 z-20 text-right font-mono text-[10px] uppercase tracking-[.14em] text-slate-400">
              <p>OJT: 488 hours</p>
              <p className="mt-1 text-cyan-200">Capstone: Top 3 paper</p>
            </div>
            <Canvas camera={{ position: [0, 0, 4.6], fov: 39 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
              <ambientLight intensity={0.55} />
              <DeveloperCommandCenter />
            </Canvas>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {stack.map(({ label, Icon, color }) => (
              <span key={label} className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/[0.06] px-2 py-2 text-center text-xs font-black text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.08]">
                <Icon className={`text-2xl ${color}`} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
