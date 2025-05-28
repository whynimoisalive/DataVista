import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Nav() {
  const navButtonClassName =
    "text-slate-300 hover:text-slate-100 hover:bg-slate-700/70 focus-visible:bg-slate-700/70 focus-visible:text-slate-100 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors duration-150"

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-neutral-800/50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <RocketIcon className="h-6 w-6 text-purple-600 group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-300" />
          <span className="font-bold text-xl text-slate-100">
            DataVista 2025
          </span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className={navButtonClassName}>
              Home
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className={navButtonClassName}>
                Rounds
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="https://shorturl.at/3Foo5" target="_blank">
                  Round 1
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://forms.gle/Wx4SxTFbbKZhATbG8" target="_blank">
                  Round 2
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/timeline">
            <Button variant="ghost" size="sm" className={navButtonClassName}>
              Timeline
            </Button>
          </Link>
          <Link href="/resources">
            <Button variant="ghost" size="sm" className={navButtonClassName}>
              Resources
            </Button>
          </Link>
          <Link href="/grading">
            <Button variant="ghost" size="sm" className={navButtonClassName}>
              Grading
            </Button>
          </Link>

          <Link href="https://forms.gle/Wx4SxTFbbKZhATbG8" target="_blank">
            <Button
              size="sm"
              className="bg-purple-600 hover:bg-purple-500 text-slate-50 font-semibold shadow-md hover:shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}