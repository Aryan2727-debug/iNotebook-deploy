import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import noteContext from "../context/notes/noteContext";

function Notes(props){

    const context = useContext(noteContext);
    let navigate = useNavigate();
    const {notes , getNotes , editNote} = context;

    useEffect(() => {

      if(localStorage.getItem("token")){
         getNotes();
      }
      else{
         navigate("/login");
      }
      // eslint-disable-next-line
    } , []);

    const ref = useRef(null);
    const refClose = useRef(null);

    const updateNote = (currentNote) => {
       ref.current.click();
       setNote({id : currentNote._id , etitle : currentNote.title , edescription : currentNote.description , etag : currentNote.tag});
    };

    const[note , setNote] = useState({id : "" , etitle : "" , edescription : "" , etag : ""});

    const handleClick = (e) => {
      editNote(note.id , note.etitle , note.edescription , note.etag);
      refClose.current.click();
      props.showAlert("Note Updated Successfully" , "success");
   };

   const onChange = (e) => {
      setNote({...note , [e.target.name] : e.target.value})
   };

    return(
        <>

         <AddNote showAlert={props.showAlert}/>

         <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Launch demo modal
         </button>

         <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
               <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
               </div>
               <div className="modal-body">
                  <form className="my-3">
                     <div className="form-group">

                           <label htmlFor="title">Title</label>
                           <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} required minLength={5} aria-describedby="emailHelp" placeholder="Title" onChange={onChange}/>
                           
                     </div>

                     <div className="form-group my-3">

                           <label htmlFor="description">Description</label>
                           <input type="text" className="form-control" id="edescription"value={note.edescription} required minLength={5} name="edescription" placeholder="Description" onChange={onChange}/>

                     </div>

                     <div className="form-group my-3">

                           <label htmlFor="tag">Tag</label>
                           <input type="text" className="form-control" id="etag" value={note.etag} required minLength={5} name="etag" placeholder="Tag" onChange={onChange}/>

                     </div>

                  </form>
               </div>
               <div className="modal-footer">
               <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
               </div>
            </div>
         </div>
         </div>

          <div className="row my-3">
            <h2>Your Notes</h2>
            <div className="container mx-2">
            {notes.length === 0 && "No Notes to display"}
            </div>
            {notes.map((note) => {
               return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
            })}
          </div>

       </>
    );
};

export default Notes;