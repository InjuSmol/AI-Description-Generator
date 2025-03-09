import { Link} from 'react-router-dom';
import React from 'react';


class SideMenu extends React.Component { 

    render(){
        return (
            <nav style={styles.sideMenu}>
                <ul style={styles.menuList}>
                    <li style={styles.menuItem}><Link to="/inventory" style={styles.link}>Inventory</Link></li>
                    <li style={styles.menuItem}><Link to="/collections" style={styles.link}>Collections</Link></li>
                    <li style={styles.menuItem}><Link to="/add-item" style={styles.link}>Add Item</Link></li>
                    <li style={styles.menuItem}><Link to="/settings" style={styles.link}>Settings</Link></li>
                </ul>
            </nav>
        );
    }
};

const styles = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        //width: '17%',
        //height: '86vh',  // 100 - 11 (header) - 3 (padding) !!!!!
        backgroundColor: '#76ADC3',
        paddingTop: '3vh',
    },
    menuList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%'
    },
    menuItem: {
        width: '83%',
        textAlign: 'center',
        height: '7vh',
        margin: '2%',
        padding: '14px',
        backgroundColor: '#A0E1FF',
        marginBottom: '10px',
        marginTop: '10px',
        borderRadius: '8px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    link: {
        textDecoration: 'none',
        color: '#07608D',
        fontSize: '18px',
        fontFamily: 'Inter',
        fontWeight: '500',
    },
};

export default SideMenu;
