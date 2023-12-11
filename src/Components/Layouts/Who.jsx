import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Slash from '../../assets/slash.png'
import Wapkiu from '../../assets/wapkiu.png'
import Creone from '../../assets/creone.png'
import Rinfall from '../../assets/rinfall.png'
import Ulabs from '../../assets/ulabs.png'
import Spiders from '../../assets/spiders.png'
import Widegde from '../../assets/widegde.png'
import Card3 from '../../assets/card3.png'
import Card4 from '../../assets/card4.png'
import Dot from '../../assets/dot.png'
import Heading from '../Heading'

const Who = () => {
  return (
   <section>
        <Container>
            <div className="py-[180px]">
                <Flex>
                    <div className="w-[50%] relative">
                        <div className="absolute top-0 right-0 z-10">
                            <Image src={Card3}/>
                        </div>
                        <div className="absolute bottom-[-40%] left-[2%] z-20">
                            <Image src={Card4}/>
                        </div>
                        <div className="absolute bottom-[23%] left-[6%] ">
                            <Image src={Dot}/>
                        </div>
                    </div>

                    <div className="w-[50%] ml-[40px]">
                        <div className="">
                            <Image src={Slash}/>
                        </div>
                        <Heading className="font-open font-extrabold text-[48px] text-menuTextColor mb-[20px]" text="Who We are" as="h1"/>
                        <Heading className="font-papri font-regular text-[18px] text-paraTextColor mr-[120px]" text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified" as="p"/>
                        <div className="">
                            <div className="mt-[30px]">
                                <Flex className="justify-between">
                                    <div className="">
                                        <Image src={Wapkiu}/>
                                    </div>
                                    <div className="">
                                        <Image src={Creone}/>
                                    </div>
                                    <div className="">
                                        <Image src={Rinfall}/>
                                    </div>
                                </Flex>
                            </div>
                            <div className="mt-[20px]">
                                <Flex className="justify-between">
                                    <div className="mr-[40px]">
                                        <Image src={Ulabs}/>
                                    </div>
                                    <div className="">
                                        <Image src={Spiders}/>
                                    </div>
                                    <div className="">
                                        <Image src={Widegde}/>
                                    </div>
                                </Flex>
                            </div>
                        </div>

                    </div>
                </Flex>
            </div>
        </Container>
   </section>

  )
}

export default Who