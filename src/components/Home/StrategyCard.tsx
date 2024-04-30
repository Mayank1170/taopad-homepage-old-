import Image from "next/image"

interface StrategyCardProps {
    imageSrc: string,
    heading: string,
    content1: string,
    content2: string,
    alternativeName: string,
}

export const StrategyCard: React.FC<StrategyCardProps> = ({ imageSrc, heading, content1, content2, alternativeName }) => {
    return (
        <div className="flex flex-row gap-[47px] border-[1px] rounded-[25px] p-[38px] border-white/45">
            <div className="h-full flex ">
                <Image src={imageSrc} alt={alternativeName} width="300" height="300" />
            </div>
            <div className="flex flex-col gap-[13px] font-[400]">
                <h1 className="text-[22px]]">${heading}</h1>
                <p className="text-[12px] text-[#C7C7C7]"> {content1}</p>
                <p className="text-[12px] text-[#C7C7C7]"> {content2}</p>
            </div>
        </div>
    )
}