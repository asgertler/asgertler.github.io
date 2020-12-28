import { NavBar } from './components/NavBar'
import { Welcome } from './components/Welcome'
import { Tech } from './components/Tech'
import { Footer } from './components/Footer'
import './App.scss';

function App() {
  return (
    <div className="app">
      <NavBar />

      <Welcome />

      <Tech />

      <Footer />
    </div>
  );
}

export default App;
