import Notes from "./artifacts/contracts/Notes.sol/Notes.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Display from "./Display";
import { NoteForm, NoteList } from "./NoteComponents";

import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0xaf1569cC0008AAB9fC4662B4a2a4D8f2A625553c";

        const contract = new ethers.Contract(
          contractAddress,
          Notes.abi,
          signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <>
      <div className="App">
        <h1 style={{ color: "white" }}>Notes</h1>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>

        <NoteForm account={account} contract={contract} />
      <NoteList account={account} contract={contract} />
      </div>
    </>
  );
}

export default App;