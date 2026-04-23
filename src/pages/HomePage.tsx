import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact"


function HomePage(){
    return (
        <main>
            <Hero />
            <About />
            
            <Contact/>
        </main>
    )
}

export default HomePage;