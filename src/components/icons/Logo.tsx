import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <Link href="/" className="relative z-10">
            <Image src="/logo.svg" alt="taopad logo" width={204} height={83} />
        </Link>
    );
};

export default Logo;
