import React from 'react'
// import HeroVideos from '../videos/HeroVideos'
import foneInvestmntApp from '../../assests/foneInvestmntApp.jpg';

const Hero = () => {
  return (
    <div id='hero-module'>
        <div className="w-full md:w-auto px-0 md:px-12 lg:px-16 mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-4 lg:gap-x-8 xl:gap-x-12 gap-y-4 items-center max-w-[2024px]">
        <div className="relative space-y-4 md:order-last md:col-span-8">
            <div className="max-h-full overflow-hidden">
                <div className="relative flex flex-col">
                    <div className="relative lg:aspect-4/3 aspect-11/10">
                        <div className="absolute inset-0">
                        <picture type="image/webp" srcSet="/next/contenthash/next/optimized/beach-dock-640w.contenthash.977a5017ffeefa753f5eaede0c7dfde291c70fd8.webp 640w, /next/contenthash/next/optimized/beach-dock-750w.contenthash.88b155dba05877babc055c56a7a84fb9bc04b741.webp 750w, /next/contenthash/next/optimized/beach-dock-828w.contenthash.5853184b724a724da41e2588234447add8b12213.webp 828w, /next/contenthash/next/optimized/beach-dock.contenthash.6f1b80c6c07412bdaaa719a65635ffcce7a2e52b.webp 969w" >
                        <img className="w-full h-full object-cover" width="969" height="710" alt="" loading="eager" src="/next/contenthash/next/optimized/beach-dock.contenthash.1f2033b22a5f63de13ead4ddaabbccf4fc68cb52.png" />
                        </picture>
                    </div>
                </div>
            </div>

            </div></div>
            <div className="space-y-10 p-8 md:p-0 text-eggplant md:col-span-4">
                <div className="w-auto space-y-4 justify-self-center lg:justify-self-end px-0 order-last lg:order-first">
                    <div className="space-y-8 lg:space-y-10 2xl:space-y-12 3xl:space-y-16">
                        <div className="space-y-4">
                            <h1 className="copy-h1">Get your <br/>investing eggs
                                <span className="copy-h1-alt"> in way more baskets.</span>
                            </h1>
                        </div>
                    <div className="space-y-4">
                        <p className="copy-body">Stocks are great for making bets, but they’re only part of the investing story. Wealthfront makes it easy to build long-term wealth with fully diversified portfolios that help you manage risk, maximize returns, and minimize taxes.</p>
                    </div>
                    <div className="flex md:items-center flex-row lg:space-x-8">
                        <a className="z-10  button_button__rTWTc relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__1s8JK bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap" href="/start/account-type?intent=investing">
                            Get started
                        </a>
                    </div>
                </div>
            </div>
            </div>

            <div className='bg-gradient-to-l md:ml-56 w-60 '>
                {/* <HeroVideos /> */}
                {/* <img src="https://unsplash.com/photos/3E0vZsFPdCk"  width="1980px" height="1360px" className="justify-between mx-auto" alt="investment app"/> */}
                <img src={foneInvestmntApp} width="80%"  className="justify-between mx-auto" alt="investment app"/>
            </div>

            <div data-testid="accolades-bar" className="text-eggplant text-sm opacity-60 lg:hidden order-last pt-4 pb-12 grid grid-cols-2 col-span-full gap-y-6">
                <div data-testid="accolades-item-container" className="col-span-2 md:col-span-full  mx-auto flex flex-col space-y-3 flex-shrink-0 text-center items-center">
                    <img width="133" height="21" alt="Nerdwallet logo" loading="lazy" src="/next/contenthash/next/svg/optimized/nerdwallet.contenthash.91486057718363f6a3d741326df4b30d418430e2.svg" />
                        <div className="flex flex-col self-start">
                            <span>Best Robo-advisor, Portfolio Options, 2022 <sup>1</sup></span>
                            <span>Best Robo-advisor, IRA, 2022 <sup>1</sup></span>
                        </div>
                    </div>
                    <div data-testid="accolades-item-container" className="col-span-2 md:col-span-full text-center mx-auto flex flex-col space-y-3 flex-shrink-0  items-center">
                        <img width="133" height="21" className="mt-1" alt="Investopedia logo" loading="lazy" src="/next/contenthash/next/svg/optimized/investopedia.contenthash.cf25078cb7ce013008895c9476ff5a105e96c5c2.svg" />
                        <div className="flex flex-col self-start">
                            <span>Best Robo-advisor, 2020 <sup>1</sup></span>
                            <span>Best Robo-advisor, 2022 <sup>1</sup></span>
                        </div>
                    </div>
                    <div data-testid="accolades-item-container" className="flex flex-col space-y-3 flex-shrink-0 text-center items-center">
                        <div className="text-h2-mobile font-semibold">490 {" "}K+</div>
                        <span data-testid="accolades-subtitle" className="">Trusted clients</span>
                    </div>
                    <div data-testid="accolades-item-container" className="flex flex-col space-y-3 flex-shrink-0 text-center items-center">
                        <div className="text-h2-mobile font-semibold">${" "}30{" "}B+</div>
                        <span data-testid="accolades-subtitle" className="">In assets managed</span>
                    </div>
                    <div data-testid="accolades-item-container" className="flex flex-col space-y-3 flex-shrink-0 text-center items-center">
                        <div className="text-h2-mobile font-semibold">
                            <div className="inline-flex items-baseline space-x-2">
                                <span>4.8</span>
                                    <img className="flex-grow flex-shrink-0" width="22" height="22" alt="Star" loading="lazy" src="/next/contenthash/next/svg/optimized/star.contenthash.c793b6aaee49e2b440e722d54cf39fbc619a1114.svg" />
                            </div>
                        </div>
                        <span data-testid="accolades-subtitle" className="">Apple App{" "} <span className="whitespace-nowrap">Store <sup>2</sup></span>
                        </span>
                    </div>
                    <div data-testid="accolades-item-container" className="flex flex-col space-y-3 flex-shrink-0 text-center items-center">
                        <div className="text-h2-mobile font-semibold">
                            <div className="inline-flex items-baseline space-x-2"><span>4.6</span>
                            <img className="flex-grow flex-shrink-0" width="22" height="22" alt="Star" loading="lazy" src="/next/contenthash/next/svg/optimized/star.contenthash.c793b6aaee49e2b440e722d54cf39fbc619a1114.svg" />
                        </div>
                    </div>
                    <span data-testid="accolades-subtitle" className="">Google Play{"  "} <span className="whitespace-nowrap">Store <sup>2</sup></span>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero