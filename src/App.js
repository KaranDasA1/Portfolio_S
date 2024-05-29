
import './App.css';
import NavBar from './NavBar.js';
import Typing from './Typing.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Typing
          text={[
            "I am a Programmer",
            "Problem Solver",
            "Web Developer",
          ]}
          typingSpeed={100}
          deletingSpeed={50}
          duration={1000}
        />
      </header>
    </div>
  );
}

export default App;
