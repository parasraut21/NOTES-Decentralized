// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract Notes {
    struct Note {
        address user;
        string text;
    }

    Note[] private userNotes;

    event NoteStored(address indexed user, string note);

    function storeNote(string memory note) public {
        Note memory newNote = Note({
            user: msg.sender,
            text: note
        });

        userNotes.push(newNote);
        emit NoteStored(msg.sender, note);
    }

    function retrieveNotes() public view returns (string[] memory) {
        uint userNotesCount = getUserNotesCount(msg.sender);
        string[] memory notes = new string[](userNotesCount);

        for (uint i = 0; i < userNotesCount; i++) {
            notes[i] = userNotes[i].user == msg.sender ? userNotes[i].text : "";
        }

        return notes;
    }

    function getUserNotesCount(address userAddress) public view returns (uint) {
        uint count = 0;
        for (uint i = 0; i < userNotes.length; i++) {
            if (userNotes[i].user == userAddress) {
                count++;
            }
        }
        return count;
    }
}
