import './App.css';
import NavBar from './Componets/NavBar';
import Header from './Componets/Header';
import Icons from './Componets/Icons';
import About from './Componets/About';
import Skills from './Componets/Skills';
import Project from './Componets/Project';
import Contact from './Componets/Contact';
import Footer from './Componets/Footer';

function App() {
  return (
    <div className="App container-fluid">
        <NavBar />
        <Header />
        <Icons />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
