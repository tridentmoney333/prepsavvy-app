import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MentorList from './components/MentorList';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import MentorApplication from './components/MentorApplication';
import Messaging from './components/Messaging';
import AboutFounder from './components/AboutFounder';
import ResourceLibrary from './components/ResourceLibrary';
import ProgressTracker from './components/ProgressTracker';
import SocialSharing from './components/SocialSharing';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <AboutFounder />
        <MentorList />
        <ProgressTracker />
        <ResourceLibrary />
        <Reviews />
        <SocialSharing />
        <MentorApplication />
        <Contact />
        <Messaging />
      </div>
    </div>
  );
}

export default App;