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

function SignalCore() {
  const group = useRef<THREE.Group>(null)

  const nodes = useMemo(
    () => [
      [-1.15, 0.45, 0],
      [1.05, 0.42, 0],
      [0.08, -0.82, 0],
      [-0.58, -0.18, 0.28],
      [0.62, -0.16, -0.22],
    ] as const,
    [],
  )

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.z = clock.elapsedTime * 0.16
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.45) * 0.12
  })

  return (
    <group ref={group} scale={1.05}>
      <mesh>
        <torusGeometry args={[1.12, 0.018, 16, 128]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.75} />
      </mesh>
      <mesh rotation={[0.9, 0.2, 0.5]}>
        <torusGeometry args={[1.38, 0.014, 16, 128]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.58} />
      </mesh>
      <mesh rotation={[0.5, 1.1, 0.2]}>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial color="#0EA5E9" emissive="#06B6D4" emissiveIntensity={0.42} roughness={0.35} metalness={0.45} />
      </mesh>
      {nodes.map((node, index) => (
        <mesh key={index} position={node}>
          <sphereGeometry args={[0.06, 20, 20]} />
          <meshBasicMaterial color="#A5F3FC" />
        </mesh>
      ))}
      {nodes.slice(1).map((node, index) => {
        const start = new THREE.Vector3(...nodes[index])
        const end = new THREE.Vector3(...node)
        const middle = start.clone().lerp(end, 0.5)
        const length = start.distanceTo(end)
        const direction = end.clone().sub(start).normalize()
        const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction)

        return (
          <mesh key={`line-${index}`} position={middle} quaternion={quaternion}>
            <cylinderGeometry args={[0.008, 0.008, length, 8]} />
            <meshBasicMaterial color="#38BDF8" transparent opacity={0.35} />
          </mesh>
        )
      })}
    </group>
  )
}

export function PortfolioScene() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-950/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(6,182,212,.22),transparent_28rem),radial-gradient(circle_at_15%_85%,rgba(139,92,246,.2),transparent_24rem)]" />

      <div className="relative rounded-2xl border border-white/10 bg-[#081426]/90 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-cyan-200">Portfolio Console</p>
          </div>
          <div className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100">
            Online
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
          <div className="grid gap-4">
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#050816]/80 sm:min-h-[360px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,.16),transparent_62%)]" />
              <Canvas camera={{ position: [0, 0, 4.2], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[2, 2, 3]} intensity={12} color="#38BDF8" />
                <SignalCore />
              </Canvas>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {stack.map(({ label, Icon, color }) => (
                <span key={label} className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/[0.06] px-2 py-2 text-center text-xs font-black text-slate-200">
                  <Icon className={`text-2xl ${color}`} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
