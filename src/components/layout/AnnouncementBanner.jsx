import React from 'react'


const AnnouncementBanner = () => {
  return (
    <div id="announce-banner" className='announcement_banner_gradient mx-auto mt-5 xl:justify-evenly xl:rounded-md lg:w-11/12 xl:max-w-[2024px]'>
      <div className="hidden xl:block mx-auto py-4 px-0 md:px-12 lg:px-16 max-w-[2024px]">
        <div className="filter-shadow-short grid grid-cols-[1fr,max-content,1fr] text-center justify-between py-4 px-5 rounded text-white">
          
          <div>
            <div className="inline-block px-4 py-2 rounded-full text-eggplant copy-body font-bold">
              <span role="img" aria-label="emoji"></span>
              <span className="uppercase"></span>
            </div>
          </div>
          <div className="copy-body">
            <span className='font-bold'>Now, earn above 10% with the ATAfrica Cash Account.</span>
            <a href="/#" className="z-10 relative font-medium underline text-white">
              Get Started
            </a>
          </div>
        </div>
      </div>
      
      <div id="mobile-banner" className="xl:hidden flex w-full px-4 py-5 text-white">
        <div className="flex-shrink-0 flex-grow-0"></div>
        <div className='flex-grow cop-body text-center'>
          <p className='font-bold'>Now, earn above 10% with the ATAfrica Cash Account.</p>
          <a href="/#" className="z-10 relative font-medium underline text-white">
              Get Started
          </a>
        </div>
      </div> 
    </div>
  )
}

export default AnnouncementBanner