import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Works from './components/Works';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PersonalInfo />
      <Projects />
      <Experience />
      <Works />
      <Contacts />
    </>
  );
}

export default App;
