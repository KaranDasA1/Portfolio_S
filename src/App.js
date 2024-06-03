import './App.css';
import NavBar from './NavBar.js';
import Typing from './Typing.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <div className="intro-text">
          I am <span className="highlight">Karan Das</span>
        </div>
        <Typing
          text={[
            "A Programmer",
            "Problem Solver",
            "Web Developer",
          ]}
          typingSpeed={100}
          deletingSpeed={50}
        />
      </div>
    </div>
  );
}

export default App;
