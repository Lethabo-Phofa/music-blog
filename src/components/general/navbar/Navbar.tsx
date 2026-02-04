import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  {url:"/", label:"Home"},
  {url:"/articles", label:"Articles"},
  {url:"/about", label:"About"}
  
]

export default function Navbar() {
  return (
    <nav className="h-18 fixed top-0 left-0 z-50 backdrop-blur-md backdrop-saturate-50 w-full">
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">
        {/* logo */}
        <Logo/>
        {/* navlinks */}
        <ul className="flex items-center gap-4 md:gap-8 text-gray-400 font-semibold">
          {navLinks.map((link) => {
            return (
              <li key={link.url}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
