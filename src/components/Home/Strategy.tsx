import { StrategyCard } from "./StrategyCard"


export const Strategy: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center border-t-[1px] border-[#09FCDC]">
            <h1 className="text-[46px] font-[400] mt-[68px]">Community Strategy</h1>
            <div className="flex flex-col gap-8 w-[70%] mt-[60px]">
                <div className="flex gap-4">
                    <StrategyCard imageSrc="/images/community-image.svg" heading="Building a Strong Community" content1="Foundation of $TPAD: The community is the backbone of
                    TaoPad, fostering an environment of support,
                    engagement, and shared growth."  content2="" alternativeName="Strong Community" />
                    <StrategyCard imageSrc="/images/communication-image.svg" heading="Interactive Platforms
and Communication" content1="Foundation of $TPAD: The community is the backbone of
                    TaoPad, fostering an environment of support,
                    engagement, and shared growth." content2="Transparency and Regular Updates: Commitment to transparency with regular updates about the project's progress, decision, and future plans." alternativeName="Strong Community" />
                </div>
                <div className="flex gap-4">
                    <StrategyCard imageSrc="/images/involvement-image.svg" heading="Building a Strong Community" content1="Community Governance: Emphasizing decentralized governance, where the community has a say in key decision through a voting mechanism." content2="Rewards for Participation: Implementing incentive programs for active community members, rewarding contributions to the network's growth and promotion." alternativeName="Strong Community" />
                    <StrategyCard imageSrc="/images/education-image.svg" heading="Building a Strong Community" content1="Foundation of $TPAD: The community is the backbone of TaoPad, fostering an environment of support, engagement, and shared growth." content2="Through these initiatives, TPAD aims to nurture a knowledgeable, engaged and active community, crucial for the long-term success and sustainability of the project." alternativeName="Strong Community" />
                </div>
            </div>
        </div>
    )
}