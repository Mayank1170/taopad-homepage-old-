import Link from "next/link";
import Logo from "../icons/Logo";
// import ArrowRight from "../icons/ArrowRight";
import Image from "next/image";
import ButtonLink from "../common/buttonLink";

const Header: React.FC = () => {
    return (
        <nav className="flex items-center  ">
            <div id="nav-links" className="w-full flex items-center justify-center ">
                <Logo />
            </div>
            <div className="flex flex-row justify-between items-center w-full h-[54px] border-[1px] text-[11px] font-normal rounded-[20px] border-[#8C8C8C] ">
                <Link
                    href="/"
                    className="w-full flex justify-center text-[#949494] border-r-[1px]"
                >
                    Home
                </Link>
                <Link
                    href="/"
                    className="w-full px-2 flex justify-center text-[#949494] duration-200 border-r-[1px]"
                >
                    Documentation
                </Link>
                <Link
                    href="/"
                    className="w-full flex justify-center text-[#949494]  duration-200 border-r-[1px]"
                >
                    Rewards
                </Link>
                <Link
                    href="/"
                    className="w-full flex justify-center text-[#949494] duration-200 border-r-[1px]"
                >
                    Roadmap
                </Link>
                <Link
                    href="/"
                    className="w-full flex justify-center text-[#949494] duration-200"
                >
                    Bridge
                </Link>
            </div>
            <ButtonLink href="/" buttonText="Launch App"paddingX="px-[27.63px]" paddingY="py-[15px]" />

        </nav>
    );
};

export default Header;
