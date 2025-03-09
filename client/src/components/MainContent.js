import {Route, Routes, useLocation} from 'react-router-dom';
//import InventoryPage from "./pages/InventoryPage";
import AddItemPage from "./pages/AddItemPage";
//import CollectionsPage from "./pages/CollectionsPage";
//import SettingsPage from "./pages/SettingsPage";
//import SideMenu from "./SideMenu"
import React, {useEffect } from 'react';

function MainContent() {
  const location = useLocation();
  
  useEffect(() => {
  }, [location.pathname]);
    return (
        <div className="main-content" style={styles.mainContent}>
            <div style={styles.content}>
                <Routes>
                    
                    <Route path="/add-item" element={<AddItemPage/>} />
                   
                </Routes>
            </div>
        </div>
    );
};

const styles = {
    mainContent: {
        justifyContent: 'center',
        alignItems: 'center',  
        display: 'flex',
        width: '100vw',
        height: '100%'
    },
    sideMenu: {
        width: '17%',
        height: '86vh' // // 100 - 11 (header) - 3 (padding) !!!!! from the SideMenu
    },
    content: {
        width: '85%',
        height: '89vh' // 100 - header (11)
    },
}

export default MainContent;






