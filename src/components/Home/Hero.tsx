
// import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
// import Offers from "./Offers";
import Header from "./Header";
import Link from "next/link";
import ButtonLink from "../common/buttonLink";
import { Content } from "./Content";

export const Hero: React.FC = () => {
    return (
        <div className=" bg-auto flex flex-col min-h-screen w-screen overflow-x-hidden relative w-full flex justify-center items-center font-redhat overflow-x-hidden text-white bg-opacity-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/images/hero-bg.svg')",
          // backgroundPositionX: "10%%",
          // backgroundPositionY: "-5%",
          backgroundSize: "cover",
        }}>
            <div className="h-screen flex flex-col justify-around relative w-screen bg-[url('/images/hero-midBg.svg')] bg-no-repeat bg-cover bg-center">
                <Header />
                <div className="w-full h-full flex flex-col justify-between items-center ">
                    <div className="w-full h-[70%] flex flex-col justify-center items-center text-[68px] font-[inter] text-white text-center bg-[url('/images/hero-atom.svg')] bg-no-repeat bg-center bg-cover">
                        <p className="mt-[3vh]">Building DeFi </p>
                        <p className="mt-[-30px]">for Tao</p>
                        <div className="flex gap-x-3">
                            <ButtonLink href="/" buttonText="Claim Rewards" paddingX="px-[25px]" paddingY="py-[10px]" />
                            <ButtonLink href="/" buttonText="Launchpad" paddingX="px-[35px]" paddingY="py-[10px]" />
                        </div>
                    </div>
                    <p className="text-[#09FCDC] text-[16px] font-[400]">Official Contract Address: 0x5483DC6abDA5F094865120B2D251b5744fc2ECB5</p>
                    <div className="w-[50%] flex flex-col content-between justify-center">
                        <div className="flex flex-row justify-between">
                            <Image width={150} height={200} alt="" src={"/images/bittensor-logo.svg"} />
                            <Image width={150} height={200} alt="" src={"/images/athena-logo.svg"} />
                            <Image width={150} height={200} alt="" src={"/images/layerzero-logo.svg"} />
                        </div>
                        <div className=" flex flex-row justify-between">
                            <div className="flex flex-row">
                                <Image width={50} height={100} alt="" src={"/images/taoinu-logo.svg"} />
                                <Image width={100} height={200} alt="" src={"/images/taoinu-text-image.svg"} />
                            </div>
                            <Image width={150} height={200} alt="" src={"/images/vault-logo.svg"} />
                            <div className="flex flex-row">
                                <Image width={50} height={100} alt="" src={"/images/camelot-logo.svg"} />
                                <Image width={100} height={200} alt="" src={"/images/camelot-text-image.svg"} />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}