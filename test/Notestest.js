const { expect } = require("chai");



describe("Notes", function () {
  it("Should allow a user to store a note", async function () {
    const Notes = await ethers.getContractFactory("Notes");
    const notes = await Notes.deploy();
    await notes.deployed();

    const note = "Test note";
    
    
    const signers = await ethers.getSigners();
    const userAddress = await signers[0].getAddress();

    await notes.storeNote(note, { from: userAddress });

    const notesCount = await notes.getUserNotesCount(userAddress);
    expect(notesCount).to.equal(1);
  });

  it("Should allow a user to retrieve their notes", async function () {
    const Notes = await ethers.getContractFactory("Notes");
    const notes = await Notes.deploy();
    await notes.deployed();

    const note1 = "Note 1";
    const note2 = "Note 2";
    
 
    const signers = await ethers.getSigners();
    const userAddress = await signers[0].getAddress();

    await notes.storeNote(note1, { from: userAddress });
    await notes.storeNote(note2, { from: userAddress });

    const retrievedNotes = await notes.retrieveNotes({ from: userAddress });
    expect(retrievedNotes).to.deep.equal([note1, note2]);
  });

  
  it("Should not allow retrieving notes for an address with no notes", async function () {
    const Notes = await ethers.getContractFactory("Notes");
    const notes = await Notes.deploy();
    await notes.deployed();
  
    const signers = await ethers.getSigners();
    const userAddress = await signers[0].getAddress();
  
    const retrievedNotes = await notes.retrieveNotes({ from: userAddress });
    expect(retrievedNotes).to.deep.equal([]);
  });
  
  
  it("Should store and retrieve a large number of notes", async function () {
    const Notes = await ethers.getContractFactory("Notes");
    const notes = await Notes.deploy();
    await notes.deployed();
  
    const signers = await ethers.getSigners();
    const userAddress = await signers[0].getAddress();
  
   
    const numNotes = 100;
    const notesArray = new Array(numNotes).fill("Large note");
  
    for (const note of notesArray) {
      await notes.storeNote(note, { from: userAddress });
    }
  
    const retrievedNotes = await notes.retrieveNotes({ from: userAddress });
  
  
    expect(retrievedNotes).to.have.lengthOf(numNotes);
  });
});
