import React, { useState } from "react";
import { ethers } from "ethers";

function NoteForm({ account, provider, contract }) {
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleStoreNote = async () => {
    if (!contract) {
      console.error("Contract is not available");
      return;
    }

    try {
      await contract.storeNote(note);
      setNote(""); // Clear the input field after storing the note
    } catch (error) {
      console.error("Error storing note:", error);
    }
  };

  return (
    <>
   
    <div className="bg-blue-200 p-4 rounded-lg  max-w-md mx-auto">
      <input
        className="w-full p-2 rounded border border-blue-400"
        type="text"
        placeholder="Enter your note"
        value={note}
        onChange={handleNoteChange}
      />
      <button
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleStoreNote}
      >
        Store Note
      </button>
    </div>
    <br/>
    </>
  );
}

function NoteList({ account, contract }) {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRetrieveNotes = async () => {
    if (!contract) {
      console.error("Contract is not available");
      return;
    }

    setIsLoading(true); // Set loading state while retrieving notes.

    try {
      const retrievedNotes = await contract.retrieveNotes();
      setNotes(retrievedNotes.filter((note) => note !== ""));
      if(retrievedNotes.filter((note) => note !== "") == 0){
        setIsLoading(true);
      }else{
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(true);
      console.error("Error retrieving notes:", error);
    } 
  }

  return (
    <div className="bg-blue-200 p-4 rounded-lg max-w-md mx-auto">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleRetrieveNotes}
        disabled={isLoading} // Disable the button during loading.
      >
        {isLoading ? "Loading..." : "Retrieve Notes"}
      </button>
      <div className="mt-4">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 my-2 border border-blue-400"
          >
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

export { NoteForm, NoteList };

// import React, { useState } from "react";
// import { ethers } from "ethers";

// function NoteForm({ account, provider, contract }) {
//   const [note, setNote] = useState("");

//   const handleNoteChange = (e) => {
//     setNote(e.target.value);
//   };

//   const handleStoreNote = async () => {
//     if (!contract) {
//       console.error("Contract is not available");
//       return;
//     }

//     try {
//       await contract.storeNote(note);
//       setNote(""); // Clear the input field after storing the note
//     } catch (error) {
//       console.error("Error storing note:", error);
//     }
//   };

//   return (
//     <div>
   
//       <input
//         type="text"
//         placeholder="Enter your note"
//         value={note}
//         onChange={handleNoteChange}
//       />
//       <button onClick={handleStoreNote}>Store Note</button>
//     </div>
//   );
// }

// function NoteList({ account, contract }) {
//   const [notes, setNotes] = useState([]);

//   const handleRetrieveNotes = async () => {
//     if (!contract) {
//       console.error("Contract is not available");
//       return;
//     }

//     try {
//       const retrievedNotes = await contract.retrieveNotes();
//       setNotes(retrievedNotes.filter((note) => note !== ""));
//     } catch (error) {
//       console.error("Error retrieving notes:", error);
//     }
//   }

//   return (
//     <div>
     
//       <button onClick={handleRetrieveNotes}>Retrieve Notes</button>
//       <ul>
//         {notes.map((note, index) => (
//           <li key={index}>{note}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export { NoteForm, NoteList };
