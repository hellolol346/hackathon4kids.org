import Card, { Tag } from "./Card"
import chrisWang from 'public/chris_wang.jpg'

const ChrisWangCard = () => (
  <Card
    name="Chris"
    subtitle="Former Leadership"
    avatar={chrisWang}
    tags={[Tag.RetiredInstructor, Tag.AMC10, Tag.APPhysics1]}
  >
    Chris is a junior at Mission San Jose High School. He is interested in a
    variety of STEM related topics such as mathematics, reading, science, and
    especially astronomy. He enjoys witnessing the wonders of the natural world
    and outer space. Chris is also one who is always willing to help out others
    or the community. During his free time, he likes to hang out with his friends or exercise.
  </Card>
)

export default ChrisWangCard
