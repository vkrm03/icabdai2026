import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImportantDates from './components/ImportantDates';
import Speakers from './components/Speakers';
import Committee from './components/Committee';
import Registration from './components/Registration';
import Venue from './components/Venue';
import Publications from "./components/Publications";
import Sponsors from './components/Sponser';
import Footer from './components/Footer';
import Themes from './components/Themes';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Themes/>
      <ImportantDates />
      <Speakers />
      <Sponsors />
      <Committee />
      <Registration />
      <Publications />
      <Venue />
      <Footer />
    </>
  );
}