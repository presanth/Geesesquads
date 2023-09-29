import './App.css';
import Admin from './component/Admin';
import Addtask from './component/Addtask';
import Edittask from './component/Edittask';
import { Route,Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/AddTask' element={<Addtask/>}/>
        <Route path='/EditTask/:id' element={<Edittask/>}/>
      </Routes>
    </div>
  );
}

export default App;
