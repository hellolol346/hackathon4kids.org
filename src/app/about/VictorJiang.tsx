import Card, { Tag } from "./Card"
import victorJiang from 'public/victor_jiang.jpg'

const VictorJiangCard = () => (
  <Card
    name="Victor"
    subtitle="Vice President, Instructor"
    avatar={victorJiang}
    tags={[Tag.CurrentInstructor, Tag.IntroToAlgebra]}
  >
    Victor is a sophomore at Stratford Preparatory Blackford. He enjoys taekwondo and robotics, and has been coding since 6th grade. He has worked with Java, JavaScript, Python and C++.
  </Card>
)

export default VictorJiangCard
