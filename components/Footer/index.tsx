"use client"
import Image from "next/image"
import Logo from "../../app/statics/dmv-logo.png"
import Link from "next/link"
export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="w-full flex items-center flex-col">
        {/* <div className="w-full flex items-center justify-around bg-orange-700">
          <Link href="/">
            <Image
              className="h-auto max-w-xs bg-orange-700"
              width={250}
              src={Logo}
              alt="logo"
            />
          </Link>
          <div>
            <span>Footer</span>
          </div>
        </div> */}
        <div className="flex w-full justify-center  bg-orange-800">
          <span className="text-center font-light text-sm">
            Copyright © 2023 - Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  )
}
