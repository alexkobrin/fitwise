import { SignIn } from "@clerk/nextjs"
 
const SignInPage = () => {
  return  <main className="flex h-full w-full items-center justify-center"> 
  
  <div><SignIn/></div>
  
  </main>
  
}

export default SignInPage