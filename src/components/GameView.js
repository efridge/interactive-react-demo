import { List, ListItem } from "./List.js";
import Detail from "./Detail.js";
import React, { useState } from "react";

// Import the data

export default function GameView(props) {
  const games = props.games;

  // Declare a new state variable, which we'll call "game"
  // Initialize to an empty object
  const [game, setGame] = useState({});

  const gameSelected = (id) => {
    // Find the game data based on the id
    const gameData = games.find( g => g.id === id);
    
    // Store the selected game data
    setGame(gameData);
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-md-3">
          {/* A JSX comment */}
          <List items={games} selectItem={gameSelected} />
        </div>
        <div className="col-12 col-md-9">
          <Detail game={game}/>
        </div>
      </div>
    </div>
  );
}
