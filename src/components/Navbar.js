// navbar that displays upload, tag, save, reset buttons 
import './style.css';
import React, {useState} from 'react';


function Navbar() {

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    return (
    <>
    
    <nav className = "navbar">
        <input className = "navbutton" type = "file" id = "document-button" onChange={changeHandler}/>
        {isFilePicked ? (
                <span id = "file_chosen">{selectedFile.name}</span>
			) : (
				<span id = "file_chosen">No file Chosen</span>
			)}
        <label htmlFor  = "document-button"> <i class="fa-solid fa-cloud-arrow-up"></i></label>

        <button className = "navbutton"><i class="fa-solid fa-tags"></i></button>
        <button className = "navbutton"><i class="fa-solid fa-rotate-right"></i></button>
        <button className = "navbutton"><i class="fa-solid fa-download"></i></button>
    </nav> 
        
    </>
    
    )
}

export default Navbar; 
