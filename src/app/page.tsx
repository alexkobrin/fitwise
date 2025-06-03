import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return (
    <div className='text-4xl font-bold text-center mt-20'> 
    <SignInButton />
    </div>
  )
}

export default HomePage