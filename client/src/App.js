import React from "react";
//import DescriptionGenerator from "./components/DescriptionGenerator"; // Shouldn't be here
import Header from "./components/Header"
import MainContent from "./components/MainContent"
//import SideMenu from "./components/SideMenu"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app-container" style={styles.appContainter} >
      <Header />
      <div className="main-content-layout" style={styles.mainConentLayout} >
        <Routes>
          <Route path = "/*" element ={<MainContent pathname={window.location.pathname}/>} />
        </Routes>
      </div>
    </div>
    </Router>
  );
};

const styles = {
  appContainter: {
    width: '100hv', 
    height: '15%'
  },
  mainConentLayout: {
    width: '100hv', 
    height: '85%'
  },
}

export default App;

