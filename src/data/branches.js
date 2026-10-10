// All 3 Swordsman locations are in Bali. Legian (No.398) is the primary /
// flagship listing (used to derive STUDIO in constants.js). "Bali" (No.466)
// and Kuta are separate real branches — an earlier version of this file
// mistakenly treated No.466 as the wrong listing and dropped it; it is a
// real second branch, just not the primary one, and a Nar Nar Goon /
// Australia branch that appeared briefly was a mix-up — there is no
// Australian location.
export const BRANCHES = [
  {
    id: 'bali',
    short: 'Bali',
    name: 'Swordsman Tattoo Studio Bali',
    country: 'Bali, Indonesia',
    address: 'Jl. Raya Legian No.466, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361',
    phoneDisplay: '+62 878-5583-1808',
    whatsapp: 'https://wa.me/6287855831808',
    hours: 'Open daily · 10:00 – 22:00',
    rating: 4.9,
    reviewCount: 179,
    mapsLink: 'https://maps.app.goo.gl/XK3SZUnhQ8Hc5oKx5',
    mapsEmbed:
      'https://www.google.com/maps?q=Swordsman+Tattoo+Studio+Bali,+Jl.+Raya+Legian+No.466,+Legian,+Kuta,+Bali&output=embed',
    src: '/branches/bali.jpg',
    team: [
      {
        name: 'Ake',
        role: 'Tattoo Artist',
        bio: 'A resident tattoo artist working custom pieces for a steady stream of returning clients — from fine line to bold traditional.',
      },
      {
        name: 'Eka',
        role: 'Tattoo Artist',
        bio: 'Resident tattoo artist known for clean, detailed work that keeps clients coming back on every trip to Bali.',
      },
      {
        name: 'Cindy',
        role: 'Studio Team',
        bio: 'Part of the front-of-house team — keeping the space spotless and every visit welcoming from the moment you walk in.',
      },
      {
        name: 'Nancy',
        role: 'Studio Team',
        bio: 'Client care and studio support, making sure your booking, consultation, and session all run smoothly.',
      },
    ],
  },
  {
    id: 'legian',
    short: 'Legian',
    name: 'Swordsman Tattoo Studio Legian',
    country: 'Bali, Indonesia',
    address: 'Jl. Raya Legian No.398, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361',
    phoneDisplay: '+62 878-4297-5436',
    whatsapp: 'https://wa.me/6287842975436',
    hours: 'Open daily · 10:00 – 21:00',
    rating: 4.9,
    reviewCount: 258,
    mapsLink: 'https://www.google.com/maps/search/Swordsman+Tattoo+Studio+Legian+Jl+Raya+Legian+No.398',
    mapsEmbed:
      'https://www.google.com/maps?q=Swordsman+Tattoo+Studio+Legian,+Jl.+Raya+Legian+No.398,+Legian,+Kuta,+Bali&output=embed',
    src: '/branches/legian.jpg',
    team: [
      {
        name: 'Herman',
        role: 'Tattoo Artist',
        discipline: 'tattoo',
        bio: 'Known for detailed, largely hand-drawn sleeve work — clients regularly return to have him finish out bigger pieces.',
        src: '/team/herman.jpg',
      },
      {
        name: 'Mike',
        role: 'Tattoo Artist',
        discipline: 'tattoo',
        bio: 'Puts nervous first- and second-timers at ease while delivering clean, simple, right-on-point designs.',
        src: '/team/mike.jpg',
      },
      {
        name: 'Eka',
        role: 'Tattoo Artist',
        discipline: 'tattoo',
        bio: 'Specialist in true fine line work — thin, precise linework that keeps its detail as it heals.',
        src: '/team/eka.jpg',
      },
      {
        name: 'Novi',
        role: 'Tattoo Artist',
        discipline: 'tattoo',
        src: '/team/novi.jpg',
      },
      {
        name: 'Linda',
        role: 'Piercer',
        discipline: 'piercing',
      },
      {
        name: 'Wayan',
        role: 'Piercer',
        discipline: 'piercing',
      },
      {
        name: 'Nancy',
        role: 'Piercer',
        discipline: 'piercing',
      },
    ],
  },
  {
    id: 'kuta',
    short: 'Kuta',
    name: 'Swordsman Tattoo Studio Kuta',
    country: 'Bali, Indonesia',
    address: 'Jl. Bakung Sari No.39, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361',
    phoneDisplay: '+62 881-4821-160',
    whatsapp: 'https://wa.me/628814821160',
    hours: 'Open daily · 10:00 – 21:00',
    rating: 4.9,
    reviewCount: 73,
    mapsLink: 'https://www.google.com/maps/search/Swordsman+Tattoo+Studio+Kuta+Jl+Bakung+Sari+No.39',
    mapsEmbed:
      'https://www.google.com/maps?q=Swordsman+Tattoo+Studio+Kuta,+Jl.+Bakung+Sari+No.39,+Kuta,+Bali&output=embed',
    src: '/branches/kuta.jpg',
    team: [
      {
        name: 'Hermon',
        role: 'Tattoo Artist',
        bio: 'Resident artist at the Kuta studio, also home to The Piercing Place.',
      },
    ],
  },
]
