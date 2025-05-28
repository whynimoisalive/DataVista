import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"

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