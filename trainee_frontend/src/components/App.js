import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import NotePages from "../pages/NotePages";

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <ui>
        <li>
          <Link to ="/">Home</Link>
        </li>

        <li>
          <Link to ="/login">Login</Link>
        </li>
      </ui>
      <Routes> 
        <Route index element={ <NotePages />} />
        <Route path = "/login" element={<LoginPage/>} />

      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
