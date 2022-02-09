import './App.css';
import Header from './Header.js';
import Room from './Room.js';
import { useState } from 'react';

export default function App() {
  const [rooms, setRooms] = useState([
    {
      text: 'Küche',
      description: 'Herdplatten nicht vergessen',
      isClean: false,
    },
    {
      text: 'Wohnzimmer',
      description: 'Staubwischen auch auf dem Fensterbrett',
      isClean: true,
    },
    {
      text: 'Bad',
      description: 'Eigener Lappen für das Klo!',
      isClean: false,
    },
  ]);

  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      {rooms.map(
        ({ text, description, isDescriptionVisible, isClean }, index) => (
          <Room
            key={text}
            text={text}
            description={description}
            isClean={isClean}
            toggleStatus={event => {
              event.stopPropagation();

              setRooms([
                ...rooms.slice(0, index),
                { ...rooms[index], isClean: !isClean },
                ...rooms.slice(index + 1),
              ]);
            }}
          />
        )
      )}
    </main>
  );
}
