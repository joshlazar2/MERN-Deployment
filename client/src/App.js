import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Nav from './components/Nav';
import Display from './components/Display';
import CreatePet from './components/CreatePet';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/createPet/form' element={<CreatePet />} />
        <Route path='/onePet/:id' element={<OnePet />} />
        <Route path='/editPet/:id' element={<EditPet />}/>
      </Routes>
    </div>
  );
}

export default App;
