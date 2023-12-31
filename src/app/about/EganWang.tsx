import Card, { Tag } from "./Card"
import eganWang from 'public/egan_wang.jpg'

const EganWangCard = () => (
  <Card
    name="Egan"
    subtitle="Advisor"
    avatar={eganWang}
    tags={[Tag.AMC8, Tag.RetiredInstructor]}
  >
    Egan is a first-year in UT Austin&apos;s honors engineering program.
    He enjoys writing in his spare time, but also takes
    pleasure in debate. Egan teaches AMC math but has extensive background in other
    subjects as well such as Java and science.
  </Card>
)

export default EganWangCard
