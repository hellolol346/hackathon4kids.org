import Image from 'next/image'
import people from 'public/people.svg'
import Balancer from 'react-wrap-balancer'
import EricLanCard from './EricLan'
import KartikBaluCard from './KartikBalu'
import ChrisWangCard from './ChrisWang'
import JohnnyWangCard from './JohnnyWang'
import VictorJiangCard from './VictorJiang'
import MichaelLanCard from './MichaelLan'
import EganWangCard from './EganWang'
import BenManCard from './BenMan'
import SrinidhiRaghavendranCard from './SrinidhiRaghavendran'
import OjusGargCard from './OjusGarg'
import RohanGulatiCard from './RohanGulati'

const About = () => {
  return (
    <main className="mx-5 md:mx-24 mt-10 text-blue-950">
      <section className="mb-6">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">About Us!</h1>
            <Balancer>
              Hackathon4Kids was founded in 2018 by two high-school students wanting to help
              students in their community by teaching programming. Now not only has that initial team has grown in size,
              but Hackathon4Kids has also grown by leaps and bounds, both in terms of outreach and offerings.
              This is a labor of love, built and run by students
              who are driven to create a <span>powerful impact</span> in their local community and beyond.
            </Balancer>
          </div>
          <Image
            src={people}
            alt=""
            className="w-full md:w-[40vw]"
          />
        </div>
      </section>
      <section id="instructors">
        <h1 className="text-3xl font-semibold">Our Instructors</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 mt-3">
          <JohnnyWangCard />
          <KartikBaluCard />
          <VictorJiangCard />
          <ChrisWangCard />
          <EricLanCard />
          <MichaelLanCard />
          {/* NOTE: Commenting out <EganWangCard /> to make an even 12 for the grid */}
          {/* <EganWangCard /> */}
          <BenManCard />
          <RohanGulatiCard />
          <SrinidhiRaghavendranCard />
          <OjusGargCard />
        </div>
      </section>
    </main>
  )
}

export default About
