import './styles/App.css';
import Header from './components/Header'
import Main from './components/Main'
import React from 'react'

function App() {

  const [currentScore, setCurrentScore] = React.useState(0);
  const [highestScore, setHighestScore] = React.useState(0);


  function incrementCurrentScore() {
    setCurrentScore(prev => prev + 1);
  }  

  function incrementHighestScore() {
    setHighestScore(prev => prev + 1);
  }  

  function updateCurrentScore(newScore) {
    setCurrentScore(newScore);
  }  

  function updateHighestScore(newScore) {
    setHighestScore(newScore);
  }  



  return (
    <div className="App">
      <Header 
        currentScore={currentScore}
        highestScore={highestScore}
      />
      <Main 
          currentScore={currentScore}
          highestScore={highestScore}
          incrementCurrentScore={incrementCurrentScore}
          incrementHighestScore={incrementHighestScore}
          updateHighestScore={updateHighestScore}
          updateCurrentScore={updateCurrentScore}
      />
    </div>
  );
}

export default App;
