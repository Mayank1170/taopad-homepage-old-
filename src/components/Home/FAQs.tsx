

export const FAQs: React.FC = () => {
    return (
        <div className=" border-t-[1px] border-[#09FCDC]  mt-24 ">
        <div className="mx-auto max-w-3xl mt-[50px]">
            <p className="text-[27px]">Frequently asked questions</p>
            <div className="divide-y divide-[#09FCDC6B]">
                <details className="group" open>
                    <summary
                        className="flex cursor-pointer list-none items-center justify-between py-4 text-[18px] font-medium text-secondary-900 group-open:text-primary-500">
                        What is $TPAD?
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                        TaoPad is a cryptocurrency protocol building DeFi for the BitTensor network's native token, $TAO.
                    </div>
                </details>
                <details className="group">
                    <summary
                        className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                        How does TaoPad work?
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">TaoPad is a cryptocurrency protocol building DeFi for the BitTensor network's native token, $TAO.</div>
                </details>
                <details className="group">
                    <summary
                        className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                        What is the total supply of $TPAD?
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">TaoPad is a cryptocurrency protocol building DeFi for the BitTensor network's native token, $TAO.</div>
                </details>
            </div>
        </div>
        </div>
    );
};