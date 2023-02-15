import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Random from './pages/Random';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }/>
          <Route path="/random/:parameters" element={
            <ProtectedRoute>
              <Random/>
            </ProtectedRoute>
          }/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute({ children }) {
  if (localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/login" state={{ fromSpecificPage: true }}/>;
  }
}