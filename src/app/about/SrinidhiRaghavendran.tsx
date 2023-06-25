import Card, { Tag } from "./Card"
import srinidhiRaghavendran from 'public/srinidhi_raghavendran.jpg'

const SrinidhiRaghavendranCard = () => (
  <Card
    name="Sri"
    subtitle="Co-Founder"
    avatar={srinidhiRaghavendran}
    tags={[Tag.RetiredInstructor, Tag.APCSA, Tag.Python]}
  >
    Sri is a second - year at UC Berkeley studying computer science.He enjoys math, computer science, cricket and basketball.He has taken multiple computer science courses at local community colleges and is highly proficient in Java, HTML, CSS and Python.Sri takes pleasure in giving back to his community and his parent’s home country.
  </Card >
)

export default SrinidhiRaghavendranCard
