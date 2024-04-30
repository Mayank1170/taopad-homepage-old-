import Image from "next/image";
import { Inter } from "next/font/google";
import { FAQs, Hero, Strategy } from "@/components/Home";
import { Content } from "@/components/Home"
import { Footer } from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <div className=""><Hero /></div>
      <div className=""><Content /></div>
      <div className=""><Strategy /></div>
      <div><FAQs/></div>
      <div className=""><Footer /></div>
    </div>
  );
}
