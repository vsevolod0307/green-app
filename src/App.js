import './App.css';
import Chat from './components/Chat/chat';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import Auth from './components/Auth/auth';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Navigate to="/auth" replace={true}/>}/>
          <Route 
            path='/auth'
            element={<Auth/>}/>
          <Route 
            path='/home' 
            element={<Header/>}/>
          <Route 
            path='/chat' 
            element={
              <div className='whatsapp'>
                <Sidebar/>
                <Chat/>
              </div>
            }/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
