import React from "react";
import Image from "next/image";
import ButtonLink from "../common/buttonLink";

export const Content: React.FC = () => {
    return (
        <div className="px-[125px]">
            <div className="w-full pt-[27px] flex flex-row justify-around">
                <div className="mt-[104px] flex flex-col gap-y-7">
                    <p className="text-[47px] font-[400] leading-none">Making $TAO liquid <br /> and and interoperable,<br /> powered by <br /> $TPAD's value <br /> accrual design </p>
                    <p className="text-[15px] font-[400] text-[#09FCDC]">TaoPad offers holders benefits through a Bittensor-focused Launchpad and a <br /> bridge for $wTAO transfers between Ethereum and Arbitrum.</p>
                </div>
                <div>
                    <Image width={450} height={600} alt="" src={"/images/content-image.svg"} />
                </div>
            </div>
            <div className="mt-[100px] flex flex-col justify-center items-center">
                <div className="flex flex-col gap-y-[100px] justify-between w-full border-[1px] border-white/30 rounded-[45px] p-[78px]">
                    <div className="flex flex-row justify-between">
                        <div>
                            <Image width={45} height={60} alt="" src={"/images/decentralised-image.svg"} />
                            <h1 className="text-[20px] font-[400]">Decentralized</h1>
                            <p className="text-[15px] font-[400] text-[#C7C7C7]">Seamlessly operate within a fully decentralized <br /> ecosystem that ensures autonomy and security <br /> through blockchain technology.</p>
                        </div>
                        <div>
                            <Image width={45} height={60} alt="" src={"/images/transparency-image.svg"} />
                            <h1 className="text-[20px] font-[400]">Transparency</h1>
                            <p className="text-[15px] font-[400] text-[#C7C7C7]">Every transaction is transparent, with a clear tax<br /> mechanism that contributes to the stability and<br /> growth of the Tao ecosystem.</p>
                        </div>
                        <div>
                            <Image width={45} height={60} alt="" src={"/images/bridge-image.svg"} />
                            <h1 className="text-[20px] font-[400]">Bridge</h1>
                            <p className="text-[15px] font-[400] text-[#C7C7C7]">Powered by LayerZero, TaoPad established the <br /> first bridge for TAO from Ethereum to other EVM<br /> chains.</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>
                            <Image width={45} height={60} alt="" src={"/images/synergy-image.svg"} />
                            <h1 className="text-[20px] font-[400]">Synergy</h1>
                            <p className="text-[15px] font-[400] text-[#C7C7C7]">Designed to work in harmony with the BitTensor<br /> network, creating a symbiotic relationship that<br /> propels decentralized AI.</p>
                        </div>
                        <div>
                            <Image width={45} height={60} alt="" src={"/images/launchpad-image.svg"} />
                            <h1 className="text-[20px] font-[400]">Launchpad</h1>
                            <p className="text-[15px] font-[400] text-[#C7C7C7]">Gain entry to a world of opportunities with our <br />native launchpad, a springboard for innovative<br /> projects targeting the Tao ecosystem.</p>
                        </div>
                        <div>
                            <Image width={45} height={60} alt="" src={"/images/governance-image.svg"} />
                            <h1 className="text-[20px] font-[400]">Governance</h1>
                            <p className="text-[15px] font-[400] text-[#C7C7C7]">Engage in a platform where your voice matters, <br /> with community-driven governance allowing<br /> token holders to steer the project's trajectory.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[95%] pt-[27px] flex flex-col justify-around">
                    <div className="flex flex-row ">
                        <div className="mt-[104px] flex flex-col gap-y-7">
                            <p className="text-[46px] font-[400] leading-none">$ TPAD <br /> Tokenomics<br /></p>
                            <p className="text-[15px] font-[400] text-[#C7C7C7]">$TPAD's total supply is 1,000,000 tokens, with only ever ~ 650,000 circulating <br /> With every buy and sell of $TPAD a 5% fee is collected in $ETH. <br /> 20% of the tax is immediately distributed to $TPAD holders. The remaining 80% is used to <br /> do buybacks as determined by governance, benefiting $TPAD holders.<br /> Governance has the prerogative to change this anytime</p>
                            <p className="text-[20px] text-[#09FCDC]">1 STEP</p>
                            <div>
                                <p className="text-[20px] text-[#09FCDC]">CLAIM</p>
                                <p className="text-[15px] font-[400] text-[#C7C7C7]">Users claim $wTAO rewards, after a distribution has happened</p>
                            </div>
                        </div>
                        <div>
                            <Image width={650} height={600} alt="" src={"/images/tpad-tokenomics-image.svg"} />
                        </div>
                    </div>
                    <div className="flex flex-row ">
                        <div>
                            <Image width={650} height={600} alt="" src={"/images/revenue-streams-image.svg"} />
                        </div>
                        <div className="mt-[104px] flex flex-col gap-y-7">
                            <p className="text-[46px] font-[400] leading-none">Revenue<br /> streams<br /></p>
                            <p className="text-[15px] font-[400] text-[#C7C7C7]">TPAD holders get rewarded from all the below revenue streams</p>
                            <div className="flex flex-row items-start text-[11px] text-[#09FCDC] gap-3">
                                <div className="w-full flex flex-col gap-4 ">
                                    <button className="border-[1px] p-[15px] w-full rounded-[20px]">Launchpad</button>
                                    <button className="border-[1px] p-[15px] w-full rounded-[20px]">Airdrops</button>
                                </div>
                                <button className="border-[1px] p-[15px] w-full rounded-[20px]">Bridge Fees</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}