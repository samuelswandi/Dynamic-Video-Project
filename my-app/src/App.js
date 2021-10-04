import './App.css';
import VideoPlayer from './videoPlayer';

const App = () => {
  return (
    <div className="App">
      <div className="choiceButton">
        <button className="button1">
          Mie Kuah
        </button>
        <button className="button2">
          Mie Goreng
        </button>
      </div>
        <VideoPlayer />
    </div>
  );
}

export default App;
