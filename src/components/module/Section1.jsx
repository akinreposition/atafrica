import React, { useState } from 'react'

const Section1 = () => {
    const [ range, setRange ] = useState(0)
    // const [ usStock, setUsStock ] = (0);
    const [ stocks, setStocks ] = useState({
        usStock: 0,
        foreignStock: 0,
        emergingMarket: 0,
        dividendStock: 0,
        municipalBond: 0
    })
    // const {  foreignStock, emergingMarket, dividendStock, municipalBond } = stocks

    const handleUsStock = () => {
        switch(stocks) {
            case stocks.usStock:
              if(range >= 20 ) {
                setStocks(stocks.usStock += 18 )
              }
              break;
            case stocks.foreignStock:
              
              break;
            case stocks.emergingMarket:
              
              break;
            case stocks.dividendStock:
              
              break;
            case stocks.municipalBond:
              
              break;
            
            default:
              // code block
          }
        // setStocks(e.target.value)
    }

    const onChange = e => {
        if(range >= 0 || range < 100) {
            setRange(e.target.value)
        }
        handleUsStock();
    }
  return (
    <div>
        <div className="grid grid-cols-1 lg:grid-cols-60/40 mt-16">
            <div className="bg-eggplant w-full flex items-center justify-center relative py-16 px-8">
                <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 flex justify-center">
                    <div className="w-[683px] md:w-[300px] flex-grow-0 flex-shrink-0 flex-basis-0 md:flex-basis-auto">
                        <form className="rounded-lg bg-white p-6 w-[310px] xs:w-[345px] md:w-[448px] space-y-4">
                            <div className="flex justify-between">
                                <div className="copy-body font-bold">Risk score: {"  "} {range} %</div>
                                <div className="copy-body-sm">Example portfolio</div>
                            </div>
                            <input 
                                type="range" 
                                style={{transform:"scale(1)", cursor:"pointer"}} 
                                className="h-1.5 w-full rounded-full bg-gradient-to-r from-ambient-orange to-lavender "
                                onChange={onChange}
                            />
                        </form>
                    </div>
                </div>
                <div aria-atomic="true" aria-live="polite" className="w-full max-w-[683px] space-y-4">
                    <div className="grid grid-cols-12 text-white" style={{maxAllocation:"0.45", transformOrigin: "50% 50% 0px "}}>
                        <div className="col-span-5 md:col-span-4 pr-4 flex items-center" style={{transformOrigin: "50% 50% 0px "}}>
                            <span className="truncate overflow-ellipsis">U.S. Stocks</span>
                            <button className="ml-2" aria-label="Open U.S. Stocks dialog" type="button">
                                <img width="24" height="24" alt="More information" loading="lazy" src="/next/contenthash/next/svg/optimized/question_mark_circle.contenthash.24da3cb67219d581ee83d390c8d6017e8e3fc61a.svg" />
                            </button>
                        </div>
                        <div className="col-span-7 md:col-span-8 -mb-px" style={{transformOrigin: "50% 50% 0px"}}>
                            <div className="w-8 text-white border-lavender border px-4 py-2 transition min-w-[64px]" style={{ width:"calc((0.45 / var(--max-allocation)) * 100%)", backgroundColor:"#230B59" }}>{ stocks.usStock } %</div>
                        </div>
                        <div className="col-span-5 md:col-span-4 pr-4 flex items-center" style={{transformOrigin: "50% 50% 0px "}}>
                            <span className="truncate overflow-ellipsis">Foreign Stocks</span>
                            <button className="ml-2" aria-label="Open Foreign Stocks dialog" type="button">
                                <img width="24" height="24" alt="More information" loading="lazy" src="/next/contenthash/next/svg/optimized/question_mark_circle.contenthash.24da3cb67219d581ee83d390c8d6017e8e3fc61a.svg" />
                            </button>
                        </div>
                        <div className="col-span-7 md:col-span-8 -mb-px" style={{transformOrigin: "50% 50% 0px "}}>
                            <div className="w-8 text-white border-lavender border px-4 py-2 transition min-w-[64px]" style={{width:"calc((0.15 / var(--max-allocation)) * 100%)", backgroundColor:"#4840BB" }}>15{"  "}%</div>
                        </div>
                        <div className="col-span-5 md:col-span-4 pr-4 flex items-center" style={{transformOrigin: "50% 50% 0px "}}>
                            <span className="truncate overflow-ellipsis">Emerging Markets</span>
                            <button className="ml-2" aria-label="Open Emerging Markets dialog" type="button">
                                <img width="24" height="24" alt="More information" loading="lazy" src="/next/contenthash/next/svg/optimized/question_mark_circle.contenthash.24da3cb67219d581ee83d390c8d6017e8e3fc61a.svg" />
                            </button>
                        </div>
                        <div className="col-span-7 md:col-span-8 -mb-px" style={{transformOrigin: "50% 50% 0px "}}>
                            <div className="w-8 text-white border-lavender border px-4 py-2 transition min-w-[64px]" style={{width:"calc((0.15 / var(--max-allocation)) * 100%)", backgroundColor:"#4D5898"}}>15{"  "}%</div>
                        </div>
                        <div className="col-span-5 md:col-span-4 pr-4 flex items-center" style={{transformOrigin: "50% 50% 0px "}}>
                            <span className="truncate overflow-ellipsis">Dividend Stocks</span>
                            <button className="ml-2" aria-label="Open Dividend Stocks dialog" type="button">
                                <img width="24" height="24" alt="More information" loading="lazy" src="/next/contenthash/next/svg/optimized/question_mark_circle.contenthash.24da3cb67219d581ee83d390c8d6017e8e3fc61a.svg" />
                            </button>
                        </div>
                        <div className="col-span-7 md:col-span-8 -mb-px" style={{transformOrigin: "50% 50% 0px "}}>
                            <div className="w-8 text-white border-lavender border px-4 py-2 transition min-w-[64px]" style={{width: "calc((0.09 / var(--max-allocation)) * 100%)", backgroundColor:"#7086C9" }}>9{"  "}%</div>
                        </div>
                        <div className="col-span-5 md:col-span-4 pr-4 flex items-center" style={{transformOrigin: "50% 50% 0px "}}>
                            <span className="truncate overflow-ellipsis">Municipal Bonds</span>
                            <button className="ml-2" aria-label="Open Municipal Bonds dialog" type="button">
                                <img width="24" height="24" alt="More information" loading="lazy" src="/next/contenthash/next/svg/optimized/question_mark_circle.contenthash.24da3cb67219d581ee83d390c8d6017e8e3fc61a.svg" />
                            </button>
                        </div>
                        <div className="col-span-7 md:col-span-8 -mb-px" style={{transformOrigin: "50% 50% 0px "}}>
                            <div className="w-8 text-white border-lavender border px-4 py-2 transition min-w-[64px]" style={{ width:"calc((0.16 / var(--max-allocation)) * 100%)", backgroundColor: "#BDC6F5" }}>16{"  "}%</div>
                        </div>
                    
                        <div className="w-full flex flex-col justify-start items-start lg:pl-8 pt-8 sm:py-10 text-eggplant">
                            <div className="w-auto xl:w-96 2xl:w-[500px] space-y-4 justify-self-center lg:justify-self-end px-8 md:px-12 lg:px-6 order-last lg:order-first">
                                <div className="space-y-8 lg:space-y-10 2xl:space-y-12 3xl:space-y-16">
                                    <div className="space-y-4">
                                        <h2 className="copy-h1-alt">Smarter investing, brilliantly personalized.</h2>
                                    </div>
                                    <div className="space-y-4">
                                    <div className="copy-body lg:w-[300px] 2xl:w-[334px] 3xl:w-[420px]">Just answer a few questions, and we’ll build you a personalized portfolio of wonderfully diversified, low-cost index funds designed to grow your wealth for the long term. Check out how our personalized portfolios have{"  "} 
                                        <a className="z-10 relative font-medium underline text-eggplant" href="/#">historically performed</a>.
                                    </div>
                                </div>
                                <div className="flex md:items-center flex-row lg:space-x-8">
                                    <a className="z-10 button_button__rTWTc relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__1s8JK bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap" href="/#">Get started</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                        <div className="grid grid-cols-2 xl:grid-cols-3 justify-between text-steel gap-x-4">
                            <div className="flex justify-between col-span-1 space-x-2"><div>Real Estate</div><div>0{"  "}%</div>
                        </div>
                        <div className="flex justify-between col-span-1 space-x-2">
                            <div>U.S. Gov Bonds</div><div>0{"  "}%</div>
                        </div>
                        <div className="flex justify-between col-span-1 space-x-2">
                            <div>Corporate Bonds</div><div>0{"  "}%</div>
                        </div>
                        <div className="flex justify-between col-span-1 space-x-2">
                            <div>TIPS</div><div>0{"  "}%</div>
                        </div>
                        <div className="flex justify-between col-span-1 space-x-2">
                            <div>Emerging Mkt Bonds</div><div>0{"  "}%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start lg:pl-8 pt-8 sm:py-10 text-eggplant">
                <div className="w-auto xl:w-96 2xl:w-[500px] space-y-4 justify-self-center lg:justify-self-end px-8 md:px-12 lg:px-6 order-last lg:order-first">
                    <div className="space-y-8 lg:space-y-10 2xl:space-y-12 3xl:space-y-16">
                        <div className="space-y-4">
                            <h2 className="copy-h1-alt">Smarter investing, brilliantly personalized.</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="copy-body lg:w-[300px] 2xl:w-[334px] 3xl:w-[420px]">Just answer a few questions, and we’ll build you a personalized portfolio of wonderfully diversified, low-cost index funds designed to grow your wealth for the long term. Check out how our personalized portfolios have{"  "}
                             <a className="z-10 relative font-medium underline text-eggplant" href="/#">historically performed</a>.
                            </div>
                        </div>
                        <div className="flex md:items-center flex-row lg:space-x-8">
                            <a className="z-10 button_button__rTWTc relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__1s8JK bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap" href="/#">Get started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1