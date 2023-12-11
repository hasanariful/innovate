import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Slash from '../../assets/slash.png'
import BlogCard1 from '../../assets/blogCard1.png'
import Heading from '../Heading'
import Flex from '../Flex'
import List from '../List'

const Blog = () => {
  return (
    <section className="py-[100px]">
        <Container>
            <div className="grid justify-items-center mb-[30px]">
                <div className="ml-[20px]">
                    <Image src={Slash}/>
                </div>
                <div className="text-center my-[15px]">
                    <Heading className="font-open font-extrabold text-[48px] text-menuTextColor" text="Our Latest Blog" as="h2"/>
                </div>
                <div className="text-center mx-[330px]">
                    <Heading className="font-papri font-regular text-[18px] text-paraTextColor" text="We provide digital experience services to startups and small businesses." as="p"/>
                </div>
            </div>
            <Flex className="justify-between">
                <div className="w-[369px] shadow-xl rounded-xl">
                    <div className="">
                        <Image src={BlogCard1}/>
                    </div>
                    <div className="pl-[20px] pt-[20px] pr-[120px]">
                        <Heading className="font-work font-medium text-[24px] text-blogHtext" text="How to Be Ahead of Stock Changes" as="h2"/>
                        <Heading className="font-nun font-regular text-[18px] text-blogPtext" text="By John - 5 Comments" as="p"/>
                        <ul className="font-open font-bold text-[18px] text-serviceTextColor my-[20px] z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[-10px] after:rounded-full after:-z-10">
                            <List href="#" text="Read More" />
                        </ul>
                    </div>
                </div>

                <div className="w-[369px] shadow-xl rounded-xl">
                    <div className="w-[370px]">
                        <Image src={BlogCard1}/>
                    </div>
                    <div className="pl-[20px] pt-[20px] pr-[120px]">
                        <Heading className="font-work font-medium text-[24px] text-blogHtext" text="Online Reputation And Management" as="h2"/>
                        <Heading className="font-nun font-regular text-[18px] text-blogPtext" text="By Amin  - 10 Comments" as="p"/>
                        <ul className="font-open font-bold text-[18px] text-serviceTextColor my-[20px] z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[-10px] after:rounded-full after:-z-10">
                            <List href="#" text="Read More" />
                        </ul>
                    </div>
                </div>

                <div className="w-[369px] shadow-xl rounded-xl">
                    <div className="w-[370px]">
                        <Image src={BlogCard1}/>
                    </div>
                    <div className="pl-[20px] pt-[20px] pr-[90px]">
                        <Heading className="font-work font-medium text-[24px] text-blogHtext" text="Tips To Move Your Project More Forward" as="h2"/>
                        <Heading className="font-nun font-regular text-[18px] text-blogPtext" text="By Insider  - 15 Comments" as="p"/>
                        <ul className="font-open font-bold text-[18px] text-serviceTextColor my-[20px] z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[-10px] after:rounded-full after:-z-10">
                            <List href="#" text="Read More" />
                        </ul>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>

  )
}

export default Blog