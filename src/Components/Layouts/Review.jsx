import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Slash from '../../assets/slash.png'
import ReviewIcon from '../../assets/reviewIcon.png'
import ReviewImage from '../../assets/reviewImage.png'
import Heading from '../Heading'
import Button from '../Button'

const Review = () => {
  return (
    <section className='py-[100px]'>
        <Container>
            <Flex className="justify-between">
                <div className="w-[33%]">
                    <div className="">
                        <Image src={Slash}/>
                    </div>
                    <Heading className="font-open font-extrabold text-[48px] text-menuTextColor" text="Client Review" as="h1"/>
                    <Heading className="font-papri font-regular text-[18px] text-paraTextColor mr-[50px]" text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient." as="p"/>
                    <Flex className="mt-[10px]">
                        <div className="ml-[10px] mr-[50px]">
                            <Button design="z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[-10px] after:rounded-full after:-z-10" text="<"/>
                        </div>
                        <div className="">
                            <Button design="z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[-10px] after:rounded-full after:-z-10" text=">"/>
                        </div>
                    </Flex>
                </div>
                <div className="w-[33%] group relative">
                    <div className="p-[50px] h-[400px] text-left group-hover:bg-socialHover rounded-xl">
                        <Heading className="font-papri font-regular text-[18px] text-paraTextColor" text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient." as="p"/>
                        <div className="mt-[20px] text-right">
                            <Heading className="font-open font-semibold text-[24px] text-serviceTextColor" text="Jane Cooper" as="h2"/>
                            <Heading className="font-open font-regular text-[18px] text-serviceTextColor" text="Fashion Designer" as="p"/>
                            <div className="ml-[100px] top-[75%] absolute">
                                <Image src={ReviewIcon}/>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="w-[33%] group relative">
                    <div className="p-[50px] h-[400px] text-left group-hover:bg-socialHover rounded-xl">
                        <Heading className="font-papri font-regular text-[18px] text-paraTextColor" text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient." as="p"/>
                        <div className="mt-[20px] text-right">
                            <Heading className="font-open font-semibold text-[24px] text-serviceTextColor" text="Eleanor Pena" as="h2"/>
                            <Heading className="font-open font-regular text-[18px] text-serviceTextColor" text="Architecture" as="p"/>
                            <Flex>
                                <div className="ml-[70px] top-[75%] absolute">
                                    <Image src={ReviewIcon}/>
                                </div>
                                <div className="mt-[-80px]">
                                    <Image src={ReviewImage}/>
                                </div>
                            </Flex>
                        </div>
                        
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Review