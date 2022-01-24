import './App.scss';
import { BrowserRouter as Router} from 'react-router-dom'
import { Header } from './Components/Partials/Header/Header'
import { AppRouter } from './Components/AppRouter/AppRouter';


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
          <AppRouter />
      </Router>
    </div>
  );
}

export default App;
