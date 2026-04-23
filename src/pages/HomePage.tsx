import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact"
import { Skills } from "../sections/Skills";

function HomePage(){
    return (
        <main>
            <Hero />
            <About />
            <Skills/>
            <Contact/>
        </main>
    )
}

export default HomePage;