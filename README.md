# Decentralized Notes

## Setup Project In Localhost
- **Simply clone the URL, navigate to the client folder in the terminal (cd client), and launch the website by typing npm start to set up my repository on your localhost**

## Project Description

- This project, developed by Paras Raut, is a simple Ethereum Decentralized Application (DApp) that showcases the power of Ethereum smart contracts and Ethers.js integration. The DApp allows users to store and retrieve messages on the Ethereum blockchain, demonstrating the core functionalities of a blockchain-based application.

## **Key Features:**

**Smart Contract:** 
- The project includes a Solidity-based smart contract that enables users to securely store messages on the Ethereum blockchain and retrieve them when needed.

**User-Friendly Frontend:** 
- The frontend of this DApp is built using ReactJS, HTML, CSS, and JavaScript to provide an intuitive and user-friendly interface. Users can easily interact with the smart contract by entering new messages and fetching existing ones.

**Ethers.js Integration:** 
- The primary reason for using "ethresjs" instead of Web3.js could be personal preference, as "ethresjs" might offer a more intuitive and suitable solution for the specific requirements of your Ethereum DApp. Additionally, it could have specialized features, be lightweight, or provide recent improvements that make it a better fit for your project.

**Testing:** 
- Comprehensive tests for the smart contract functions are included to ensure the correctness and reliability of the DApp under different scenarios.

## Problem Statement
### - **You are required to build a simple Ethereum DApp with the following features**
**Smart Contract:** Create an Ethereum smart contract using Solidity.
- Allow users to store a string message on the blockchain.
- Allow users to retrieve the stored message from the blockchain


## Tech Stack

- **Blockchain Platform**: **Ethereum Blockchain** 
  
- **Smart Contracts**: **Solidity** - A python-inspired language and ecosystem we use for writing highly efficient Ethereum Blockchain smart contracts.
  
- **Web Framework**: 
    - **React.js** - Powers the frontend of our platform, ensuring a reactive, efficient, and modular UI.
    - **HardHat**

- **UI Styling**: 
    - **Flowbite css** - A utility-first CSS framework we use for rapid UI development.

### Frontend Dependencies:

- **Metamask Wallet Integration**

## Project Demo

**Demo Screenshots**
- You can see that the account is not connected in this. 
  ![Screenshot 2023-10-28 144141](https://github.com/parasraut21/Videochat/assets/111653346/93bee9d9-dd39-47fc-be0a-f9a0fc0d17b7)

- Login to the Metamask wallet and use your Sepolia testnet to connect your wallet address to the webpage. 
  ![Screenshot 2023-10-28 144840](https://github.com/parasraut21/Videochat/assets/111653346/08db4f0a-6f44-401e-8eda-0cd08cf5d417)

- Put your message in the input, click on the store note, finish the transaction, and then wait for the transaction to be successful.
  ![Screenshot 2023-10-28 145213](https://github.com/parasraut21/Videochat/assets/111653346/fc850c94-8310-4878-89e7-ca394261bb2c)

- You will see your notes on the screen after pressing the retrieve notes button.
  ![Screenshot 2023-10-28 154700](https://github.com/parasraut21/NOTES-Decentralized/assets/111653346/51e8696f-66d2-45ea-b705-9eb98eab7133)

## Testing Demo
- **These are a few test cases for the hardhat-based smart contract.**
- 1. **Should allow a user to store a note:**
This test verifies that the smart contract allows a user to store a note. It deploys the "Notes" contract, stores a test note from a user's address, and checks if the user's notes count increases by one.

- 2. **Should allow a user to retrieve their notes:**
This test ensures that the contract allows a user to retrieve their stored notes. It deploys the contract, stores two notes for a user, and then retrieves the notes for the same user to confirm they match the expected values.

- 3. **Should not allow retrieving notes for an address with no notes:**
This test checks that the contract does not return any notes for an address with no stored notes. It deploys the contract, attempts to retrieve notes for a user without any stored notes, and confirms that an empty array is returned.

- 4. **Should store and retrieve a large number of notes:**
This test validates the contract's ability to handle a large number of stored notes. It deploys the contract, stores a significant number of identical notes from a user, and ensures that all the stored notes are successfully retrieved.

![Screenshot (213)](https://github.com/parasraut21/NOTES-Decentralized/assets/111653346/71f153b5-1000-4fba-8109-da3b4ab1e27a)


## Smart Contract

Delve into the specifics of our blockchain integration. Here's the link to my deployed smart contract https://sepolia.etherscan.io/address/0x5c37aBa07b460A3c0A220e969327C857288C7366.

## Live Project

Why just read when you can experience? Dive into **Decentralized Notes** by visiting my live project https://notes-decentralized.vercel.app/

## Made By

- **Paras Raut**
  - Email: parasraut2511@gmail.com
  - LinkedIn: https://www.linkedin.com/in/paras-raut/
  - GitHub: https://github.com/parasraut21
  - Personal : https://parasraut.netlify.app/
