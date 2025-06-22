
 "use client"
import { useUser } from "@clerk/nextjs"
import { LucideHome } from "lucide-react";
import Link from "next/link";

 

const Navbar = () => {
 const {isSignedIn} = useUser()
  return (
    <header className="fixed top-0 left-0  right-0 bg-background/60 backdrop-blur-md  border-b py-3 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-wide"  >
              Fitwise
            </span>
          </span>
        </Link>

      </div>
    </header>
  )
}

export default Navbar