import Card, { Tag } from "./Card"
import ojusGarg from 'public/ojus_garg.jpg'

const OjusGargCard = () => (
  <Card
    name="Ojus"
    subtitle="Co-Founder"
    avatar={ojusGarg}
    tags={[Tag.RetiredInstructor, Tag.APCSA]}
  >
    Ojus is a third-year at UC Berkeley studying computer science. He is a STEM-oriented student who has passions in computer science, math, and finance. Ojus loves to give back to his community and help underprivileged kids around the world.
  </Card>
)

export default OjusGargCard
