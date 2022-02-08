import './App.css';
import Header from './Header.js';
import Room from './Room.js';

export default function App() {
  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      <Room
        text="Küche"
        description="Herdplatten nicht vergessen"
        isDescriptionVisible
        isClean
      />
      <Room
        text="Wohnzimmer"
        description="Staubwischen auch auf dem Fensterbrett"
        isDescriptionVisible
      />
      <Room text="Bad" description="Eigener Lappen für das Klo!" />
    </main>
  );
}
