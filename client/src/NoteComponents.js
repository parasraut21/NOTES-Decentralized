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
    <div>
      <h2>Store a Note</h2>
      <input
        type="text"
        placeholder="Enter your note"
        value={note}
        onChange={handleNoteChange}
      />
      <button onClick={handleStoreNote}>Store Note</button>
    </div>
  );
}

function NoteList({ account, contract }) {
  const [notes, setNotes] = useState([]);

  const handleRetrieveNotes = async () => {
    if (!contract) {
      console.error("Contract is not available");
      return;
    }

    try {
      const retrievedNotes = await contract.retrieveNotes();
      setNotes(retrievedNotes.filter((note) => note !== ""));
    } catch (error) {
      console.error("Error retrieving notes:", error);
    }
  }

  return (
    <div>
      <h2>Retrieve Notes</h2>
      <button onClick={handleRetrieveNotes}>Retrieve Notes</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export { NoteForm, NoteList };
