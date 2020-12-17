import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <NavBar />

        <Footer />
      </header>
    </div>
  );
}

export default App;
