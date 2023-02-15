import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Random from './pages/Random';
import Random2 from './pages/Random2';

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
          <Route path="/random2/:parameters" element={
            <ProtectedRoute>
              <Random2/>
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
    return <>{children}</>;
  } else {
    let uricomp= encodeURIComponent(window.location.pathname);
    return <Navigate to={`/login?navigate=${uricomp}`}/>;
  }
}