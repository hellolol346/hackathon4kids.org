'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/logo.png'

const Navigation = () => (
  <NavigationMenu.Root className="flex flex-col md:flex-row justify-between px-5 md:px-24 pt-4">
    <NavigationMenu.List className="flex flex-row gap-4 text-lg">
      <NavigationMenu.Item>
        <NavigationMenu.Link asChild>
          <a href="/" className="font-bold text-blue-950">
            <Image
              src={logo}
              alt="Hackathon4Kids logo"
              className="w-8 h-8 inline-block mr-3"
            />
            Hackathon4Kids
          </a>
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator />
    </NavigationMenu.List>

    <NavigationMenu.List className="flex flex-col mt-4 md:mt-0 md:flex-row gap-2 md:gap-8">
      <NavigationMenu.Item>
        <NavigationMenu.Link asChild className="rounded-md px-3 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
          <Link href="/code.org" className="font-semibold">✍️ New: Winter Contest!</Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Link asChild>
          <a href="/about">About Us</a>
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      {/* <NavigationMenu.Item> */}
      {/*   <NavigationMenu.Trigger> */}
      {/*     Past Programs */}
      {/*     <CaretDownIcon aria-hidden className="inline-block ml-1.5 -translate-y-0.5 transition-transform duration-400 group-data-[state=open]:rotate-180" /> */}
      {/*   </NavigationMenu.Trigger> */}
      {/*   <NavigationMenu.Content className="absolute mt-2 rounded-md shadow-md px-5 py-3 w-full left-0"> */}
      {/*     <NavigationMenu.Sub> */}
      {/*       <NavigationMenu.List className="flex flex-col gap-4"> */}
      {/*         <NavigationMenu.Item> */}
      {/*           <NavigationMenu.Link asChild> */}
      {/*             <a href="/about">Summer 2023</a> */}
      {/*           </NavigationMenu.Link> */}
      {/*         </NavigationMenu.Item> */}
      {/*         <NavigationMenu.Item> */}
      {/*           <NavigationMenu.Link asChild> */}
      {/*             <a href="/about">Summer 2021</a> */}
      {/*           </NavigationMenu.Link> */}
      {/*         </NavigationMenu.Item> */}
      {/*         <NavigationMenu.Item> */}
      {/*           <NavigationMenu.Link asChild> */}
      {/*             <a href="/about">Before Summer 2021</a> */}
      {/*           </NavigationMenu.Link> */}
      {/*         </NavigationMenu.Item> */}
      {/*       </NavigationMenu.List> */}
      {/*     </NavigationMenu.Sub> */}
      {/*   </NavigationMenu.Content> */}
      {/*   <NavigationMenu.Viewport /> */}
      {/* </NavigationMenu.Item> */}

      <NavigationMenu.Indicator />
    </NavigationMenu.List>
  </NavigationMenu.Root >
)

export default Navigation
