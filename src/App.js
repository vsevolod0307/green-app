import './App.css';
import Chat from './components/Chat/chat';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import Auth from './components/Auth/auth';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Server from "./service/server";
import { useEffect, useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);
  const server = new Server();

  useEffect(() => {
    setAuth(server.isAuth)
  })
  
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={auth ? <Navigate to="/home"/> : <Navigate to="/auth"/>}/>
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
