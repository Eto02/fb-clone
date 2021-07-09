import React from 'react'
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user)
  console.log(user)
  return (
      <div className="app">
            {!user?(
              <Login/>
            ):(  
            <>
              <Header/>
              <div className="app__body">
                <Sidebar/>
                <Feed/>
                <Widgets/>
              </div>      
            </>
            )}
            
      </div>
  );
}

export default App
