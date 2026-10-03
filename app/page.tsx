const PHONE_DISPLAY = "(647) 984-3031";
const PHONE_TEL = "tel:+16479843031";
const SMS = "sms:+16479843031";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mindscape%20Landscapes&query_place_id=ChIJ6aG_KBJCrWARheOZTfxbxtc";

type IconProps = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function MessageIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function StarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
    </svg>
  );
}
function ShieldIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function HandshakeIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a4 4 0 0 0 2.6.6H21" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}
function RepeatIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}
function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function MowerIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 14h13l2-6h3" />
      <path d="M5 14V9h8l1 5" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}
function LeafIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
      <path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12" />
    </svg>
  );
}
function SproutIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  );
}
function TreeIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 22v-7" />
      <path d="M8 15h8a4 4 0 0 0 1-7.9A5 5 0 0 0 7.1 7 4 4 0 0 0 8 15z" />
    </svg>
  );
}
function BricksIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9.3h18M3 14.7h18M9 4v5.3M15 9.3v5.4M9 14.7V20" />
    </svg>
  );
}
function BuildingIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2 4 8v14h16V8z" />
      <path d="M12 2v4M10 4h4M10 22v-5h4v5" />
    </svg>
  );
}
function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function Stars({ className = "h-5 w-5" }: IconProps) {
  return (
    <span className="flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  );
}

const services = [
  {
    icon: MowerIcon,
    title: "Weekly Lawn Cutting & Trimming",
    text: "Season-long cutting and trimming on a set schedule, so your yard looks cared for even when you are busy or away. Several of our customers have had Peter's crew on their lawn for years.",
  },
  {
    icon: LeafIcon,
    title: "Seasonal Lawn Care & Clean-Ups",
    text: "Spring and fall clean-ups, plus careful care for tricky lawns, including properties with wet, hard-to-service areas. We treat your lawn the way we would treat our own.",
  },
  {
    icon: SproutIcon,
    title: "Garden Reshaping & New Sod",
    text: "We reshape overgrown gardens so they are easier to look after, then lay, trim and shape new sod to the design you agree on. On time, on budget, with practical design ideas along the way.",
  },
  {
    icon: TreeIcon,
    title: "Full Backyard Installations",
    featured: true,
    text: "From one garden bed to a complete backyard. We have built large backyards and walkways with very big, heavy natural stone, and we sweat the details that make it last.",
  },
  {
    icon: BricksIcon,
    title: "Interlock, Driveway & Step Repair",
    text: "Stone driveway cleaning, re-levelling shifted pavers, repairing cracked steps and grouting. We fill joints with polymeric sand and apply two coats of sealer to lock the colour in.",
  },
  {
    icon: BuildingIcon,
    title: "Commercial & Church Grounds",
    text: "Season-long grounds care for churches and commercial properties. We walk the property with you, document every detail and give you an honest written quote before we start.",
  },
];

const reviews = [
  {
    name: "Futitan BV",
    job: "Backyard & stone walkway",
    text: "Peter built a very large backyard and walkway with very big, heavy stones. The workmanship and attention to detail are astonishing.",
    featured: true,
  },
  {
    name: "Eberhard K.",
    job: "Lawn maintenance, Brookville",
    text: "Our property has several wet areas and is not easy to look after. Peter is very knowledgeable and treated our lawn diligently, as if it were his own.",
  },
  {
    name: "Sophie T.",
    job: "Driveway & step restoration",
    text: "We were so happy the first summer that we called him back for several projects: cleaning the driveway, re-levelling shifted pavers, sanding and sealing. It looks like new.",
  },
  {
    name: "Raj M.",
    job: "Garden reshaping & sod",
    text: "His team reshaped our garden to make it more manageable and laid the sod exactly to our design. Finished on time and within budget, always polite, with creative suggestions.",
  },
  {
    name: "Hani Z.",
    job: "Church grounds maintenance",
    text: "Peter walked the church property, documented every detail and gave us a very honest quote. He was on time all season.",
  },
  {
    name: "Dawn W.",
    job: "Weekly lawn care",
    text: "My husband travels for work and cannot always cut the lawn. Peter's team keeps the property looking good while he is away.",
  },
  {
    name: "Michael M.",
    job: "Lawn cutting & trimming",
    text: "No hesitation recommending Peter. Polite and professional, and his crew did an excellent job on our property all last season.",
  },
  {
    name: "S H.",
    job: "Stone steps & driveway sealing",
    text: "He repaired the cracks in our stone steps, filled the driveway with polymeric sand and applied two coats of sealant to lock in the colour.",
  },
  {
    name: "Dan C.",
    job: "Two separate projects",
    text: "We have used Mindscape twice. Peter was prompt, professional and extremely hardworking, and our family was very pleased both times.",
  },
];

const steps = [
  {
    title: "Call or text Peter",
    text: "Tell us what is going on with your yard. You will talk to the owner, not a call centre.",
  },
  {
    title: "Walk-around visit",
    text: "We come out, walk the property with you and note every detail that affects the job.",
  },
  {
    title: "Honest, clear quote",
    text: "You get a straight price for the work we discussed, and we stick to it.",
  },
  {
    title: "We do the work",
    text: "Our crew shows up on time, keeps you posted and leaves the site clean.",
  },
  {
    title: "Final walk-through",
    text: "We check the result together. Many customers call us back for the next project.",
  },
];

const faqs = [
  {
    q: "Are you insured?",
    a: "Yes. Mindscape Landscapes is a registered and insured landscaping company. Ask Peter for details when you call.",
  },
  {
    q: "Which areas do you serve?",
    a: "We are based in Oakville and work across Oakville, Mississauga and Milton, including the Brookville area. If you are just outside those towns, call and ask.",
  },
  {
    q: "How does pricing work?",
    a: "We come out, look at the property with you and give you an honest quote before any work starts. Customers often mention that the final price matched what was agreed.",
  },
  {
    q: "Do you offer weekly lawn maintenance?",
    a: "Yes. Weekly cutting and trimming through the season is one of our core services, and many customers keep us on year after year.",
  },
  {
    q: "Can you fix our sunken pavers or cracked steps instead of replacing them?",
    a: "Often, yes. We re-level shifted pavers, repair cracked stone steps, re-grout, and finish driveways with polymeric sand and two coats of sealer.",
  },
  {
    q: "Do you handle commercial or church properties?",
    a: "Yes. We maintain church grounds season-long and quote commercial properties after a documented walk-around.",
  },
  {
    q: "What are your hours?",
    a: "We open at 9 a.m. Call or text (647) 984-3031 and Peter will get back to you to set up a time that works.",
  },
];

const areas = ["Oakville", "Mississauga", "Milton", "Brookville"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Mindscape Landscapes",
  telephone: "+1-647-984-3031",
  url: "https://mindscape-landscapes.growlocalvisibility.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oakville",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: areas.map((a) => ({ "@type": "City", name: a })),
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "30" },
  hasMap: MAPS_URL,
  slogan: "Our excellence is rooted in your satisfaction",
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title },
  })),
};

const btnCta =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 font-bold text-cta-ink shadow-[0_6px_20px_-8px_oklch(0.6_0.14_80/0.7)] transition duration-200 ease-out hover:bg-cta-hover active:scale-[0.98] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand";
const btnOutline =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand px-6 py-3 font-bold text-brand transition duration-200 ease-out hover:bg-brand hover:text-white active:scale-[0.98] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" /> Serving Oakville, Mississauga &amp; Milton
          </span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <ShieldIcon className="h-4 w-4" /> Registered &amp; insured
            </span>
            <span className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" /> Opens 9 a.m.
            </span>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Mindscape Landscapes home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white">
              <TreeIcon className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-black text-brand-deep">Mindscape</span>
              <span className="block text-xs font-semibold text-muted">Landscapes · Oakville</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-ink lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className="hidden font-bold text-brand-deep md:inline">
              {PHONE_DISPLAY}
            </a>
            <a href={PHONE_TEL} className={`${btnCta} hidden sm:inline-flex`}>
              <PhoneIcon /> Call Now
            </a>
            <a
              href={PHONE_TEL}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="grid h-12 w-12 place-items-center rounded-lg bg-cta text-cta-ink sm:hidden"
            >
              <PhoneIcon />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-bg">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="fade-up">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-sm font-bold text-brand-deep">
                <ShieldIcon className="h-4 w-4" /> Registered &amp; insured landscaper
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-black leading-[1.08] text-brand-deep">
                Landscaping &amp; Lawn Care in Oakville, Mississauga and Milton
              </h1>
              <p className="mt-5 max-w-[58ch] text-lg text-muted md:text-xl">
                Weekly lawn care, garden reshaping and sod, backyard stonework and interlock repair.
                Peter and his crew give you an honest quote, show up on time and treat your yard like
                their own.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_TEL} className={`${btnCta} text-lg`}>
                  <PhoneIcon /> Call {PHONE_DISPLAY}
                </a>
                <a href={SMS} className={btnOutline}>
                  <MessageIcon /> Text Peter
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.98rem] text-ink"
              >
                <Stars className="h-5 w-5" />
                <span className="font-bold">5.0</span>
                <span className="text-muted">·</span>
                <span className="underline decoration-line underline-offset-4 hover:decoration-brand">
                  30 Google reviews
                </span>
                <span className="text-muted">·</span>
                <span>Registered &amp; insured</span>
                <span className="text-muted">·</span>
                <span>Owner on every job</span>
              </a>
            </div>

            <figure className="fade-up fade-up-2 relative rounded-2xl border border-line bg-white p-7 shadow-[0_24px_60px_-30px_oklch(0.3_0.06_155/0.45)] md:p-8">
              <Stars className="h-6 w-6" />
              <blockquote className="mt-4 font-heading text-xl font-bold leading-snug text-brand-deep md:text-2xl">
                &ldquo;The workmanship and attention to detail are astonishing.&rdquo;
              </blockquote>
              <p className="mt-4 text-muted">
                Peter built a very large backyard and walkway with very big, heavy stones.
              </p>
              <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                <span className="font-bold text-ink">Futitan BV</span>
                <span className="text-muted"> · Backyard &amp; walkway · Google review</span>
              </figcaption>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-tint p-3">
                  <span className="block font-heading text-2xl font-black text-brand">30</span>
                  five-star reviews
                </div>
                <div className="rounded-lg bg-tint p-3">
                  <span className="block font-heading text-2xl font-black text-brand">3</span>
                  towns served
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: StarIcon, big: "5.0 ★", small: "30 Google reviews" },
              { icon: ShieldIcon, big: "Insured", small: "Registered business" },
              { icon: HandshakeIcon, big: "Honest quotes", small: "Price agreed up front" },
              { icon: RepeatIcon, big: "Repeat clients", small: "Customers call us back" },
            ].map(({ icon: Icon, big, small }) => (
              <div key={big} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/12 text-cta">
                  <Icon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-lg font-bold leading-tight">{big}</span>
                  <span className="text-sm text-white/80">{small}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[46rem]">
              <p className="font-bold text-brand">What we do</p>
              <h2 className="mt-2 text-3xl font-black text-brand-deep md:text-[2.6rem] md:leading-tight">
                From weekly mowing to full backyard builds
              </h2>
              <p className="mt-4 text-lg text-muted">
                Mindscape handles everything from spring clean-ups to complete backyard installations.
                Whatever the size of the job, you get the same detail-driven crew and the same honest
                pricing.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text, featured }) => (
                <article
                  key={title}
                  className={`group relative flex flex-col rounded-2xl border bg-white p-7 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_oklch(0.3_0.06_155/0.5)] ${
                    featured ? "border-2 border-brand" : "border-line"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-cta px-3 py-0.5 text-sm font-bold text-cta-ink">
                      Our specialty
                    </span>
                  )}
                  <span className="grid h-13 w-13 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-brand-deep">{title}</h3>
                  <p className="mt-3 flex-1 text-muted">{text}</p>
                  <a
                    href={PHONE_TEL}
                    className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:gap-2.5 transition-all"
                  >
                    Call about this <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-bold text-brand">Customer reviews</p>
                <h2 className="mt-2 text-3xl font-black text-brand-deep md:text-[2.6rem] md:leading-tight">
                  Rated 5.0 from 30 Google reviews
                </h2>
                <p className="mt-3 max-w-[56ch] text-lg text-muted">
                  Almost every review mentions Peter by name. Here is what Oakville-area homeowners and
                  property managers say.
                </p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnOutline} shrink-0 bg-white`}
              >
                Read all reviews on Google <ArrowIcon />
              </a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure
                  key={r.name}
                  className={`flex flex-col rounded-2xl border border-line bg-white p-6 ${
                    r.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <Stars className="h-4.5 w-4.5" />
                  <blockquote className="mt-3 flex-1 text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                      {r.name.charAt(0)}
                    </span>
                    <span className="text-sm leading-tight">
                      <span className="block font-bold text-ink">{r.name}</span>
                      <span className="text-muted">{r.job}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <p className="font-bold text-brand">About Mindscape</p>
              <h2 className="mt-2 text-3xl font-black text-brand-deep md:text-[2.6rem] md:leading-tight">
                A young Oakville company built on one word: trust
              </h2>
              <div className="mt-6 space-y-4 text-lg text-ink/90">
                <p>
                  Mindscape Landscapes is a registered and insured landscaping company based in
                  Oakville. Peter, our principal, calls us &ldquo;a fresh young and honest company on
                  the block,&rdquo; and trust is the principle we put above everything else.
                </p>
                <p>
                  We do detail-driven work across the whole range: spring and fall clean-ups, weekly
                  lawn care, garden reshaping and sod, interlock and driveway restoration, and full
                  backyard installations with natural stone. Peter is on site, works with a reliable
                  crew and brings practical design ideas to every job.
                </p>
                <p>
                  Our customers say it best. They describe Peter as honest, organized, polite and on
                  time, and many of them have hired us again for their next project. As we like to put
                  it: our excellence is rooted in your satisfaction.
                </p>
              </div>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                {
                  icon: HandshakeIcon,
                  t: "Honest quotes",
                  d: "We walk the property, document the details and give you a price we stick to.",
                },
                {
                  icon: ClockIcon,
                  t: "On time, every time",
                  d: "Customers mention our punctuality again and again, from one-off jobs to full seasons.",
                },
                {
                  icon: SproutIcon,
                  t: "Creative ideas",
                  d: "Peter suggests designs that make gardens easier to keep and nicer to look at.",
                },
                {
                  icon: RepeatIcon,
                  t: "Customers come back",
                  d: "Many clients call us back for more projects the following season.",
                },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-line bg-bg p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
                    <Icon />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand-deep">{t}</h3>
                  <p className="mt-2 text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <p className="font-bold text-brand">How it works</p>
            <h2 className="mt-2 text-3xl font-black text-brand-deep md:text-[2.6rem] md:leading-tight">
              Five simple steps from first call to finished yard
            </h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-heading text-lg font-black text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-bold text-brand">Service area</p>
              <h2 className="mt-2 text-3xl font-black text-brand-deep md:text-[2.6rem] md:leading-tight">
                Based in Oakville, working across Halton and Peel
              </h2>
              <p className="mt-4 text-lg text-muted">
                We look after homes, churches and commercial properties in these communities. Not sure
                if you are in our area? Give Peter a call.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {areas.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2 font-semibold text-brand-deep"
                  >
                    <MapPinIcon className="h-4 w-4 text-brand" /> {a}
                  </li>
                ))}
              </ul>
              <a href={PHONE_TEL} className={`${btnCta} mt-8`}>
                <PhoneIcon /> Check your address: {PHONE_DISPLAY}
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Map of the Mindscape Landscapes service area around Oakville, Ontario"
                src="https://maps.google.com/maps?q=Oakville%2C%20ON&z=10&output=embed"
                className="h-[380px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <p className="font-bold text-brand">FAQ</p>
            <h2 className="mt-2 text-3xl font-black text-brand-deep md:text-[2.6rem] md:leading-tight">
              Questions homeowners ask before they call
            </h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-line bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-bold text-brand-deep">
                    {f.q}
                    <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand transition-transform duration-200">
                      <svg {...base} className="h-4 w-4">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6 md:py-20">
            <div>
              <h2 className="text-3xl font-black md:text-5xl md:leading-tight">
                Ready for a yard you are proud of?
              </h2>
              <p className="mt-3 text-lg text-white/85">
                Call or text Peter at {PHONE_DISPLAY} for an honest quote. We open at 9 a.m.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_TEL} className={`${btnCta} text-lg`}>
                <PhoneIcon /> Call {PHONE_DISPLAY}
              </a>
              <a
                href={SMS}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-brand-deep active:scale-[0.98]"
              >
                <MessageIcon /> Send a text
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-white pb-24 md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-heading text-xl font-black text-brand-deep">Mindscape Landscapes</p>
            <p className="mt-3 max-w-[44ch] text-muted">
              Registered and insured landscaping company in Oakville, Ontario. Lawn care, garden
              design, sod, hardscape repair and full backyard installations.
            </p>
            <p className="mt-4 font-semibold text-ink">
              <a href={PHONE_TEL} className="hover:text-brand">{PHONE_DISPLAY}</a>
            </p>
            <p className="text-muted">Oakville, ON · Opens 9 a.m.</p>
          </div>
          <div>
            <p className="font-bold text-ink">Services</p>
            <ul className="mt-3 space-y-1.5 text-muted">
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-ink">Service area</p>
            <ul className="mt-3 space-y-1.5 text-muted">
              {areas.map((a) => (
                <li key={a}>{a}, ON</li>
              ))}
            </ul>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand"
            >
              Find us on Google <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="border-t border-line py-5 text-center text-sm text-muted">
          © {new Date().getFullYear()} Mindscape Landscapes. All rights reserved.
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
        <a href={PHONE_TEL} className={`${btnCta} w-full`}>
          <PhoneIcon /> Call
        </a>
        <a href={SMS} className={`${btnOutline} w-full`}>
          <MessageIcon /> Text
        </a>
      </div>
    </>
  );
}
