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
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <RocketIcon className="h-6 w-6 text-purple-500" />
          <span className="font-bold text-xl">DataVista 2025</span>
        </Link>
        <div className="flex gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">Home</Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">Rounds</Button>
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
            <Button variant="ghost" size="sm">Timeline</Button>
          </Link>
          <Link href="/resources">
            <Button variant="ghost" size="sm">Resources</Button>
          </Link>


          <Link href="https://forms.gle/Wx4SxTFbbKZhATbG8" target="_blank">
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}