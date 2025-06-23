 
const HomePage = () => {
  return (
    <div className="flex flex-col   min-h-screen   text-foreground   "> 
    <section className="relative z-10 py-24 flex-grow">
     <div className="container mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
       {/* Corner Decoration */}
      <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2 "></div>
       {/* Left side  */}
        <div className="lg:col-span-8 space-y-8 relative">
          
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold   tracking-tight">
              
             <span className=" block text-white">Fitwise</span>
      
            <span className="block text-primary">
              Personalized workouts
            </span>
            <span className="  text-white">
             Smarter results
            </span>
            <span className="block text-primary  ">
              Your fitness, 
            </span>
            <span className="block text-white  ">
              Your way
            </span> 
             </h1>
           
        </div>


      </div>
      </div> 
    </section>
     
    </div>
  )
}

export default HomePage