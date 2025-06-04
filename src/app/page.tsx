'use client'

import { SignedOut,  SignInButton, SignOutButton } from "@clerk/clerk-react"
import { SignedIn } from "@clerk/nextjs"
 
const HomePage = () => {
  return (
    <div className='text-4xl flex  flex-col gap-10 font-bold text-center mt-20  '> 
    
    <div className='text-2xl mt-10'>Welcome to Fitwise</div>
    <div className='text-lg mt-5'>Empower your fitness journey with digital precision.</div>
     
     <SignedIn>
      <SignOutButton/>
     </SignedIn>

     <SignedOut>
      <SignInButton/>
     </SignedOut>
    </div>
  )
}

export default HomePage