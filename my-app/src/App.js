import './App.css';

function App() {
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
      <iframe className="videoPlayer" src="Video.mp4" allowfullscreen></iframe>
    </div>
  );
}

export default App;
