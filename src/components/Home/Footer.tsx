import Link from "next/link";
import Logo from "../icons/Logo";
import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <footer className="flex justify-center pb-20 border-t-[1px] border-[#09FCDC] mt-[68px] pt-[40px]">
            <div className="max-w-[1200px] w-full flex items-center justify-between">
                <div id="about" className="h-full flex flex-col justify-between max-w-[340px] w-full">
                    <Logo />
                    <p className="text-[11px] ml-[25px]">info@taopad.io</p>
                </div>
                <div id="links" className="grid grid-cols-4">
                    <div className="gap-y-3 flex flex-col">
                        <p className="text-2xl">Discover</p>
                        <Link href="/" className="opacity-50">
                            Dapp
                        </Link>
                        <Link href="/" className="opacity-50">
                            Docs
                        </Link>
                        <Link href="/" className="opacity-50">
                            Bridge
                        </Link>
                    </div>
                    <div className="gap-y-3 flex flex-col">
                        <p className="text-2xl">About</p>
                        <Link href="/" className="opacity-50">
                            Docs
                        </Link>
                        <Link href="/" className="opacity-50">
                            Mission
                        </Link>
                    </div>
                    <div className="gap-y-3 flex flex-col">
                        <p className="text-2xl">$TPAD</p>
                        <Link href="/" className="opacity-50">
                            Etherscan
                        </Link>
                        <Link href="/" className="opacity-50">
                            Uniswap
                        </Link>
                        <Link href="/" className="opacity-50">
                            Chart
                        </Link>
                        <Link href="/" className="opacity-50">
                            Tokenomics
                        </Link>
                        <div />
                    </div>
                    <div className="gap-y-3 flex flex-col">
                        <p className="text-2xl">Community</p>
                        <Link href="/" className="opacity-50">
                            Telegram
                        </Link>
                        <div />
                    </div>
                </div>
            </div>
        </footer>
    );
};
