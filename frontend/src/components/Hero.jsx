import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/mermaid-island-hero.png'

const Hero = () => (
  <section className="relative isolate -mx-4 min-h-107.5 overflow-hidden bg-[#f7efe2] sm:mx-[-5vw] sm:min-h-125 md:mx-[-7vw] lg:mx-[-9vw]">
    <img
      src={heroImage}
      alt="A softly lit collection of beauty essentials in warm honey tones"
      className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]"
    />
    <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#fffaf1] via-[#fff8ed]/95 to-[#fff8ed]/10" />

    <div className="mx-auto flex min-h-107.5 max-w-360 items-center px-6 py-16 sm:min-h-125 sm:px-[7vw] lg:px-[9vw]">
      <div className="max-w-xl">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b779a] sm:text-xs">
          Your little everyday escape
        </p>
        <h1 className="prata-regular max-w-lg font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-[#332a35] sm:text-5xl lg:text-6xl">
          Find your own kind of <span className="text-[#80628f]">island magic.</span>
        </h1>
        <p className="mt-5 max-w-md text-sm leading-6 text-[#655b61] sm:text-base sm:leading-7">
          Thoughtful little treasures to make your everyday feel a little more special.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/collection" className="inline-flex items-center rounded-full bg-[#72547f] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-md shadow-[#72547f]/20 transition hover:-translate-y-0.5 hover:bg-[#5c416a]">
            Explore the collection <span className="ml-3 text-sm" aria-hidden="true">→</span>
          </Link>
          <span className="rounded-full border border-[#c9a763]/60 bg-[#fffaf1]/70 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#826d4d]">
            A little joy, just for you
          </span>
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute bottom-5 right-6 hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white drop-shadow-md sm:flex lg:right-[9vw]">
      <span className="h-px w-8 bg-white/80" /> Curated with a little magic
    </div>
  </section>
)

export default Hero
