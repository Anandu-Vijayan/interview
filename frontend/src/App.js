import './App.css';
import Form from './components/form/Form';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
     
    <Routes>
     <Route path="/" element={<Form/>}/>
     
    </Routes>
    </Router>
       
      
    </div>
  );
}

export default App;
