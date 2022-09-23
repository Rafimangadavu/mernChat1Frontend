import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {AppContext, socket} from './context/appContext'

function App() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMembersMsg, setPrivateMembersMsg]=useState({});
  const [newMessages, setNewMessages]=useState({});

  const user = useSelector((state) => state.user);
  return (
    <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom,
     members, setMembers, messages, setMessages, privateMembersMsg,
      setPrivateMembersMsg, rooms, setRooms, newMessages, setNewMessages}}>
  <BrowserRouter>
  <Navigation />
  <Routes>
    <Route path="/" element={<Home />} />
    {!user && (
      <>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    </>
    )}
    <Route path="/chat" element={<Chat />} />
  </Routes>
  </BrowserRouter>
  </AppContext.Provider>
  )
}

export default App;
