import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import girlWorkplace from 'public/girl-workplace.svg'
import { CaretRightIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-24 md:ml-20 pt-[14vh]">
      <div className="flex md:flex-row flex-col-reverse justify-between items-center">
        <div className="mb-10">
          <h1 className="text-3xl mt-5 md:mt-0 md:text-6xl font-bold mb-4 text-blue-950">
            <Balancer>
              Hack a
              {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                brighter
              </span>
              {' '}
              future
              with Hackathon4Kids.
            </Balancer>
          </h1>
          <p className="text-gray-600 text-xl mb-8">
            <Balancer>
              We help younger kids build strong computer science fundamentals through free
              face-to-face classes and virtual classes. All donations go towards assisting
              underprivileged children.
            </Balancer>
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <a href="https://forms.gle/ou5o62fdUXCHUzxA8" target="_blank" className="px-4 py-2 bg-blue-700 text-white rounded-lg">Join our mailing list!</a>
            <Link href="/about#instructors" className="px-4 py-2 bg-gray-100 rounded-lg">See our team <CaretRightIcon className="inline-block -translate-y-0.5" /></Link>
          </div>
        </div>
        <Image
          src={girlWorkplace}
          alt="Clipart of girl working"
          className="w-full md:w-[40vw]"
        />
      </div>
    </main>
  )
}
