import React from 'react';
import List from './List';
import Results from './pages/Results';
import routes from './config/routes'
import { render } from 'react-dom';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
const App = () => {
return (         
  <>  
  <div>
          
  <Router>
  <Routes>
       <Route path="/" element={<List />} />
  <Route path="/result" element={<Results />} />
       
          
      </Routes>
  </Router>
 
    


  </div>   
</>
)}
export default App;