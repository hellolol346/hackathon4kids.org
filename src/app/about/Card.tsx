import Image, { StaticImageData } from 'next/image'

export const enum Tag {
  Python,
  AMC10,
  AMC8,
  APPhysics1,
  GitGitHub,
  APCSA,
  CurrentInstructor,
  RetiredInstructor,
  GameDev,
  Robotics,
  IntroToPhysics,
  IntroToAlgebra
}

const tagInfo = (tag: Tag) => {
  switch (tag) {
    case Tag.CurrentInstructor:
      return ['bg-amber-500', '💪 current team']
    case Tag.RetiredInstructor:
      return ['bg-stone-400', '🎓 retired']
    case Tag.Python:
      return ['bg-lime-500', '🐍 Python']
    case Tag.GameDev:
      return ['bg-violet-600', '👾 Game Development']
    case Tag.AMC10:
      return ['bg-orange-500', '✏️ AMC 10']
    case Tag.AMC8:
      return ['bg-orange-500', '✏️ AMC 8']
    case Tag.GitGitHub:
      return ['bg-indigo-500', '🕊️ Git + GitHub']
    case Tag.APCSA:
      return ['bg-red-400', '☕ AP CSA']
    case Tag.Robotics:
      return ['bg-fuchsia-400', '🤖 Robotics']
    case Tag.APPhysics1:
      return ['bg-teal-400', '⚙️  AP Physics 1']
  }
}

interface CardProps {
  name: string;
  subtitle: string;
  avatar: StaticImageData;
  children: React.ReactNode;
  tags: Tag[];
}

const Card = ({ name, children, avatar, tags, subtitle }: CardProps) => {
  return (
    <div className="rounded-lg p-5 w-full border border-gray-200">
      <div className="flex flex-row items-center gap-4 mb-4">
        <Image
          src={avatar}
          alt={`Image of ${name}`}
          className="w-20 rounded-3xl"
        />
        <div>
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
      <p>{children}</p>
      <hr className="mt-3 mb-4" />
      <div className="flex flex-row flex-wrap gap-2">
        {
          tags.map((tag) => {
            const [color, text] = tagInfo(tag)
            return (
              <span key={tag} className={`rounded-md px-2 py-0.5 text-sm text-white ${color}`}>{text}</span>
            )
          })
        }
      </div>
    </div>
  )
}

export default Card
