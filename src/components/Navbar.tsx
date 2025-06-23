
 "use client"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"
import { LucideHome, UserIcon  , LucideSparkles} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
 

 

const Navbar = () => {
 const {isSignedIn} = useUser()
  return (
    <header className="fixed top-0 left-0  right-0 bg-background/60 backdrop-blur-md  border-b py-3 z-50">
      <div className="container mx-auto flex items-center justify-between">
       {/* Logo */}
        <Link href="/">
          <span className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-wide"  >
              Fitwise
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-5">
          {isSignedIn ? (<>
            <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors  ">
              <LucideHome size={16} />
              Home
            </Link>
            <Link href="/generate-program" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <LucideSparkles size={16}   />
              Generate
            </Link>   
            <Link href="/profile" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <UserIcon  size={16} />
              Profile
            </Link>   
            <Button asChild variant="outline" className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10">
              <Link href="/logout" className="text-sm font-medium">
                Get Started
              </Link>
            </Button>
            <UserButton/>
          </>) : (<>
            <SignInButton>
              <Button variant="outline" className="border-primary/50 text-primary hover:text-white hover:bg-primary/10">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="default" className="border-primary/50    bg-primary  text-black  hover:text-white   hover:bg-primary/10">
                Sign Up
              </Button>
              </SignUpButton>
            </>
           ) }
        </nav>

      </div>
    </header>
  )
}

export default Navbar