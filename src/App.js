import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Reports from './components/Reports';
import CreateReport from './components/CreateReport';
import NoMatch from './components/NoMatch';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/createreport' element={<CreateReport />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div >
  );
}

export default App;
