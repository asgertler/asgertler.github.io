import { NavBar } from './components/NavBar'
import { Welcome } from './components/Welcome'
import { Footer } from './components/Footer'
import './App.scss';

function App() {
  return (
    <div className="app">
      <NavBar />

      <Welcome />

      <Footer />
    </div>
  );
}

export default App;
