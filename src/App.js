import Home from './screans/home';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {



  return (
    <BrowserRouter>
      <div className='contaniner'>
        <h1 id='tiitle'>fitneck</h1>
      </div>
      
      
        <Routes> 
          <Route path='/' element={<Home />} /> 
        </Routes> 
      
    </BrowserRouter>
  );
}

export default App;
