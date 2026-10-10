import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from '../components/Reveal'
import PlaceholderImage from '../components/PlaceholderImage'
import { useDocumentHead } from '../hooks/useDocumentHead'
import { BRANCHES } from '../data/branches'
import { STUDIO } from '../constants'

export default function Team() {
  const { branch: branchId } = useParams()
  const navigate = useNavigate()
  const active =
    BRANCHES.find((b) => b.id === branchId) || BRANCHES.find((b) => b.id === 'legian')

  useEffect(() => {
    // land on /team with no branch in the URL -> default to Legian without a redirect loop
    if (!branchId) return
    if (!BRANCHES.some((b) => b.id === branchId)) navigate('/team', { replace: true })
  }, [branchId, navigate])

  useDocumentHead({
    title: active.id === 'legian' ? 'Our Team' : `Our Team — ${active.short}`,
    description: `Meet the artists at Swordsman Tattoo Studio ${active.short} (${active.rating}★, ${active.reviewCount} reviews).`,
  })

  return (
    <section className="pt-36 pb-28 md:pb-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-blood-bright mb-4">Our Team</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-bone mb-5">
            The Artists
          </h1>
          <p className="text-bone-dim">
            Our artists are available at all 3 locations.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-wrap gap-3 mb-16">
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              onClick={() => navigate(b.id === 'legian' ? '/team' : `/team/${b.id}`)}
              className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${
                active.id === b.id
                  ? 'bg-blood border-blood text-bone'
                  : 'border-bone/20 text-bone-dim hover:border-bone/50 hover:text-bone'
              }`}
            >
              {b.short} <span className="opacity-60">· {b.rating}★</span>
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-bone-dim text-sm mb-10">{active.address}</p>

            <div className="grid sm:grid-cols-2 gap-10">
              {active.team.map((member, i) => (
                <Reveal key={member.name} delay={i * 0.1}>
                  <PlaceholderImage
                    label={member.name}
                    src={member.src}
                    className="relative aspect-[4/5] w-full mb-6"
                  />
                  <h2 className="font-display text-2xl text-bone mb-1">{member.name}</h2>
                  <p className="text-xs uppercase tracking-widest text-blood-bright mb-4">
                    {member.role}
                  </p>
                  <p className="text-bone-dim leading-relaxed">{member.bio}</p>
                </Reveal>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.2} className="mt-16 border-t border-bone/10 pt-8 text-center">
          <p className="text-bone-dim text-sm">
            More of the {active.short} team coming soon — get in touch on{' '}
            <a
              href={active.instagram || STUDIO.instagram}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blood-bright"
            >
              Instagram
            </a>{' '}
            to see who's available.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
