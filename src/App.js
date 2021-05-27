import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <NavBar /> */}
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      
    </div>
    </Router>
  );
}

export default App;
