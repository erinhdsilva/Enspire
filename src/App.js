import logo from './logo.svg';
import './App.css';
import video from './video.mp4'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://enspire.netlify.app/enspire-logo.png?imwidth=1080' className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <video autoPlay loop muted className="backgroundvideo" >
          <source src={video} type='video/mp4'></source>
        </video>
      </header>
    </div>
  );
}

export default App;
