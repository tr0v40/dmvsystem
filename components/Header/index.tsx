"use client"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../app/statics/dmv-logo.png"
import ModeToggle from "@/components/toggle-theme"

export const Header = () => {
  return (
    <header className="border-b-[1px] border-b-orange-700">
      <div className="flex w-full justify-between">
        <div>
          <Link href="/">
            <Image
              className="h-auto max-w-xs bg-orange-700"
              width={100}
              src={Logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex justify-end mr-12">
          <nav className="w-full flex items-center justify-between m-auto max-w-screen-xl">
            <ul className="flex items-center gap-10">
              <li>
                <Link href="/customers">Customers</Link>
              </li>
              <li>
                <Link href="/users">Users</Link>
              </li>
              <li>
                <Link href="/">Jobs</Link>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
