import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import Introduction from "@/components/Introduction/Introduction";
import ProjectsAndWork from "@/components/ProjectsAndWork/ProjectsAndWork";

export default function Home() {
  return (
    <>
      <Introduction />
      <AboutMe />
      <ProjectsAndWork />
      <Contact />
    </>
  )
}
