import Card, { Tag } from "./Card"
import benjaminMan from 'public/benjamin_man.jpg'

const BenManCard = () => (
  <Card
    name="Ben"
    subtitle="Co-President"
    avatar={benjaminMan}
    tags={[Tag.RetiredInstructor, Tag.GameDev]}
  >
    Ben is a first-year at UCLA studying computer science and linguistics. He enjoys developing web apps and games, and has been
    learning programming for 4+ years. He&apos;s experienced in Javascript, Python, C#, and Java.
    In his free time he like playing badminton and experimenting with things on his computer
    like digital art, music production, photo manipulation, Android development, along with many other things.
  </Card>
)

export default BenManCard
