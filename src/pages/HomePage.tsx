import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact"
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";

function HomePage(){
    return (
        <main>
            <Hero />
            <About />
            <Skills/>
            <Projects/>
            <Contact/>
        </main>
    )
}

export default HomePage;