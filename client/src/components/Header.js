import React from 'react';
import myImage from '../imgs/profile.JPG';

const Header = () => {
    return (
        <div style={styles.header}>
            {/* Logo on the left */}
            <div style={styles.logo}>
                <img
                src="https://via.placeholder.com/61x75"
                alt="Logo"
                />
            </div>
            {/* Profile picture on the right */}
            <img
                src={myImage}
                alt="Profile"
                style={styles.profilePic}
            />
        </div>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        //padding: '10px',
        backgroundColor: '#2E4662',
        color: 'white',
        position: 'relative',
        width: '100%',
        height: '11vh',
    },
    logo: {
        margin: '20px',
        width: '61px',
        height: '75px',
    },
    searchBar: {
        width: '55%',
        padding: '10px',
        marginLeft: '11vh',
        borderRadius: '14px',
        border: 'none',
        fontSize: '16px',
        height: '4vh',
    },
    logoutButton: {
        backgroundColor: '#98C9EB',
        borderRadius: '10px',
        marginRight: '-15vh', // Fix this
        border: 'none',
        padding: '10px 15px',
        fontSize: '14px',
        cursor: 'not-allowed', // Inactive state
        color: '#0F4D7A',
    },
    profilePic: {
        width: '57px',
        height: '57px',
        margin: '20px',
        borderRadius: '50%',
        border: '3px solid #B4D0FF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
};

export default Header;
