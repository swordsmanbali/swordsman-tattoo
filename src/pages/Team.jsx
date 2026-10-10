import { AnimatePresence, motion } from 'motion/react'
import Reveal from '../components/Reveal'
import PlaceholderImage from '../components/PlaceholderImage'
import { useDocumentHead } from '../hooks/useDocumentHead'
import { BRANCHES } from '../data/branches'
import { STUDIO } from '../constants'

export default function Team() {
  const active = BRANCHES.find((b) => b.id === 'legian')

  useDocumentHead({
    title: 'Our Team',
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

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
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
