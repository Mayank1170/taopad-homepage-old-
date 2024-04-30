import Link from "next/link";

interface ButtonLinkProps {
    href: string,
    buttonText: string,
    paddingX: string,
    paddingY: string
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, buttonText, paddingX, paddingY}) => {
    return (
        <div className="w-full flex justify-center items-center">
            <Link href={href} className="flex justify-center rounded-[20px] bg-black/50">
                <button className={`flex border-[1px] ${paddingX} ${paddingY} py-[20px] rounded-[20px] border-[#8C8C8C]`}>
                    <p className="text-[11px] font-normal whitespace-nowrap">
                        {buttonText}
                    </p>
                </button>
            </Link>
        </div>
    )
}

export default ButtonLink