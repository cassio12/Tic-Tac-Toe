import Board from './components/board';
import './App.css';

function App() {
  return (
    <div className="body">
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    </div>
  );
}

export default App;
