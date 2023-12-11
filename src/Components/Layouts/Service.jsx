import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Slash from '../../assets/slash.png'
import Heading from '../Heading'
import Strategy from '../../assets/strategy.png'
import Social from '../../assets/social.png'
import Content from '../../assets/content.png'
import List from '../List'


const Service = () => {
  return (
    <section>
        <Container>
            <Flex className="justify-center">
              <div className="py-[100px]">
                  <div className="ml-[90px]">
                    <Image src={Slash}/>
                  </div>
                    <div className="text-center my-[15px]">
                    <Heading className="font-open font-extrabold text-[48px] text-menuTextColor" text="Our Services" as="h2"/>
                    </div>
                   <div className="text-center">
                    <Heading className="font-papri font-regular text-[18px] text-paraTextColor w-[332px]" text="We have been providing great flooring solutions service." as="p"/>
                   </div>
              </div>
            </Flex>
            <Flex className="justify-between">
              <div className="w-[33%] group">
                <div className="p-[50px] h-[400px] text-center group-hover:bg-strategyHover rounded-xl">
                  <div className="ml-[120px] mb-[30px]">
                    <Image src={Strategy}/>
                  </div>
                  <Heading className="font-open font-semibold text-[30px] text-serviceTextColor mb-[20px]" text="Marketing Strategy " as="h2"/>
                  <Heading className="font-papri font-regular text-[18px] text-paraTextColor" text="Social Media has changed the way we interact & do business while creating" as="p"/>

                  <ul className="font-open font-semibold text-[18px] text-serviceTextColor mt-[20px] z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[85px] after:rounded-full after:-z-10">
                    <List href="#" text="Read More" />
                  </ul>
                </div>
              </div>
              <div className="w-[33%] group">
                  <div className="p-[50px] h-[400px] text-center group-hover:bg-socialHover rounded-xl">
                    <div className="ml-[120px] mb-[30px]">
                        <Image src={Social}/>
                    </div>
                    <Heading className="font-open font-semibold text-[30px] text-serviceTextColor mb-[20px]" text="Social Marketing" as="h2"/>
                    <Heading className="font-papri font-regular text-[18px] text-paraTextColor" text="Social Media has changed the way we interact & do business while creating" as="p"/>

                    <ul className="font-open font-semibold text-[18px] text-serviceTextColor mt-[20px] z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[85px] after:rounded-full after:-z-10">
                      <List href="#" text="Read More" />
                    </ul>
                  </div>
              </div>
              <div className="w-[33%] group">
              <div className="p-[50px] h-[400px] text-center group-hover:bg-contentHover rounded-xl">
                  <div className="ml-[120px] mb-[30px]">
                    <Image src={Content}/>
                  </div>
                  <Heading className="font-open font-semibold text-[30px] text-serviceTextColor mb-[20px]" text="Content Marketing" as="h2"/>
                  <Heading className="font-papri font-regular text-[18px] text-paraTextColor" text="Content Marketing is the other fold of online advertisement. If you are looking to build" as="p"/>

                  <ul className="font-open font-semibold text-[18px] text-serviceTextColor mt-[20px] z-10 relative after:content-[''] after:absolute after:h-[30px] after:w-[30px] after:bg-buttonHover after:top-[-3px] after:left-[85px] after:rounded-full after:-z-10">
                    <List href="#" text="Read More" />
                  </ul>
                </div>
              </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Service