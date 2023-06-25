import Card, { Tag } from "./Card"
import rohanGulati from 'public/rohan_gulati.jpg'

const RohanGulatiCard = () => (
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
)

export default RohanGulatiCard
