export default function Hero() {
  return (
    <div className="bg-(--color-container) transition-colors relative duration-300 mt-20 rounded-3xl">
        <h1 className="text-center text-5xl font-extrabold absolute left-1/2 -translate-x-1/2 top-6 w-full sm:text-6xl">Bounty Radar</h1>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 ">
        
        <div className="relative isolate overflow-hidden bg-(--color-container) px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-(--color-hover) sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 transition-colors duration-300">
          
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#brand-gradient)" fillOpacity="0.5" />
            <defs>
              <radialGradient id="brand-gradient">
                <stop stopColor="var(--color-container)" />
                <stop offset={1} stopColor="var(--color-important)" />
              </radialGradient>
            </defs>
          </svg>
          
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-(--color-text-color) sm:text-4xl transition-colors duration-300">
              Your radar for the latest exploits and security news.
            </h2>
            
            <p className="mt-6 text-lg/8 text-pretty text-(--color-text-color) opacity-80 transition-colors duration-300">
              Aggregate the latest zero-days, vulnerability disclosures, and tech updates in one unified dashboard. Never miss a critical security update again.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              
              <a
                href="/radar"
                className="rounded-md bg-(--color-important) px-3.5 py-2.5 text-sm font-semibold text-(--color-text-color) inset-ring inset-ring-white/5 hover:bg-(--color-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-important) transition-colors"
              >
                Get started
              </a>
              
            </div>
          </div>
          
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="./app-photo.jpg"
              width={1824}
              height={1080}
              className="absolute hover:scale-115 top-0 left-0 w-228 max-w-none rounded-md bg-(--color-important) ring-1 ring-(--color-hover) transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  )
}