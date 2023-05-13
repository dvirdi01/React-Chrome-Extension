import './style.css';
import React, {useState, useEffect } from 'react';
import axios from 'axios';

function FileUploadButton() {

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [uploadedFile, setUploadedFile] = useState({});

    const changeHandler = (event) => {
        console.log(event.target.files[0]); //works till here

		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);

        //calling submit file function now 
        console.log("submitting file now");  //fine till here 
        submitFile(); 
	};

    useEffect(() => {
        console.log(selectedFile); // Log the updated value of selectedFile
        if (selectedFile) {
            submitFile();
        }
    }, [selectedFile]);

    const submitFile = async e => {
        console.log("Starting process of sending file");  //fine till here 

        const formData = new FormData();
        console.log(formData); 

        console.log(selectedFile);
        
        formData.append('file', selectedFile); 
        console.log(formData); 

        try {
            const res = await axios.post('/uploads', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const {fileName, filePath } = res.data;  
            setUploadedFile({fileName, filePath}); 

        } catch(err) {
            if (err.response.status ===500) {
                console.log("There is a problem with the server")
            } else {
                console.log(err.response.data.msg);
            }

        }
    }

    return (
        <>
        <input className = "navbutton" type = "file" id = "document-button" onChange={changeHandler}/>
        {isFilePicked ? (
                <span id = "file_chosen">{selectedFile.name}</span>
			) : (
				<span id = "file_chosen">No file Chosen</span>
			)}
        <label htmlFor  = "document-button"> <i className ="fa-solid fa-cloud-arrow-up"></i></label>
        </>

    )
}

export default FileUploadButton; 