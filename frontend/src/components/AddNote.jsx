import React from "react";
import { useContext } from "react";
import { useState } from "react";
import noteContext from "../context/notes/noteContext";

function AddNote(props){

    const context = useContext(noteContext);
    const {addNote} = context;

    const[note , setNote] = useState({title : "" , description : "" , tag : ""});

    const handleClick = (e) => {
       e.preventDefault();
       addNote(note.title , note.description , note.tag);
       setNote({title : "" , description : "" , tag : "default"});
       props.showAlert("Note Added Successfully" , "success");
    };

    const onChange = (e) => {
       setNote({...note , [e.target.name] : e.target.value})
    };

    return(
        <div className="container my-3"> 
                <h2>Add a Note</h2>

                <form className="my-3">
                    <div className="form-group">

                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" value={note.title} required minLength={5} name="title" aria-describedby="emailHelp" placeholder="Title" onChange={onChange}/>
                        
                    </div>

                    <div className="form-group my-3">

                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" value={note.description} required minLength={5} name="description" placeholder="Description" onChange={onChange}/>

                    </div>

                    <div className="form-group my-3">

                        <label htmlFor="tag">Tag</label>
                        <input type="text" className="form-control" id="tag" value={note.tag} required minLength={5} name="tag" placeholder="Tag" onChange={onChange}/>

                    </div>

                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
                </form>
        </div>
    );
};

export default AddNote;