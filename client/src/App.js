
import './style/app.style.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from './components/Container';
import UserContext from './context/UserContext';

function App() {
  const is = true;
  return (
    <div className="App">
      <UserContext>
        <Router>
          {is ? <Container /> : <div>Asambler</div>}
        </Router>
      </UserContext>
    </div>
  );
}

export default App;
