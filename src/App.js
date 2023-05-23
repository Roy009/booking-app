import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/home/Home';
import Lists from './pages/lists/Lists';
import Hotel from './pages/hotel/Hotel';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<Lists/>}></Route>
        <Route path='/hotels/:id' element={<Hotel/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
