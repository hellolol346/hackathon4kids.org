import Image, { StaticImageData } from 'next/image'
import people from 'public/people.svg'
import michaelLan from 'public/michael_lan.jpg'
import ericLan from 'public/eric_lan.jpg'
import srinidhiRaghavendran from 'public/srinidhi_raghavendran.jpg'
import ojusGarg from 'public/ojus_garg.jpg'
import benjaminMann from 'public/benjamin_mann.jpg'
import rohanGulati from 'public/rohan_gulati.jpg'
import Balancer from 'react-wrap-balancer'

enum Tag {
  Python,
  AMC10,
  GitGitHub,
  APCSA,
  CurrentInstructor,
  RetiredInstructor,
  GameDev,
}

const tagInfo = (tag: Tag) => {
  switch (tag) {
    case Tag.CurrentInstructor:
      return ['bg-amber-500', '💪 current team']
    case Tag.RetiredInstructor:
      return ['bg-stone-400', '🎓 retired']
    case Tag.Python:
      return ['bg-lime-500', '🐍 Python']
    case Tag.GameDev:
      return ['bg-violet-600', '👾 Game Development']
    case Tag.AMC10:
      return ['bg-orange-500', '✏️ AMC 10']
    case Tag.GitGitHub:
      return ['bg-indigo-500', '🕊️ Git + GitHub']
    case Tag.APCSA:
      return ['bg-red-400', '☕ AP CSA']
  }
}

interface CardProps {
  name: string;
  subtitle: string;
  avatar: StaticImageData;
  children: React.ReactNode;
  tags: Tag[];
}

const Card = ({ name, children, avatar, tags, subtitle }: CardProps) => {
  return (
    <div className="rounded-lg p-5 w-full border border-gray-200">
      <div className="flex flex-row items-center gap-4 mb-4">
        <Image
          src={avatar}
          alt={`Image of ${name}`}
          className="w-20 rounded-3xl"
        />
        <div>
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
      <p>{children}</p>
      <hr className="mt-3 mb-4" />
      <div className="flex flex-row flex-wrap gap-2">
        {
          tags.map((tag) => {
            const [color, text] = tagInfo(tag)
            return (
              <span key={tag} className={`rounded-md px-2 py-0.5 text-sm text-white ${color}`}>{text}</span>
            )
          })
        }
      </div>
    </div>
  )
}

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
          <Card
            name="Michael"
            subtitle="Advisor, Instructor"
            avatar={michaelLan}
            tags={[Tag.CurrentInstructor, Tag.Python, Tag.GitGitHub, Tag.APCSA]}
          >
            Michael is a second-year at UCLA majoring in computer science and minoring in philosophy. His research interests include functional programming, programming language design, and compilers.
            He also love software engineering and has 2+ years of experience in full-stack software development and DevOps using modern technologies.
          </Card>
          <Card
            name="Eric"
            subtitle="Lead Instructor"
            avatar={ericLan}
            tags={[Tag.CurrentInstructor, Tag.APCSA]}
          >
            Eric is a junior at Irvington High School. He is interested in scripting, modeling, and graphic design. In his free time, Eric enjoys hiking, gaming, photography, and pondering life&apos;s big questions.
          </Card>
          <Card
            name="Sri"
            subtitle="Co-Founder"
            avatar={srinidhiRaghavendran}
            tags={[Tag.RetiredInstructor, Tag.APCSA, Tag.Python]}
          >
            Sri is a second-year at UC Berkeley. He enjoys math, computer science, cricket and basketball. He has taken multiple computer science courses at local community colleges and is highly proficient in Java, HTML, CSS and Python. Sri takes pleasure in giving back to his community and his parent’s home country.
          </Card>
          <Card
            name="Ojus"
            subtitle="Co-Founder"
            avatar={ojusGarg}
            tags={[Tag.RetiredInstructor, Tag.APCSA]}
          >
            Ojus is a second-year at UC Berkeley. He is a STEM-oriented student who has passions in computer science, math, and finance. Ojus loves to give back to his community and help underprivileged kids around the world.
          </Card>
          <Card
            name="Ben"
            subtitle="Co-President"
            avatar={benjaminMann}
            tags={[Tag.RetiredInstructor, Tag.GameDev]}
          >
            Ben is a programmer and creative coder. He enjoys developing web apps and games, and has been
            learning programming for 4+ years. He&apos;s experienced in Javascript, Python, C#, and Java.
            In his free time he like playing badminton and experimenting with things on his computer
            like digital art, music production, photo manipulation, Android development, along with many other things.
          </Card>
          <Card
            name="Rohan"
            subtitle="Advisor"
            avatar={rohanGulati}
            tags={[Tag.RetiredInstructor, Tag.APCSA]}
          >
            Rohan is a second-year at UC Berkeley. His passions include computer science,
            physics, machine learning, and sustainability. He enjoys engaging in research and staying
            involved in his community either through service or education. He has taught a variety of
            topics from pure math to robot automation. As a teacher, his primary goal is to play a role
            in helping someone discover their own spark or passion.
          </Card>
        </div>
      </section>
    </main>
  )
}

export default About
