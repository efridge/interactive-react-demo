export default function Detail(props) {
  const game = props.game;

  return (
    <div>
      <h1>
        {game.home} vs. {game.opponent}
      </h1>

      <h2>Game Summary</h2>
      <p>
        {game.home} scored {game.home_score} points against {game.opponent}'s{" "}
        {game.opponent_score} points.
      </p>

      {/* This is an inline if statement */}
      <div>
        It was a {game.passing_yards > game.rushing_yards ? 'throwing' : 'running'} game.
        There were {game.passing_yards} passing yards and {game.rushing_yards} in the game.
      </div>

      {/* This is an inline if statement */}
      {game.fumbles > 0 && (
        <div> There were {game.fumbles} fumbles! </div>
      )}

    </div>
  );
}
