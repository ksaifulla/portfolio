import About from "@/components/About";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="mx-auto max-w-[692px] px-6 py-14 font-sans">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Education />
      </main>
    </div>
  );
}
