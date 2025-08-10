import Card, { Tag } from "./Card"
import kartikbalu from 'public/kartik_balu.jpg'

const KartikBaluCard = () => (
  <Card
    name="Kartik"
    subtitle="Co-President"
    avatar={kartikbalu}
    tags={[Tag.CurrentInstructor, Tag.APCSA]}
  >
    Kartik is a Senior at Cupertino High School. He is interested in Coding,
    Math and Soccer. In his free time, he enjoys hiking and spending time with
    his family. He also enjoys playing soccer with his friends. Being with
    friends is something he always prefers which helps balance his high school
    academic life.
  </Card>
)

export default KartikBaluCard
