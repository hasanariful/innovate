import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Slash from '../../assets/slash.png'
import Heading from '../Heading'
import Button from '../Button'
import Right from '../../assets/right.png'
import Card1 from '../../assets/card1.png'



const Banner = () => {
  return (
    
    <section>
        <Container>
           <div className="py-[100px]">
                <Flex>
                    <div className="w-[70%]">
                        <div className="mb-[35px]">
                            <Image src={Slash}/>
                        </div>
                        <Heading className="font-open font-extrabold text-[72px] text-menuTextColor mb-[40px]" text="We Are Digital #Marketing# Agency" as="h1"/>
                        <Heading className="font-papri font-regular text-[20px] text-paraTextColor leading-9 pr-[220px] mb-[30px]" text="Use customer data to build great and solid product experiences that convert. Digital marketing's development has changed the way brands and businesses use technology for marketing." as="p"/>
                        <Button design="px-[30px] py-[15px] rounded-full border border-solid-buttonHover font-open font-semibold text-[18px] text-menuTextColor hover:bg-buttonHover hover:text-white" text="Get Free Quoto"/>
                    </div>
                    <div className="w-[30%] relative">
                        <Flex>
                            <div className="absolute translate-x-[50%]">
                                <Image src={Right}/>
                            </div>
                            <div className="absolute translate-x-[35%] translate-y-[25%]">
                                <Image src={Card1}/>
                            </div>
                            <div className="absolute translate-x-[-25%] translate-y-[85%]">
                                <Image src={Card1}/>
                            </div>
                        </Flex>
                    </div>
                </Flex>
           </div>
        </Container>
    </section>
  )
}

export default Banner

// transform translate?
