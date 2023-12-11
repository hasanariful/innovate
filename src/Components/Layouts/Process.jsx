import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Slash from '../../assets/slash.png'
import Step1card from '../../assets/step1card.png'
import Step2card from '../../assets/step2card.png'
import Step3card from '../../assets/step3card.png'
import Heading from '../Heading'
import Flex from '../Flex'
import List from '../List'

const Process = () => {
  return (
    <section>
        <Container>
            <div className="py-[100px]">
                <div className="text-center">
                    <div className="ml-[540px]">
                        <Image src={Slash}/>
                    </div>
                    <Heading className="font-open font-extrabold text-[48px] text-menuTextColor my-[20px]" text="Our Creative Process" as="h1"/>
                    <Heading className="font-robo font-regular text-[18px] text-paraTextColor mx-[400px]" text="We provide digital experience services to startups and small businesses." as="p"/>
                </div>
                <div className="mt-[30px]">
                    <Flex className="justify-center">
                        <div className="w-[50%] group my-auto">
                            <div className="p-[30px] h-[240px] w-[465px] group-hover:bg-strategyHover rounded-xl">
                                <ul className="font-open font-semibold text-[18px] text-serviceTextColor ml-[10px] mb-[10px] z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[-10px] after:rounded-full after:-z-10">
                                    <List href="#" text="Step-1" />
                                </ul>
                                <Heading className="font-open font-semibold text-[30px] text-serviceTextColor mb-[20px]" text="Global SEO Research" as="h2"/>
                                <Heading className="font-robo font-regular text-[18px] text-paraTextColor pr-[50px]" text="Practical tools and features make it easier to build and manage your site." as="p"/>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <Image src={Step1card}/>
                        </div>
                    </Flex>

                    <Flex className="justify-center">
                        <div className="w-[50%]">
                            <Image src={Step2card}/>
                        </div>
                        <div className="w-[50%] group my-auto ml-[120px]">
                            <div className="p-[30px] h-[240px] w-[465px] group-hover:bg-socialHover rounded-xl">
                                <ul className="font-open font-semibold text-[18px] text-serviceTextColor ml-[10px] mb-[10px] z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[-10px] after:rounded-full after:-z-10">
                                    <List href="#" text="Step-2" />
                                </ul>
                                <Heading className="font-open font-semibold text-[30px] text-serviceTextColor mb-[20px]" text="Social Media Integration" as="h2"/>
                                <Heading className="font-robo font-regular text-[18px] text-paraTextColor pr-[50px]" text="Practical tools and features make it easier to build and manage your site." as="p"/>
                            </div>
                        </div>
                    </Flex>

                    <Flex className="justify-center">
                        <div className="w-[50%] group my-auto">
                            <div className="p-[30px] h-[240px] w-[465px] group-hover:bg-contentHover rounded-xl">
                                <ul className="font-open font-semibold text-[18px] text-serviceTextColor ml-[10px] mb-[10px] z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[-10px] after:rounded-full after:-z-10">
                                    <List href="#" text="Step-3" />
                                </ul>
                                <Heading className="font-open font-semibold text-[30px] text-serviceTextColor mb-[20px]" text="Launching The Application" as="h2"/>
                                <Heading className="font-robo font-regular text-[18px] text-paraTextColor pr-[50px]" text="Practical tools and features make it easier to build and manage your site." as="p"/>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <Image src={Step3card}/>
                        </div>
                    </Flex>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Process