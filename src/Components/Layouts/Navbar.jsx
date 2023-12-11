import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import List from '../List'
import Button from '../Button'

const Navbar = () => {
  return (
    
    <nav>
        <Container>
            <Flex>
                <div className="w-[15%] py-[20px]">
                    <Image src={Logo}/>
                </div>

                <div className="w-[70%] py-[20px] my-auto">
                    <ul>
                        <Flex className="justify-evenly">
                            <List className="font-open font-semibold text-[18px] text-menuTextColor" href="#" text="Home"/>
                            <List className="font-open font-semibold text-[18px] text-menuTextColor" href="#" text="About"/>
                            <List className="font-open font-semibold text-[18px] text-menuTextColor" href="#" text="Service"/>
                            <List className="font-open font-semibold text-[18px] text-menuTextColor" href="#" text="Portfolio"/>
                            <List className="font-open font-semibold text-[18px] text-menuTextColor" href="#" text="Price"/>
                            <List className="font-open font-semibold text-[18px] text-menuTextColor" href="#" text="Blog"/>
                        </Flex>
                    </ul>
                </div>

                <div className="w-[15%] py-[20px]">
                    <Button design="px-[30px] py-[15px] rounded-full border border-solid-buttonHover font-open font-semibold text-[18px] text-menuTextColor hover:bg-buttonHover hover:text-white" text="Contact Us"/>
                </div>
            </Flex>
        </Container>
    </nav>

  )
}

export default Navbar