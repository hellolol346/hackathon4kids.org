import Card, { Tag } from "./Card"
import eganWang from 'public/egan_wang.jpg'

const EganWangCard = () => (
  <Card
    name="Egan"
    subtitle="Co-President"
    avatar={eganWang}
    tags={[Tag.CurrentInstructor, Tag.AMC8]}
  >
    Egan is a first-year in UT Austin's honors engineering program.
    He enjoys writing in his spare time, but also takes
    pleasure in debate. Egan teaches AMC math but has extensive background in other
    subjects as well such as Java and science.
  </Card>
)

export default EganWangCard
