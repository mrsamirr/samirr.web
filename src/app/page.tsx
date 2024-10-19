import { HeroButton } from "@/components";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import AnimationContainer from "@/components/ui/AnimationContainer";
import { TheTypewriterEffect } from "@/components/ui/TypeWritingEffect";

export default function Home() {
  return (
    <>
      <div className="min-h-[60vh] sm:min-h-[80vh] md:min-h-screen w-full flex-col relative flex items-center justify-center"
        id="home">
        {/* faded look blocked */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
        <div className="pt-20 select-none">
          <p className="text-4xl sm:text-5xl md:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 from-neutral-600 to-neutral-800 py-2">
            Hi <span className="wave text-black">👋</span>
          </p>
          <AnimationContainer>
          <div className="flex items-center gap-5">
            <span className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white">
              I&apos;m
            </span>
            <p className="my-6 text-4xl sm:text-5xl md:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b dark:from-gray-200 dark:to-blue-500 from-blue-600 to-blue-500 py-2 cursor-pointer">
              Md Samer Ansari
            </p>
          </div>
          </AnimationContainer>
          <TheTypewriterEffect />
          <HeroButton />
        </div>
      </div>
      <Skills />
      <Projects />
    </>

  );
}
