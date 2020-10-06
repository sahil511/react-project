import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header style = {headerStyle}>
            <h1>Supreme</h1>
            <Link style = {LinkStlye} to="/">Home</Link> | <Link style = {LinkStlye} to="/about">About</Link>
            <h1 style={todostyle}>Todo list</h1>
        </header>
        
    )
}
const todostyle ={
    backgroundColor: '	#8B0000',
    fontStyle: 'normal',
    textAlign: 'center',
    padding: '5px',
}

const LinkStlye ={
    
    background: '#FF0000',
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'right',
    alignSelf: 'stretch'
    
}

const  headerStyle = {
    background: '#FF0000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontStyle: 'italic'
    

}

export default Header;