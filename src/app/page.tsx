import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroTerminalOverlay from "@/components/HeroTerminalOverlay";
import UserPrograms from "@/components/ui/UserPrograms";

const HomePage = () => {
  return (
    <div className="flex flex-col   min-h-screen   text-foreground   ">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* Corner Decoration */}
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2 "></div>
            {/* Left side  */}
            <div className="lg:col-span-7 space-y-8 relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold   tracking-tight">
                <span className=" block text-white">Fitwise</span>

                <span className="block text-primary">
                  Personalized workouts
                </span>
                <span className="  text-white">Smarter results</span>
                <span className="block text-primary  ">Your fitness,</span>
                <span className="block text-white  ">Your way</span>
              </h1>
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary"></div>
              <p className="text-xl text-muted-foreground w-2/3">
                Unlock your potential with Fitwise: adaptive workouts, progress
                insights, and a fitness journey that fits your lifestyle. Start
                training smarter, not harder.
              </p>
              <div className="flex items-center gap-10 py-6 font-mono">
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">5</div>
                  <div className="text-xs uppercase tracking-wider">
                    ACTIVE USERS
                  </div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">3min</div>
                  <div className="text-xs uppercase tracking-wider">
                    GENERATION
                  </div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary">100%</div>
                  <div className="text-xs uppercase tracking-wider">
                    PERSONALIZED
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
                >
                  <Link
                    href={"/generate-program"}
                    className="flex items-center font-mono"
                  >
                    Build Your Program
                    <ArrowRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>
            {/* Right side  */}
            <div className="lg:col-span-5 relative">
              {/* CORNER PIECES */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
              </div>

              {/* IMAGE CONTANINER */}
              <div className="relative aspect-square max-w-lg mx-auto">
                <Image
                  src="/hero.jpg"
                  alt="AI Fitness Coach"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* DECORATIONS ON TOP THE IMAGE */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full" />

                  <div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50" />
                  <div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50" />
                  <div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50" />
                  <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <HeroTerminalOverlay />
            </div>
          </div>
        </div>
      </section>
      <UserPrograms />
    </div>
  );
};

export default HomePage;
