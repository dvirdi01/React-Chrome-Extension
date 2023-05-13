// navbar that displays upload, tag, save, reset buttons 
import './style.css';
import FileUploadButton from './FileUploadButton';
import React, {useState} from 'react';


function Navbar() {

    return (
    <>
    <nav className = "navbar">
        <FileUploadButton></FileUploadButton>
        <button className = "navbutton"><i className ="fa-solid fa-tags"></i></button>
        <button className = "navbutton"><i className ="fa-solid fa-rotate-right"></i></button>
        <button className = "navbutton"><i className ="fa-solid fa-download"></i></button>
    </nav>   
    </>

    )
}

export default Navbar; 
