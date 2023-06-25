import Card, { Tag } from "./Card"
import michaelLan from 'public/michael_lan.jpg'

const MichaelLanCard = () => (
  <Card
    name="Michael"
    subtitle="Advisor, Instructor"
    avatar={michaelLan}
    tags={[Tag.CurrentInstructor, Tag.GitGitHub, Tag.APCSA]}
  >
    Michael is a second-year at UCLA majoring in computer science and minoring in philosophy. His research interests include functional programming, programming language design, and compilers.
    He also love software engineering and has 2+ years of experience in full-stack software development and DevOps.
  </Card>
)

export default MichaelLanCard
