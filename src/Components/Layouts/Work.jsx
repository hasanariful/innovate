import Container from "../Container"
import Image from "../Image"
import Slash from "../../assets/slash.png"
import Card5 from "../../assets/card5.png"
import Card6 from "../../assets/card6.png"
import Card7 from "../../assets/card7.png"
import Card8 from "../../assets/card8.png"
import Card9 from "../../assets/card9.png"
import Card10 from "../../assets/card10.png"
import Heading from "../Heading"
import Flex from "../Flex"
import List from "../List"


const Work = () => {
  return (
    <section>
        <Container>
            <div className="py-[120px]">
                <div className="text-center">
                    <div className="ml-[550px]">
                        <Image src={Slash}/>
                    </div>
                    <Heading className="font-open font-extrabold text-[48px] text-menuTextColor" text="Work Showcase" as="h2"/>
                </div>
                <div className="w-[780px] my-[30px]">
                    <ul>
                        <Flex className="justify-evenly">
                            <List className="font-open font-semibold text-[24px] text-menuTextColor hover:text-buttonHover" href="#" text="All"/>
                            <List className="font-open font-semibold text-[24px] text-menuTextColor hover:text-buttonHover" href="#" text="Digital Mkt"/>
                            <List className="font-open font-semibold text-[24px] text-menuTextColor hover:text-buttonHover" href="#" text="Branding"/>
                            <List className="font-open font-semibold text-[24px] text-menuTextColor hover:text-buttonHover" href="#" text="Content Mkt"/>
                            <List className="font-open font-semibold text-[24px] text-menuTextColor hover:text-buttonHover" href="#" text="Social Media Mkt"/>
                        </Flex>
                    </ul>
                </div>
                <div className="mb-[30px]">
                    <Flex className="justify-between">
                        <div className="">
                            <Image src={Card5}/>
                        </div>
                        <div className="">
                            <Image src={Card6}/>
                        </div>
                        <div className="">
                            <Image src={Card7}/>
                        </div>
                    </Flex>
                </div>
                <div className="">
                    <Flex className="justify-between">
                        <div className="">
                            <Image src={Card8}/>
                        </div>
                        <div className="">
                            <Image src={Card9}/>
                        </div>
                        <div className="">
                            <Image src={Card10}/>
                        </div>
                    </Flex>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Work