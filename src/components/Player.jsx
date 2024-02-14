import { useState } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const [playerName, setPlayerName] = useState(false);

  const handleSetName = e => {
    setEnteredPlayerName(e.target.value);
  };

  const handleName = () => {
    setPlayerName(true);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input onChange={handleSetName} type="text" value={enteredPlayerName} />
        <button onClick={handleName}>Set Name</button>
      </p>
    </section>
  );
}
