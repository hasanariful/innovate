import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import Heading from '../Heading'
import List from '../List'

const Footer = () => {
  return (
    <section className="py-[100px]">
        <Container>
            <Flex className="justify-between">
                <div className="w-[40%] mr-[5%]">
                    <div className="mb-[30px]">
                        <Image src={Logo}/>
                    </div>
                    <Heading className="font-nun font-regular text-[18px] text-paraTextColor" text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page." as="h1"/>
                </div>

                <div className="w-[60%]">
                    <Flex className="justify-between">
                        <div className="">
                            <Heading className="font-open font-semibold text-[24px] text-blogHtext mb-[30px]" text="Features" as="h2"/>
                            <ul className="font-nun font-semibold text-[20px] text-paraTextColor leading-10">
                                <List href="#" text="Home"/>
                                <List href="#" text="About"/>
                                <List href="#" text="Benifit"/>
                                <List href="#" text="Profit"/>
                                <List href="#" text="Blog"/>
                            </ul>
                        </div>
                        <div className="">
                            <Heading className="font-open font-semibold text-[24px] text-blogHtext mb-[30px]" text="Products" as="h2"/>
                            <ul className="font-nun font-semibold text-[20px] text-paraTextColor leading-10">
                                <List href="#" text="Task Management"/>
                                <List href="#" text="Company Growth"/>
                                <List href="#" text="Time Tracking"/>
                            </ul>
                        </div>
                        <div className="">
                            <Heading className="font-open font-semibold text-[24px] text-blogHtext mb-[30px]" text="Support" as="h2"/>
                            <ul className="font-nun font-semibold text-[20px] text-paraTextColor leading-10">
                                <List href="#" text="Customer Service"/>
                                <List href="#" text="Accessibility"/>
                                <List href="#" text="Contact Us"/>
                            </ul>
                        </div>
                    </Flex>
                </div>
            </Flex>
            <Flex className="mt-[70px]">
                <div className="w-[70%]">
                    <Heading className="font-nun font-regular text-[18px] text-paraTextColor" text="@20201 Innovate.All rights reserved." as="h3"/>
                </div>
                <div className="w-[30%]">
                    <Flex className="justify-between">
                        <div className="">
                            <ul>
                                <List className="font-nun font-regular text-[18px] text-paraTextColor" href="#" text="Privacy Policy"/>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <List className="font-nun font-regular text-[18px] text-paraTextColor" href="#" text="Terms & Conditions"/>
                            </ul>
                        </div>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>

  )
}

export default Footer