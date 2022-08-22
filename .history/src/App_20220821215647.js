import './App.css';
import Particles from "react-tsparticles";

function App() {
  return (
    <div className="App">
      <Particles id="particles-here" init={anInitFunction} options={
        // an config object
      } />
    </div>
  );
}

export default App;
