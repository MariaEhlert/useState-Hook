import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Greetings } from './Components/Pages/Greetings/Greetings';
import { Header } from './Components/Partials/Header/Header'
import { Counting } from './Components/Pages/Counting/Counting';
import { Form } from './Components/Pages/Form/Form'


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Greetings />}/>
          <Route path="/counting" element={<Counting/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
