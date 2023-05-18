//Editor that displays files that are uploaded 
import './style.css';
import DocViewer,{DocViewerRenderer} from "react-doc-viewer";

function Editor() {

    const docs = [ 
        { uri: require(`${__dirname}/leditor-app/public/uploads/letter.docx`)}
    ];


    return (

    <>
    <div className = "editor">
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderer}/>
    </div>
    
    </>

    )
}

export default Editor; 