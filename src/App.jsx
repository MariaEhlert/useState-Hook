import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Greetings } from './Components/Pages/Greetings/Greetings';
import { Header } from './Components/Partials/Header/Header'
import { Counting } from './Components/Pages/Counting/Counting';
import { Form } from './Components/Pages/Form/Form'
import { Timer } from './Components/Pages/Timer/Timer'
import { GoalList } from './Components/Pages/Goals/GoalList';
import { GoalDetalis } from './Components/Pages/Goals/GoalDetails';


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Greetings />}/>
          <Route path="/counting" element={<Counting/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/timer" element={<Timer/>}/>
          <Route path="/goals" element={<GoalList/>}/>
          <Route path="/goals/:goalId" element={<GoalDetalis/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
