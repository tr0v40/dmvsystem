import Link from "next/link"
// import { SignOutButton } from "./sign-out-button"
// import { getServerSession } from 'next-auth'

const Header = async () => {
  // const session = await getServerSession()
  return (
    <header className="fixed w-full h-20 flex items-center bg-orange-700 text-slate-50">
      <nav className="w-full flex items-center justify-between  m-auto max-w-screen-xl">
        <Link href="/">LOGO</Link>
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/customers">customers</Link>
          </li>
          <li>
            <Link href="/users">users</Link>
          </li>
          <li>
            <Link href="/jobs">jobs</Link>
          </li>
          <li>logout</li>
          {/* { session && <li><SignOutButton /></li> } */}
        </ul>
      </nav>
    </header>
  )
}

export { Header }
