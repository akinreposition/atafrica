import React from 'react'
import ATAfricaLogo from '../../assests/ATAfricaLogo.png'

const Navigation = () => {
  return (
    <header>
        <div className='hidden lg:block'>
            <div className='mx-auto px-0 md:px-12 lg:px-16 max-w-[2024px]'>
                <div className='grid grid-cols-2 item-center justify-between h-24'>
                   <a href='/' className='z-10 flex relative font-medium text-eggplant'>
                    <img src={ATAfricaLogo} width="100px" height="26px" alt="ATAfrica_logo" loading="eager"/>
                   </a>
                    <nav className="flex items-center space-x-6" aria-label='Main'>
                        <a href='/#' role="button" className="flex font-medium relative text-eggplant">
                            Invest
                            <svg fill="none" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" data-testid="chevron-down" className="mt-3 ml-1 h-1.5"><path d="M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z" fill="currentColor" fillRule="evenodd"></path></svg>
                            <div className="absolute left-0 right-0 h-0.5 -bottom-0.5 transition-all w-0 group-hover:w-full bg-eggplant"></div>
                        </a>
                        <a href="/#" className="group font-medium relative text-eggplant" data-testid="/cash">
                            Save
                            <div className="absolute left-0 right-0 h-0.5 -bottom-0.5 transition-all w-0 group-hover:w-full bg-eggplant"></div>
                        </a>
                        <a href="/#" className="group font-medium relative text-eggplant" data-testid="/portfolio-line-of-credit">
                            Borrow
                            <div className="absolute left-0 right-0 h-0.5 -bottom-0.5 transition-all w-0 group-hover:w-full bg-eggplant"></div>
                        </a>
                        <a role="button" href="/#" className="flex font-medium relative text-eggplant">Learn 
                            <svg fill="none" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" data-testid="chevron-down" className="mt-3 ml-1 h-1.5"><path d="M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z" fill="currentColor" fillRule="evenodd"></path></svg>
                            <div className="absolute left-0 right-0 h-0.5 -bottom-0.5 transition-all w-0 group-hover:w-full bg-eggplant"></div>
                        </a>

                        <div className="flex items-center justify-end space-x-3">
                            <a href="/login" className="z-10 relative border-slate-400 items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_secondaryButtonOnLight__1zLN9 border border-blurple text-blurple inline-flex whitespace-nowrap group" data-testid="logged-out-header-login">
                                <div className="block group-hover:text-gradient group-hover:bg-gradient-to-b group-hover:from-blurple group-hover:to-caracara">Log in</div>
                            </a>
                            <a href="/#"className="z-10 relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body border btn-bg-700 text-white overflow-hidden inline-flex whitespace-nowrap"  data-testid="logged-out-header-signup">
                                Get started
                            </a>
                        </div>
                    </nav>
                    
                    <div className="relative hidden md:block lg:hidden z-10 px-0 md:px-12 lg:px-16">
                        <div className="absolute md:static left-0 right-0 flex justify-between items-center py-6 px-6 md:px-0">
                            <a className="z-10 relative font-medium underline text-eggplant" href="/">
                                <img className="text-3xl font-bold text-white md:text-eggplant" src={ATAfricaLogo} width="100px" height="26px" alt="ATAfrica_logo" loading="eager" />
                            </a>
                            <button type="button">
                                <img width="30" height="23" alt="Open navigation menu" loading="eager" src="/next/contenthash/next/svg/optimized/hamburger-eggplant.contenthash.6185cf2773b26cecbec33b4d727d700c4aac8590.svg" />
                            </button>
                        </div>
                    </div>

                    <div className="relative block md:hidden z-10">
                        <div className="absolute md:static left-0 right-0 flex justify-between items-center py-6 px-4">
                            <a className="z-10 relative font-medium underline text-eggplant" href="/">
                                <img className="text-3xl font-bold text-white md:text-eggplant" width="200" height="26" data-testid="logo-dynamic-wordmark" alt="Wealthfront Logo" loading="eager" src="/next/contenthash/next/svg/optimized/wordmark-surface-dynamic.contenthash.d9e2432c7c6d88eabff40bd4374f8be7a9522262.svg" />
                            </a>
                            <button type="button" data-testid="logged-out-mobile-header-hamburger">
                                <img width="30" height="23" alt="Open navigation menu" loading="eager" src="/next/contenthash/next/svg/optimized/hamburger.contenthash.8361a668629c64dbc61ef8ad2c464b80fabee143.svg" />
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </header>
  )
}

export default Navigation