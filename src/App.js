import GameView  from './components/GameView';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data/data';

function App() {
  return (
    <GameView games={data}/>
  );
}

export default App;
