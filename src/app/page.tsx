import WorkExperience from "@/components/Experience/work-experience";
import Introduction from "@/components/introduction";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="gap-y-8 justify-center items-start mx-auto">
      <Introduction />
      <Skills />
      <WorkExperience />
      <Projects />
    </main>

  );
}
