import Card, { Tag } from "./Card"
import johnnyWang from 'public/johnny_wang.jpg'

const JohnnyWangCard = () => (
  <Card
    name="Johnny"
    subtitle="Instructor"
    avatar={johnnyWang}
    tags={[Tag.CurrentInstructor, Tag.Robotics]}
  >
    Johnny is a sophomore at Valley Christian High School that likes programming, robotics, and football. He has 2 years of  programming experience and 3 years of robotics experience. Johnny is currently the programming mentor for 2 middle school robotics teams and seeks to pass on his programming knowledge.
  </Card>
)

export default JohnnyWangCard
