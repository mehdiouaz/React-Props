
import './App.css';
import Profile from './profile/Profile';
import Development from './Development.jpg'

function App() {
  const name = "mehdi"
  const last = "ouaz"
  const age = 28
  const bio = "gamer"
  const profession = "developer"
  const alertme = () =>{alert("mehdi")}
  return (
    <div className="App">
      <Profile className="back" n={name} l={last} a={age} b={bio} p={profession} alert={alertme}>
        <img className="pic" src= {Development} alt ="pic"></img>
      </Profile>
    </div>
  );
}

export default App;
