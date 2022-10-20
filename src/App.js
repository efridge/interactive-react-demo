import GameView  from './components/GameView';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data/data';

function App() {
  return (
    <div>
      <Navbar />
      <GameView games={data}/>
    </div>
  );
}

export default App;
