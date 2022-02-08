import './App.css';
import Header from './Header.js';
import Room from './Room.js';

export default function App() {
  const rooms = [
    {
      text: 'Küche',
      description: 'Herdplatten nicht vergessen',
      isDescriptionVisible: true,
      isClean: false,
    },
    {
      text: 'Wohnzimmer',
      description: 'Staubwischen auch auf dem Fensterbrett',
      isDescriptionVisible: true,
      isClean: true,
    },
    {
      text: 'Bad',
      description: 'Eigener Lappen für das Klo!',
      isDescriptionVisible: false,
      isClean: false,
    },
  ];

  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      {rooms.map(({ text, description, isDescriptionVisible, isClean }) => (
        <Room
          key={text}
          text={text}
          description={description}
          isDescriptionVisible={isDescriptionVisible}
          isClean={isClean}
        />
      ))}
    </main>
  );
}
