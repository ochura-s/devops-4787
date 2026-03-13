const whyForestsData = [
    {
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
                <circle cx='9' cy='7' r='4' />
                <path d='M23 21v-2a4 4 0 0 0-3-3.87' />
                <path d='M16 3.13a4 4 0 0 1 0 7.75' />
            </svg>
        ),
        title: 'Home to 80% of land biodiversity',
        body: 'Forests shelter an extraordinary web of life — from jaguars and orangutans to countless insects and fungi that science has yet to name.',
    },
    {
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
                <path d='M12 6v6l4 2' />
            </svg>
        ),
        title: 'Carbon sinks fighting climate change',
        body: 'Forests absorb roughly 2.6 billion tonnes of CO\u2082 each year — about 30% of human emissions — making them our greatest natural defense against warming.',
    },
    {
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z' />
            </svg>
        ),
        title: 'Regulators of the water cycle',
        body: 'Trees release water vapor through transpiration, seeding clouds and driving rainfall patterns that irrigate farmland hundreds of kilometres away.',
    },
    {
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path d='M18 8h1a4 4 0 0 1 0 8h-1' />
                <path d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' />
                <line x1='6' y1='1' x2='6' y2='4' />
                <line x1='10' y1='1' x2='10' y2='4' />
                <line x1='14' y1='1' x2='14' y2='4' />
            </svg>
        ),
        title: 'Medicine cabinet of the planet',
        body: 'Over 25% of modern medicines originate from tropical forest plants — yet less than 1% of tropical species have been tested for pharmaceutical potential.',
    },
    {
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <rect x='1' y='4' width='22' height='16' rx='2' ry='2' />
                <line x1='1' y1='10' x2='23' y2='10' />
            </svg>
        ),
        title: 'Livelihoods for 1.6 billion people',
        body: 'From timber and non-wood products to eco-tourism, forests directly support the income and food security of nearly a quarter of the global population.',
    },
    {
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
            </svg>
        ),
        title: 'Essential to mental well-being',
        body: 'Studies show that spending just two hours per week in forests lowers cortisol, blood pressure, and anxiety — a practice Japan calls "shinrin-yoku" (forest bathing).',
    },
];

const impactStats = [
    { value: '31%', label: 'of Earth\u2019s land is covered by forests' },
    { value: '10M', label: 'hectares of forest lost every year' },
    {
        value: '3T',
        label: 'trees on Earth \u2014 half of what existed 12,000 years ago',
    },
    { value: '60K+', label: 'tree species identified worldwide' },
];

const timelineEvents = [
    {
        year: '10,000 BC',
        title: 'Dawn of agriculture',
        body: 'As humans shifted from hunter-gatherers to farmers, the first large-scale clearing of forests began in the Fertile Crescent, setting a pattern that would repeat across every continent.',
    },
    {
        year: '1600s',
        title: 'Colonial-era logging',
        body: 'European colonization triggered massive deforestation in the Americas, Africa, and Southeast Asia to fuel shipbuilding, sugar plantations, and global trade.',
    },
    {
        year: '1970s',
        title: 'Amazon alarm bells',
        body: 'Satellite imagery revealed the shocking pace of Amazon deforestation, sparking the modern environmental movement and the first global calls for rainforest protection.',
    },
    {
        year: '2015',
        title: 'Paris Agreement',
        body: '196 nations committed to limit warming to 1.5 \u00b0C, placing forest conservation and restoration at the center of climate strategy for the first time.',
    },
    {
        year: '2030',
        title: 'The restoration decade',
        body: 'The UN Decade on Ecosystem Restoration aims to revive 350 million hectares of degraded land \u2014 an area larger than India \u2014 by the end of the decade.',
    },
];

export default function Home() {
    return (
        <div className='min-h-screen font-sans'>
            {/* Navigation */}
            <nav className='fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md'>
                <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
                    <a
                        href='/'
                        className='flex items-center gap-2 text-lg font-bold tracking-tight'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='22'
                            height='22'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='text-accent'
                        >
                            <path d='M17 14c.9-1 1.6-2.2 2-3.5A7 7 0 0 0 12 3a7 7 0 0 0-7 7.5c.4 1.3 1.1 2.5 2 3.5' />
                            <path d='M12 3v18' />
                            <path d='M8 21h8' />
                        </svg>
                        Oleksandr Chura&apos;s project
                    </a>
                    <div className='flex items-center gap-6'>
                        <a
                            href='#why'
                            className='hidden text-sm text-muted transition-colors hover:text-foreground sm:inline'
                        >
                            Why They Matter
                        </a>
                        <a
                            href='#impact'
                            className='hidden text-sm text-muted transition-colors hover:text-foreground sm:inline'
                        >
                            Impact
                        </a>
                        <a
                            href='#history'
                            className='hidden text-sm text-muted transition-colors hover:text-foreground sm:inline'
                        >
                            Timeline
                        </a>
                        <a
                            href='#action'
                            className='rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light'
                        >
                            Take Action
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center'>
                <div
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div className='absolute inset-0 bg-black/55' />
                <div className='relative mx-auto max-w-3xl'>
                    <p className='mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-xs tracking-wide text-white/80 backdrop-blur-sm'>
                        31% of Earth&apos;s land &middot; 3 trillion trees
                        &middot; 1 irreplaceable planet
                    </p>
                    <h1 className='mt-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl'>
                        The lungs of
                        <br />
                        <span className='text-emerald-400'>our planet.</span>
                    </h1>
                    <p className='mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80'>
                        Forests clean our air, stabilize our climate, shelter
                        most of life on Earth, and sustain billions of people.
                        Understanding them is the first step to protecting them.
                    </p>
                    <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
                        <a
                            href='#why'
                            className='rounded-full bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-light'
                        >
                            Explore Below
                        </a>
                        <a
                            href='#action'
                            className='rounded-full border border-white/25 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20'
                        >
                            How You Can Help
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Forests Matter */}
            <section id='why' className='bg-surface py-24'>
                <div className='mx-auto max-w-6xl px-6'>
                    <div className='mb-16 text-center'>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                            Why forests matter
                        </h2>
                        <p className='mx-auto mt-4 max-w-lg text-muted'>
                            Far more than a collection of trees, forests are
                            intricate living systems that make human
                            civilization possible.
                        </p>
                    </div>
                    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                        {whyForestsData.map((item) => (
                            <div
                                key={item.title}
                                className='rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-lg'
                            >
                                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent'>
                                    {item.icon}
                                </div>
                                <h3 className='mb-2 text-lg font-semibold'>
                                    {item.title}
                                </h3>
                                <p className='text-sm leading-relaxed text-muted'>
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact in Numbers */}
            <section id='impact' className='py-24'>
                <div className='mx-auto max-w-6xl px-6'>
                    <div className='mb-16 text-center'>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                            Forests by the numbers
                        </h2>
                        <p className='mx-auto mt-4 max-w-lg text-muted'>
                            The scale of forests is staggering — and so is the
                            scale of what we stand to lose.
                        </p>
                    </div>
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                        {impactStats.map((stat) => (
                            <div
                                key={stat.label}
                                className='rounded-2xl border border-border bg-surface p-8 text-center'
                            >
                                <p className='text-4xl font-bold text-accent sm:text-5xl'>
                                    {stat.value}
                                </p>
                                <p className='mt-3 text-sm leading-relaxed text-muted'>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Forests & Humanity Timeline */}
            <section id='history' className='bg-surface py-24'>
                <div className='mx-auto max-w-4xl px-6'>
                    <div className='mb-16 text-center'>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                            Forests &amp; humanity through time
                        </h2>
                        <p className='mx-auto mt-4 max-w-lg text-muted'>
                            Our relationship with forests has shaped
                            civilizations — for better and for worse.
                        </p>
                    </div>
                    <div className='relative border-l-2 border-border pl-8'>
                        {timelineEvents.map((event, i) => (
                            <div
                                key={event.year}
                                className={`relative pb-12 ${i === timelineEvents.length - 1 ? 'pb-0' : ''}`}
                            >
                                <div className='absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background' />
                                <p className='mb-1 font-mono text-sm font-semibold text-accent'>
                                    {event.year}
                                </p>
                                <h3 className='mb-2 text-lg font-semibold'>
                                    {event.title}
                                </h3>
                                <p className='max-w-xl text-sm leading-relaxed text-muted'>
                                    {event.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section id='action' className='py-24'>
                <div className='mx-auto max-w-3xl px-6 text-center'>
                    <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                        Every tree counts
                    </h2>
                    <p className='mx-auto mt-4 max-w-lg text-muted'>
                        Whether you plant a single sapling, support a
                        conservation organization, or simply choose sustainably
                        sourced products — your actions ripple outward.
                    </p>
                    <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
                        <a
                            href='https://onetreeplanted.org'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block rounded-full bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-light'
                        >
                            Plant a Tree
                        </a>
                        <a
                            href='https://www.worldwildlife.org/initiatives/forests'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block rounded-full border border-border px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface'
                        >
                            Support WWF Forests
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='border-t border-border py-10'>
                <div className='mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-sm text-muted sm:flex-row sm:justify-between'>
                    <p>
                        &copy; {new Date().getFullYear()} Forests. Protect what
                        gives us life.
                    </p>
                    <div className='flex gap-6'>
                        <a
                            href='https://www.fao.org/forests/en/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='transition-colors hover:text-foreground'
                        >
                            UN FAO Forests
                        </a>
                        <a
                            href='https://www.globalforestwatch.org'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='transition-colors hover:text-foreground'
                        >
                            Global Forest Watch
                        </a>
                        <a
                            href='https://rainforestfoundation.org'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='transition-colors hover:text-foreground'
                        >
                            Rainforest Foundation
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
